import requests
import sys
from datetime import datetime
import json

class BKNXAdvisoryAPITester:
    def __init__(self, base_url="https://bknx-advisory.preview.emergentagent.com/api"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")

            self.test_results.append({
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'response_preview': response.text[:200] if response.text else ''
            })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.test_results.append({
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': 'ERROR',
                'success': False,
                'error': str(e)
            })
            return False, {}

    def test_health_endpoints(self):
        """Test basic health endpoints"""
        print("\n=== TESTING HEALTH ENDPOINTS ===")
        
        # Test root endpoint
        self.run_test("API Root", "GET", "", 200)
        
        # Test health check
        self.run_test("Health Check", "GET", "health", 200)

    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n=== TESTING STATUS ENDPOINTS ===")
        
        # Test creating status check
        status_data = {
            "client_name": f"test_client_{datetime.now().strftime('%H%M%S')}"
        }
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "status",
            200,
            data=status_data
        )
        
        # Test getting status checks
        self.run_test("Get Status Checks", "GET", "status", 200)

    def test_contact_form_endpoints(self):
        """Test contact form functionality"""
        print("\n=== TESTING CONTACT FORM ENDPOINTS ===")
        
        # Test valid contact form submission
        contact_data = {
            "firstName": "Jean",
            "lastName": "Dupont",
            "email": "jean.dupont@example.com",
            "phone": "+33 6 12 34 56 78",
            "subject": "Audit & Diagnostic",
            "message": "Bonjour, je souhaiterais obtenir des informations sur vos services d'audit. Pouvez-vous me recontacter ?"
        }
        
        success, response = self.run_test(
            "Submit Valid Contact Form",
            "POST",
            "contact",
            200,
            data=contact_data
        )
        
        if success:
            print(f"   Contact ID: {response.get('id', 'N/A')}")
        
        # Test contact form with missing required fields
        invalid_contact_data = {
            "firstName": "",
            "lastName": "Dupont",
            "email": "invalid-email",
            "subject": "",
            "message": "Too short"
        }
        
        self.run_test(
            "Submit Invalid Contact Form",
            "POST",
            "contact",
            422,  # Validation error expected
            data=invalid_contact_data
        )
        
        # Test getting contact requests (admin endpoint)
        self.run_test("Get Contact Requests", "GET", "contact", 200)

    def test_contact_form_validation(self):
        """Test contact form validation edge cases"""
        print("\n=== TESTING CONTACT FORM VALIDATION ===")
        
        # Test with minimum valid message length
        min_valid_data = {
            "firstName": "Test",
            "lastName": "User",
            "email": "test@example.com",
            "subject": "Test Subject",
            "message": "This is exactly twenty characters long message for testing."
        }
        
        self.run_test(
            "Contact Form - Minimum Valid Message",
            "POST",
            "contact",
            200,
            data=min_valid_data
        )
        
        # Test with invalid email format
        invalid_email_data = {
            "firstName": "Test",
            "lastName": "User",
            "email": "not-an-email",
            "subject": "Test Subject",
            "message": "This is a test message with sufficient length for validation."
        }
        
        self.run_test(
            "Contact Form - Invalid Email",
            "POST",
            "contact",
            422,
            data=invalid_email_data
        )

def main():
    print("🚀 Starting BKNX Advisory API Tests")
    print("=" * 50)
    
    # Setup
    tester = BKNXAdvisoryAPITester()
    
    # Run all tests
    tester.test_health_endpoints()
    tester.test_status_endpoints()
    tester.test_contact_form_endpoints()
    tester.test_contact_form_validation()
    
    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 FINAL RESULTS")
    print(f"Tests passed: {tester.tests_passed}/{tester.tests_run}")
    print(f"Success rate: {(tester.tests_passed/tester.tests_run)*100:.1f}%")
    
    # Print failed tests
    failed_tests = [t for t in tester.test_results if not t['success']]
    if failed_tests:
        print(f"\n❌ FAILED TESTS ({len(failed_tests)}):")
        for test in failed_tests:
            error_msg = test.get('error', f'Status {test.get("actual_status", "unknown")}')
            print(f"   - {test['name']}: {error_msg}")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())