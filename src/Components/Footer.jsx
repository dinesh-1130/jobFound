import React, { useEffect } from "react";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import JobfountLogo from "../assets/Jobfount.jpg";

const JobfountFooter = () => {
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
    AOS.refresh();
  }, []);

  return (
    <footer className="relative bg-white pt-8 sm:pt-12 pb-4 sm:pb-6 overflow-hidden w-screen overflow-x-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-[#164d61] via-[#E63946] to-[#164d61]"></div>

      {/* Soft Background Glow */}
      <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 bg-[#E63946]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 w-40 sm:w-48 h-40 sm:h-48 bg-[#164d61]/10 rounded-full blur-3xl"></div>

      <div
        className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8"
        data-aos="fade-up"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-10">
          {/* Logo Section */}
          <div
            className="flex flex-col items-center sm:items-start space-y-3 sm:space-y-4 text-center sm:text-left"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={JobfountLogo}
              alt="JobFount Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-lg"
              data-aos="zoom-in"
              data-aos-delay="250"
            />
            <p
              className="text-xs sm:text-sm text-gray-600 max-w-xs leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Empowering connections between job seekers and employers through
              trust, innovation, and opportunity.
            </p>
            <p
              className="text-xs text-gray-500"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-[#164d61]">JobFount</span>.
              All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div
            className="text-center sm:text-right w-full sm:w-auto"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h4
              className="text-sm sm:text-base font-semibold text-[#164d61] mb-2 sm:mb-3"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              Connect With Us
            </h4>
            <div
              className="flex justify-center sm:justify-end gap-3 sm:gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {[
                {
                  icon: Facebook,
                  color: "hover:text-blue-600 hover:bg-blue-50",
                },
                {
                  icon: Linkedin,
                  color: "hover:text-blue-700 hover:bg-blue-50",
                },
                {
                  icon: Instagram,
                  color: "hover:text-pink-600 hover:bg-pink-50",
                },
              ].map(({ icon: Icon, color }, i) => (
                <a
                  key={i}
                  href="#"
                  className={`p-2 sm:p-3 bg-gray-100 rounded-full text-gray-700 transition-all duration-300 shadow-md hover:shadow-lg ${color} hover:scale-110`}
                  data-aos="zoom-in"
                  data-aos-delay={450 + i * 50}
                >
                  <Icon
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] lg:w-5 lg:h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default JobfountFooter;
