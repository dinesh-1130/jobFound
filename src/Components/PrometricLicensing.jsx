import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircle,
  Globe,
  FileCheck,
  Calendar,
  GraduationCap,
  Briefcase,
  ArrowRight,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrometricLicensing = React.forwardRef((props, ref) => {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const supportServices = [
    {
      icon: <FileCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Exam Eligibility Verification",
      description:
        "Complete document review and eligibility verification for all major licensing authorities",
      color: "#0a1436ff",
      hoverColor: "#164d51",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Scheduling & Coordination",
      description:
        "Seamless coordination with authorized Prometric test centers across multiple regions",
      color: "#E63946",
      hoverColor: "#d32735",
    },
    {
      icon: <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Comprehensive Exam Guidance",
      description:
        "Expert guidance for DHA, MOH, HAAD, QCHP, SCFHS and other international licensing exams",
      color: "#0a1436ff",
      hoverColor: "#164d51",
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Mock Test Preparation",
      description:
        "Partner coaching programs with comprehensive mock tests and personalized study plans",
      color: "#E63946",
      hoverColor: "#d32735",
    },
    {
      icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Post-Licensing Placement",
      description:
        "Exclusive job placement opportunities with leading healthcare organizations after successful licensing",
      color: "#0a1436ff",
      hoverColor: "#164d51",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-7 sm:h-7" />,
      title: "Credential Evaluation",
      description:
        "Professional credential assessment and equivalency documentation for international qualifications",
      color: "#E63946",
      hoverColor: "#d32735",
    },
  ];

  const stats = [
    {
      number: "5000+",
      label: "Professionals Licensed",
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "98%",
      label: "Success Rate",
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      number: "15+",
      label: "Partner Centers",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <div
      ref={ref}
      id="prometric-licensing-section"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 sm:top-20 -left-10 sm:-left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full opacity-5"
          style={{ background: "#164d61" }}
        ></div>
        <div
          className="absolute top-20 sm:top-40 right-5 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 rounded-full opacity-5"
          style={{ background: "#E63946" }}
        ></div>
        <div
          className="absolute bottom-10 sm:bottom-20 left-1/4 sm:left-1/3 w-36 sm:w-72 h-36 sm:h-72 rounded-full opacity-5"
          style={{ background: "#164d61" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-28">
          <div
            className="transition-all duration-1000 ease-out mb-6 sm:mb-8"
            data-aos="fade-up"
          >
            <div
              className="inline-flex items-center justify-center mb-4 sm:mb-6"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="relative">
                <Globe
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                  style={{ color: "#164d61" }}
                />
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse"
                  style={{ background: "#E63946" }}
                ></div>
              </div>
            </div>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight px-4"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Get Licensed.
            </h1>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 leading-tight px-4"
              style={{
                backgroundImage: `linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Go Global.
            </h1>
          </div>

          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 sm:mb-8 transition-all duration-1000 ease-out px-4"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            Prometric Exam & Licensing Support Services by Jobfount
          </h2>

          <div
            className="max-w-4xl mx-auto space-y-4 sm:space-y-5 transition-all duration-1000 ease-out px-4"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            <p
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Jobfount helps healthcare professionals complete every step — from
              eligibility verification to exam booking and post-exam placement.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              We collaborate with verified Prometric centers and training
              institutes to make your licensing journey smoother and
              stress-free.
            </p>
          </div>

          {/* Stats Section - Uncomment to use */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto mt-12 sm:mt-16 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={700 + index * 100}
                className="transition-all duration-300"
              >
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div
                    className="flex items-center justify-center mb-2 sm:mb-3"
                    style={{ color: index % 2 === 0 ? "#0a1436ff" : "#E63946" }}
                    data-aos="zoom-in"
                    data-aos-delay={750 + index * 100}
                  >
                    {stat.icon}
                  </div>
                  <div
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2"
                    style={{ color: index % 2 === 0 ? "#0a1436ff" : "#E63946" }}
                    data-aos="fade-up"
                    data-aos-delay={800 + index * 100}
                  >
                    {stat.number}
                  </div>
                  <div
                    className="text-xs sm:text-sm font-medium text-gray-600"
                    data-aos="fade-up"
                    data-aos-delay={850 + index * 100}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div> */}

          <div
            className="max-w-4xl mx-auto transition-all duration-1000 ease-out px-4 py-6"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div
              className="bg-gradient-to-r from-gray-50 to-slate-50 border-l-4 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-md"
              style={{ borderLeftColor: "#164d61" }}
              data-aos="fade-up"
              data-aos-delay="750"
            >
              <h4
                className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 flex items-center"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <div
                  className="w-2 h-2 rounded-full mr-2 sm:mr-3"
                  style={{ backgroundColor: "#E63946" }}
                ></div>
                Important Disclaimer
              </h4>
              <p
                className="text-sm sm:text-base text-gray-700 leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="850"
              >
                Jobfount is not affiliated with Prometric Inc. or any licensing
                authority. All exams are conducted at official Prometric
                centers. Jobfount provides administrative and support services
                only.
              </p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-16 sm:mb-20 lg:mb-28 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Support Includes
            </h3>
            <div
              className="w-20 sm:w-24 h-1 sm:h-1.5 mx-auto rounded-full"
              style={{
                background: `linear-gradient(to right, #0a1436ff, #E63946)`,
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {supportServices.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 ease-out overflow-hidden border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="p-6 sm:p-8 relative">
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl text-white mb-4 sm:mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{
                      backgroundColor:
                        activeCard === index
                          ? service.hoverColor
                          : service.color,
                      transition: "all 0.3s ease",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={350 + index * 100}
                  >
                    {service.icon}
                  </div>

                  <h4
                    className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-snug"
                    data-aos="fade-up"
                    data-aos-delay={400 + index * 100}
                  >
                    {service.title}
                  </h4>

                  <p
                    className="text-gray-600 leading-relaxed text-sm sm:text-base"
                    data-aos="fade-up"
                    data-aos-delay={450 + index * 100}
                  >
                    {service.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 opacity-5 rounded-bl-full transition-opacity duration-300"
                    style={{
                      backgroundColor: service.color,
                      opacity: activeCard === index ? 0.1 : 0.05,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        {/* <div
          className="text-center mb-16 sm:mb-20 transition-all duration-1000 ease-out px-4"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          <div
            className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-8 sm:p-12 lg:p-16 max-w-5xl mx-auto border border-gray-100 relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="950"
          >
            <div
              className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r"
              style={{
                background: `linear-gradient(to right, #0a1436ff, #E63946)`,
              }}
            ></div>

            <h3
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Ready to Start Your Licensing Journey?
            </h3>
            <p
              className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="1050"
            >
              Join thousands of healthcare professionals who have successfully
              obtained their international licenses with Jobfount.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center"
              data-aos="fade-up"
              data-aos-delay="1100"
            >
              <button
                onClick={handleContactClick}
                className="group w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 text-base sm:text-lg"
                style={{ backgroundColor: "#164d61" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0a1436ff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#164d61")
                }
                data-aos="zoom-in"
                data-aos-delay="1150"
              >
                <span>Get Licensing Help</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleContactClick}
                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-300 text-base sm:text-lg"
                style={{ backgroundColor: "#E63946" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d32735")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#E63946")
                }
                data-aos="zoom-in"
                data-aos-delay="1200"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
});

export default PrometricLicensing;
