import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import JobfountHero from "./Components/Hero.jsx";
import CoreServices from "./Components/CoreSection.jsx";
import PrometricLicensing from "./Components/PrometricLicensing.jsx";
import PartnershipSection from "./Components/PartnershipSection.jsx";
import JobfountFooter from "./Components/Footer.jsx";
import HireTalentPage from "./Components/HireTalent.jsx";
import FindJobsPage from "./Components/FindJobs.jsx";
import ContactUs from "./Components/Contact.jsx";
import "./App.css";
import About from "./Components/About.jsx";
import Promise from "./Components/Promise.jsx";
function HomePage() {
  const prometricLicensingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    // Refresh AOS when page content changes
    AOS.refresh();
  }, []);

  useEffect(() => {
    // Scroll to contact section
    if (location.state?.scrollToContact) {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
      return () => clearTimeout(timer);
    }

    // Scroll to services section
    if (location.state?.scrollToServices) {
      const timer = setTimeout(() => {
        const servicesSection = document.getElementById("services");
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      <JobfountHero prometricLicensingRef={prometricLicensingRef} />
      <About />
      <CoreServices />
      <PrometricLicensing ref={prometricLicensingRef} />
      <PartnershipSection />
      <Promise />
      <ContactUs />
      <JobfountFooter />
    </div>
  );
}

function App() {
  useEffect(() => {
    // Initialize AOS globally when app mounts
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out",
      delay: 0,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/findjobs" element={<FindJobsPage />} />
      <Route path="/hiretalents" element={<HireTalentPage />} />
      <Route path="/licensing" element={<PrometricLicensing />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/services" element={<CoreServices />} />
    </Routes>
  );
}

export default App;
