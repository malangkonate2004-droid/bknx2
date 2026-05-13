from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="BKNX Advisory API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ─── Email helper ────────────────────────────────────────────────────────────

def send_email_notification(contact: dict):
    """Envoie un email de notification quand un formulaire contact est soumis."""
    smtp_host     = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
    smtp_port     = int(os.environ.get('SMTP_PORT', 587))
    smtp_user     = os.environ.get('SMTP_USER')       # votre adresse Gmail
    smtp_password = os.environ.get('SMTP_PASSWORD')   # mot de passe d'application Gmail
    recipient     = os.environ.get('CONTACT_EMAIL', smtp_user)  # destinataire des demandes

    if not smtp_user or not smtp_password:
        logger.warning("SMTP non configuré — email non envoyé.")
        return

    # Email de notification pour l'admin
    msg = MIMEMultipart('alternative')
    msg['Subject'] = f"[BKNX] Nouvelle demande : {contact['subject']}"
    msg['From']    = smtp_user
    msg['To']      = recipient

    html = f"""
    <html><body style="font-family:Arial,sans-serif;color:#333;">
      <h2 style="color:#1a237e;">Nouvelle demande de contact — BKNX Advisory</h2>
      <table style="border-collapse:collapse;width:100%;">
        <tr><td style="padding:8px;font-weight:bold;width:150px;">Prénom</td>
            <td style="padding:8px;">{contact['firstName']}</td></tr>
        <tr style="background:#f5f5f5;">
            <td style="padding:8px;font-weight:bold;">Nom</td>
            <td style="padding:8px;">{contact['lastName']}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Email</td>
            <td style="padding:8px;"><a href="mailto:{contact['email']}">{contact['email']}</a></td></tr>
        <tr style="background:#f5f5f5;">
            <td style="padding:8px;font-weight:bold;">Téléphone</td>
            <td style="padding:8px;">{contact.get('phone') or '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;">Sujet</td>
            <td style="padding:8px;">{contact['subject']}</td></tr>
        <tr style="background:#f5f5f5;">
            <td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:8px;white-space:pre-wrap;">{contact['message']}</td></tr>
      </table>
      <p style="color:#888;font-size:12px;margin-top:20px;">
        Reçu le {contact['created_at']} — BKNX Advisory Platform
      </p>
    </body></html>
    """
    msg.attach(MIMEText(html, 'html'))

    try:
        with smtplib.SMTP(smtp_host, smtp_port) as server:
            server.ehlo()
            server.starttls()
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, recipient, msg.as_string())
        logger.info(f"Email de notification envoyé à {recipient}")
    except Exception as e:
        logger.error(f"Erreur envoi email : {e}")


# ─── Models ──────────────────────────────────────────────────────────────────

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    firstName: str = Field(..., min_length=1, max_length=100)
    lastName:  str = Field(..., min_length=1, max_length=100)
    email:     EmailStr
    phone:     Optional[str] = Field(None, max_length=20)
    subject:   str = Field(..., min_length=1, max_length=200)
    message:   str = Field(..., min_length=20, max_length=5000)

class ContactResponse(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id:        str
    firstName: str
    lastName:  str
    email:     str
    phone:     Optional[str]
    subject:   str
    message:   str
    status:    str
    created_at: str


# ─── Routes ──────────────────────────────────────────────────────────────────

@api_router.get("/")
async def root():
    return {"message": "BKNX Advisory API"}

@api_router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "BKNX Advisory"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj  = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact_form(contact: ContactRequest):
    """Enregistre la demande et envoie un email de notification."""
    try:
        contact_id = str(uuid.uuid4())
        created_at = datetime.now(timezone.utc).isoformat()

        doc = {
            "id":        contact_id,
            "firstName": contact.firstName,
            "lastName":  contact.lastName,
            "email":     contact.email,
            "phone":     contact.phone,
            "subject":   contact.subject,
            "message":   contact.message,
            "status":    "new",
            "created_at": created_at
        }

        await db.contact_requests.insert_one(doc)
        doc.pop('_id', None)

        # ← envoi email
        send_email_notification(doc)

        logger.info(f"Nouvelle demande de {contact.email} — {contact.subject}")
        return ContactResponse(**doc)

    except Exception as e:
        logger.error(f"Erreur formulaire contact : {e}")
        raise HTTPException(status_code=500, detail="Erreur lors de l'envoi du formulaire")

@api_router.get("/contact", response_model=List[ContactResponse])
async def get_contact_requests():
    """Récupère toutes les demandes (admin)."""
    contacts = await db.contact_requests.find({}, {"_id": 0}).to_list(1000)
    return [ContactResponse(**c) for c in contacts]


# ─── App setup ───────────────────────────────────────────────────────────────

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()