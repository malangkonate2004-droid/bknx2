import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "./components/CookieBanner";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import { LegalNotice } from "./pages/LegalNotice";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App min-h-screen bg-[#0D1B2A]">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/temoignages" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
            <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </BrowserRouter>
    </div>
  );
}

export default App;
