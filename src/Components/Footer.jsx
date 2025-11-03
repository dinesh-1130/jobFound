import React, { useEffect, useState } from "react";
import {
  Facebook,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  Globe,
  MapPin,
  ChevronDown,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobfountLogo from "../assets/Jobfount.jpeg";

const JobfountFooter = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [expandedMobile, setExpandedMobile] = useState({
    contactUs: false,
    followUs: false,
  });

  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Mobile Design with Accordion
  if (isMobile) {
    return (
      <footer className="relative bg-[#164d61] py-6 overflow-hidden w-full">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Logo and Description */}
          <div className="flex flex-col items-center text-center mb-6 pb-6 border-b border-gray-700">
            <img
              src={JobfountLogo}
              alt="JobFount Logo"
              className="h-16 w-auto object-contain mb-3 hover:scale-105 transition-transform duration-300"
            />
            <p className="text-xs text-gray-300 leading-relaxed max-w-xs">
              Empowering connections between job seekers and employers through
              trust, innovation, and opportunity.
            </p>
          </div>

          {/* Accordion Sections */}

          {/* Contact Us */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("contactUs")}
              className="w-full flex justify-between items-center py-4 text-white font-semibold text-sm hover:text-gray-200 transition-colors"
            >
              <span>Contact Us</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  expandedMobile.contactUs ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMobile.contactUs && (
              <div className="pb-4 pl-4 flex flex-col gap-3">
                <a
                  href="mailto:info@jobfount.con"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "white" }}
                >
                  <Mail className="w-4 h-4" style={{ color: "white" }} />
                  <span>info@jobfount.con</span>
                </a>
                <a
                  href="tel:+917010745548"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "white" }}
                >
                  <Phone className="w-4 h-4" style={{ color: "white" }} />
                  <span>+91 7010745548</span>
                </a>
                <a
                  href="https://www.jobfount.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs"
                  style={{ color: "white" }}
                >
                  <Globe className="w-4 h-4" style={{ color: "white" }} />
                  <span>www.jobfount.com</span>
                </a>
                <div className="flex items-start gap-2 pt-2">
                  <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-white leading-relaxed">
                    583, School Rd, D-Sector,
                    <br />
                    Anna Nagar West Extension,
                    <br />
                    Chennai, Tamil Nadu 600101
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Follow Us */}
          <div className="border-b border-gray-700">
            <button
              onClick={() => toggleSection("followUs")}
              className="w-full flex justify-between items-center py-4 text-white font-semibold text-sm hover:text-gray-200 transition-colors"
            >
              <span>Follow Us</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${
                  expandedMobile.followUs ? "rotate-180" : ""
                }`}
              />
            </button>
            {expandedMobile.followUs && (
              <div className="pb-4 flex justify-center gap-4">
                {[
                  {
                    icon: Facebook,
                  },
                  {
                    icon: Linkedin,
                  },
                  {
                    icon: Instagram,
                  },
                ].map(({ icon: Icon }, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-2 sm:p-3 bg-[#1f5a70] rounded-full text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  >
                    <Icon
                      size={16}
                      className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
                      style={{ color: "white" }}
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Copyright */}
          <div className="pt-4 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white">JobFount</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  // Desktop Design - UNCHANGED
  return (
    <footer className="relative bg-[#164d61] pt-8 sm:pt-12 pb-4 sm:pb-6 overflow-hidden w-full">
      <div
        className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Column 1: Logo Section */}
          <div
            className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 text-center sm:text-left"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={JobfountLogo}
              alt="JobFount Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay="150"
            />
            <p
              className="text-xs sm:text-sm text-gray-300 max-w-xs leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Empowering connections between job seekers and employers through
              trust, innovation, and opportunity.
            </p>
          </div>

          {/* Column 2: Contact Info */}
          <div
            className="flex flex-col items-center sm:items-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">
              Contact Info
            </h4>
            <div className="flex flex-col items-center sm:items-start gap-2 text-center sm:text-left">
              <a
                href="mailto:info@jobfount.con"
                className="flex items-center gap-2 text-xs sm:text-sm hover:text-white transition-colors"
                style={{ color: "white" }}
              >
                <Mail className="w-4 h-4" style={{ color: "white" }} />
                info@jobfount.con
              </a>
              <a
                href="tel:+917010745548"
                className="flex items-center gap-2 text-xs sm:text-sm hover:text-white transition-colors"
                style={{ color: "white" }}
              >
                <Phone className="w-4 h-4" style={{ color: "white" }} />
                +91 7010745548
              </a>
              <a
                href="https://www.jobfount.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs sm:text-sm hover:text-white transition-colors"
                style={{ color: "white" }}
              >
                <Globe className="w-4 h-4" style={{ color: "white" }} />
                www.jobfount.com
              </a>
            </div>
          </div>

          {/* Column 3: Address */}
          <div
            className="flex flex-col items-center sm:items-start"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4">
              Our Office
            </h4>
            <div className="flex items-start gap-2 text-center sm:text-left">
              <MapPin className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                583, School Rd, D-Sector,
                <br />
                Anna Nagar West Extension,
                <br />
                Chennai, Tamil Nadu 600101
              </p>
            </div>
          </div>

          {/* Column 4: Social Links */}
          <div
            className="text-center sm:text-left w-full sm:w-auto"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <h4
              className="text-sm sm:text-base font-semibold text-white mb-3 sm:mb-4"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              Connect With Us
            </h4>
            <div
              className="flex justify-center sm:justify-start gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {[
                {
                  icon: Facebook,
                },
                {
                  icon: Linkedin,
                },
                {
                  icon: Instagram,
                },
              ].map(({ icon: Icon }, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 sm:p-3 bg-[#1f5a70] rounded-full text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110"
                  data-aos="zoom-in"
                  data-aos-delay={550 + i * 50}
                >
                  <Icon
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
                    style={{ color: "white" }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="border-t border-gray-700 mt-8 pt-4 sm:mt-12 sm:pt-6 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">JobFount</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default JobfountFooter;
