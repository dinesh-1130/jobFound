// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import JobfountLogo from "../assets/Jobfount.jpeg";
// import { Menu, X } from "lucide-react";

// export default function Header({ prometricLicensingRef }) {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleFindJobsClick = (e) => {
//     e.preventDefault();
//     navigate("/findjobs");
//     setMobileMenuOpen(false);
//   };

//   const handleHireTalentClick = (e) => {
//     e.preventDefault();
//     navigate("/hiretalents");
//     setMobileMenuOpen(false);
//   };

//   const handleHomeClick = (e) => {
//     e.preventDefault();
//     navigate("/");
//     setMobileMenuOpen(false);
//   };

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     // If not on home page, navigate first
//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollToContact: true } });
//     } else {
//       const contactSection = document.getElementById("contact-section");
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//     setMobileMenuOpen(false);
//   };

//   const handleServicesClick = (e) => {
//     e.preventDefault();
//     // If not on home page, navigate first
//     if (location.pathname !== "/") {
//       navigate("/", { state: { scrollToServices: true } });
//     } else {
//       const servicesSection = document.getElementById("services");
//       if (servicesSection) {
//         servicesSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//     setMobileMenuOpen(false);
//   };

//   const handleLicensingSupportClick = () => {
//     if (prometricLicensingRef && prometricLicensingRef.current) {
//       prometricLicensingRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 animate-[fadeIn_0.6s_ease-out] ${
//           scrolled ? "py-2" : "py-4"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div
//             className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-500 ${
//               scrolled ? "shadow-xl" : "shadow-md"
//             }`}
//           >
//             <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6">
//               <div className="flex items-center animate-[slideRight_0.8s_ease-out]">
//                 <a
//                   href="/"
//                   onClick={handleHomeClick}
//                   className="flex items-center"
//                 >
//                   <img
//                     src={JobfountLogo}
//                     alt="Jobfount Logo"
//                     className="h-16 sm:h-20 w-auto transition-all duration-300"
//                   />
//                 </a>
//               </div>

//               <nav className="hidden md:flex items-center space-x-2 animate-[fadeIn_1s_ease-out_0.3s_both]">
//                 <a
//                   href="/"
//                   onClick={handleHomeClick}
//                   className="relative text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 bg-[#164d61]/5 hover:bg-[#164d61]/10 group overflow-hidden"
//                 >
//                   <span className="relative z-10">Home</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//                 </a>
//                 <a
//                   href="/findjobs"
//                   onClick={handleFindJobsClick}
//                   className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
//                 >
//                   <span className="relative z-10">Find Jobs</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//                 </a>
//                 <a
//                   href="/hiretalents"
//                   onClick={handleHireTalentClick}
//                   className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
//                 >
//                   <span className="relative z-10">Hire Talents</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//                 </a>
//                 <a
//                   href="#services"
//                   onClick={handleServicesClick}
//                   className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
//                 >
//                   <span className="relative z-10">Services</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//                 </a>
//                 <a
//                   href="#contact-section"
//                   onClick={handleContactClick}
//                   className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
//                 >
//                   <span className="relative z-10">Contact Us</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
//                 </a>
//               </nav>

//               <div className="flex items-center gap-3">
//                 <button
//                   className="md:hidden p-2 text-gray-600 hover:text-[#164d61] hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-110"
//                   onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                   aria-label="Toggle menu"
//                 >
//                   {mobileMenuOpen ? (
//                     <X className="w-6 h-6" />
//                   ) : (
//                     <Menu className="w-6 h-6" />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {mobileMenuOpen && (
//             <div className="md:hidden mt-4 animate-[slideDown_0.3s_ease-out]">
//               <nav className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-4 space-y-2">
//                 <a
//                   href="/"
//                   onClick={handleHomeClick}
//                   className="block text-[#164d61] bg-[#164d61]/5 hover:bg-[#164d61]/10 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/findjobs"
//                   onClick={handleFindJobsClick}
//                   className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
//                 >
//                   Find Jobs
//                 </a>
//                 <a
//                   href="/hiretalents"
//                   onClick={handleHireTalentClick}
//                   className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
//                 >
//                   Hire Talents
//                 </a>
//                 <a
//                   href="#services"
//                   onClick={handleServicesClick}
//                   className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
//                 >
//                   Services
//                 </a>
//                 <a
//                   href="#contact-section"
//                   onClick={handleContactClick}
//                   className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
//                 >
//                   Contact Us
//                 </a>
//               </nav>
//             </div>
//           )}
//         </div>
//       </header>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slideRight {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideLeft {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `,
//         }}
//       />
//     </>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import JobfountLogo from "../assets/Jobfount.jpeg";
import { Menu, X } from "lucide-react";

export default function Header({ prometricLicensingRef }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFindJobsClick = (e) => {
    e.preventDefault();
    navigate("/findjobs");
    setMobileMenuOpen(false);
  };

  const handleHireTalentClick = (e) => {
    e.preventDefault();
    navigate("/hiretalents");
    setMobileMenuOpen(false);
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    setMobileMenuOpen(false);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    // If not on home page, navigate first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToContact: true } });
    } else {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    // If not on home page, navigate first
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToServices: true } });
    } else {
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleLicensingSupportClick = () => {
    if (prometricLicensingRef && prometricLicensingRef.current) {
      prometricLicensingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 animate-[fadeIn_0.6s_ease-out] ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg transition-all duration-500 ${
              scrolled ? "shadow-xl" : "shadow-md"
            }`}
          >
            <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-6">
              <div className="flex items-center animate-[slideRight_0.8s_ease-out]">
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className="flex items-center"
                >
                  <img
                    src={JobfountLogo}
                    alt="Jobfount Logo"
                    className="h-16 sm:h-20 w-auto transition-all duration-300"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-2 animate-[fadeIn_1s_ease-out_0.3s_both]">
                <a
                  href="/"
                  onClick={handleHomeClick}
                  className="relative text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 bg-[#164d61]/5 hover:bg-[#164d61]/10 group overflow-hidden"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
                <a
                  href="/findjobs"
                  onClick={handleFindJobsClick}
                  className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
                >
                  <span className="relative z-10">Find Jobs</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
                <a
                  href="/hiretalents"
                  onClick={handleHireTalentClick}
                  className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
                >
                  <span className="relative z-10">Hire Talents</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
                <a
                  href="#services"
                  onClick={handleServicesClick}
                  className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
                >
                  <span className="relative z-10">Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
                <a
                  href="#contact-section"
                  onClick={handleContactClick}
                  className="relative text-gray-600 hover:text-[#164d61] px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#164d61]/0 via-[#164d61]/10 to-[#164d61]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                </a>
              </nav>

              {/* Mobile Menu Toggle */}
              <div className="flex items-center gap-3">
                <button
                  className="md:hidden p-2 text-gray-600 hover:text-[#164d61] hover:bg-gray-50 rounded-xl transition-all duration-300 hover:scale-110"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
                <nav className="p-3 space-y-1">
                  <a
                    href="/"
                    onClick={handleHomeClick}
                    className="block text-[#164d61] bg-[#164d61]/5 hover:bg-[#164d61]/10 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm sm:text-base"
                  >
                    Home
                  </a>
                  <a
                    href="/findjobs"
                    onClick={handleFindJobsClick}
                    className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm sm:text-base"
                  >
                    Find Jobs
                  </a>
                  <a
                    href="/hiretalents"
                    onClick={handleHireTalentClick}
                    className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm sm:text-base"
                  >
                    Hire Talents
                  </a>
                  <a
                    href="#services"
                    onClick={handleServicesClick}
                    className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm sm:text-base"
                  >
                    Services
                  </a>
                  <a
                    href="#contact-section"
                    onClick={handleContactClick}
                    className="block text-gray-600 hover:text-[#164d61] hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-md text-sm sm:text-base"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `,
        }}
      />
    </>
  );
}
