// import React, { useState } from "react";
// import {
//   Briefcase,
//   BarChart3,
//   Users,
//   Award,
//   ChevronLeft,
//   ChevronRight,
// } from "lucide-react";

// const CoreServices = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const services = [
//     {
//       icon: <Briefcase className="w-8 h-8" />,
//       title: "Talent Solutions",
//       description:
//         "End-to-end hiring for startups, SMEs, and corporates — from entry to senior levels.",
//       color: "bg-[#0a1436ff]",
//       microCopy: "From chaos to hires",
//       gradient: "from-[#0a1436ff] ",
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Business Analytics & Insights",
//       description:
//         "Build dashboards and reports that help businesses track performance and make data-driven decisions.",
//       color: "bg-[#E63946]",
//       microCopy: "Data drives decisions",
//       gradient: "from-[#E63946] ",
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Career Support for Candidates",
//       description:
//         "Resume guidance, interview coaching, and placement assistance — 100% transparent and genuine.",
//       color: "bg-[#0a1436ff]",
//       microCopy: "Growth, guided",
//       gradient: "from-[#0a1436ff] ",
//     },
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "Prometric Exam & Licensing Support ⭐",
//       description:
//         "Helping healthcare and IT professionals apply, prepare, and succeed in Prometric & global licensing exams. (Jobfount is not a test center; we provide guidance and coordination support.)",
//       color: "bg-[#E63946]",
//       microCopy: "Excellence, certified",
//       gradient: "from-[#E63946] ",
//     },
//   ];

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % services.length);
//   };

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
//   };

//   const getCardPosition = (index) => {
//     const diff = index - activeIndex;
//     const normalizedDiff = diff < 0 ? diff + services.length : diff;
//     return normalizedDiff;
//   };

//   return (
//     <div id="services" className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 mb-8">
//           <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3">
//             <div>
//               <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight">
//                 Our Core Services
//               </h2>
//               <p className="text-xs sm:text-base text-gray-700 font-medium">
//                 Navigate through our comprehensive solutions
//               </p>
//             </div>
//             <a
//               href="#"
//               className="text-[#E63946] hover:text-[#d62835] font-medium text-xs sm:text-sm flex items-center gap-1 whitespace-nowrap"
//             >
//               Explore all services →
//             </a>
//           </div>

//           <div className="relative overflow-hidden">
//             <button
//               onClick={handlePrev}
//               className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 transition-all"
//               aria-label="Previous service"
//             >
//               <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
//             </button>

//             <button
//               onClick={handleNext}
//               className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 transition-all"
//               aria-label="Next service"
//             >
//               <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
//             </button>

//             <div className="relative h-[440px] sm:h-96 lg:h-[420px] flex items-center justify-center py-6 sm:py-8 px-8 sm:px-4">
//               {services.map((service, index) => {
//                 const position = getCardPosition(index);
//                 const isActive = position === 0;
//                 const isHovered = hoveredIndex === index;

//                 // Mobile: Show only active card centered
//                 // Desktop: Show carousel effect with multiple cards
//                 const isMobile =
//                   typeof window !== "undefined" && window.innerWidth < 640;

//                 return (
//                   <div
//                     key={index}
//                     className="absolute transition-all duration-700 ease-out cursor-pointer"
//                     style={{
//                       transform: `
//                         translateX(${
//                           position === 0 ? 0 : position * 180 - 160
//                         }px)
//                         translateZ(${isActive ? 0 : -100}px)
//                         rotateY(${
//                           position === 0
//                             ? 0
//                             : position === 1
//                             ? -8
//                             : position === services.length - 1
//                             ? 8
//                             : 0
//                         }deg)
//                         scale(${isActive ? (isHovered ? 1.05 : 1) : 0.85})
//                       `,
//                       opacity: position === 0 ? 1 : position <= 2 ? 1 : 0,
//                       zIndex: 10 - position,
//                       pointerEvents:
//                         position === 0
//                           ? "auto"
//                           : position <= 2
//                           ? "auto"
//                           : "none",
//                       display: position > 2 ? "none" : "block",
//                     }}
//                     onClick={() => setActiveIndex(index)}
//                     onMouseEnter={() => setHoveredIndex(index)}
//                     onMouseLeave={() => setHoveredIndex(null)}
//                   >
//                     <div
//                       className={`
//                       w-[280px] sm:w-72 lg:w-80 bg-white rounded-2xl shadow-xl overflow-hidden
//                       transition-all duration-300
//                       ${isActive ? "ring-2 ring-offset-2 ring-gray-200" : ""}
//                       ${isHovered && isActive ? "shadow-2xl" : ""}
//                     `}
//                     >
//                       {!isActive && position === 1 && (
//                         <div className="hidden sm:block absolute top-4 -left-8 z-10">
//                           <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs font-medium px-4 py-1.5 rounded-r-full shadow-lg">
//                             {service.microCopy}
//                           </div>
//                         </div>
//                       )}

//                       <div
//                         className={`bg-gradient-to-br ${service.gradient} p-5 sm:p-6 text-white relative overflow-hidden`}
//                       >
//                         <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
//                         <div className="relative z-10 flex items-center justify-between">
//                           <div className="bg-white rounded-xl p-2.5 sm:p-3">
//                             {React.cloneElement(service.icon, {
//                               className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-900",
//                             })}
//                           </div>
//                           <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
//                             <span className="text-sm font-bold text-gray-900">
//                               0{index + 1}
//                             </span>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="p-5 sm:p-6">
//                         <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
//                           {service.title}
//                         </h3>
//                         <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
//                           {service.description}
//                         </p>

//                         {isActive && null}
//                       </div>

//                       <div
//                         className={`h-1 bg-gradient-to-r ${service.gradient}`}
//                       ></div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             <div className="flex justify-center gap-1.5 sm:gap-2 mt-4">
//               {services.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`
//                     h-1.5 sm:h-2 rounded-full transition-all duration-300
//                     ${
//                       index === activeIndex
//                         ? "w-6 sm:w-8 bg-gray-800"
//                         : "w-1.5 sm:w-2 bg-gray-300"
//                     }
//                   `}
//                   aria-label={`Go to service ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>

//           <div className="hidden lg:block mt-12 pt-8 border-t border-gray-100">
//             <div className="grid grid-cols-4 gap-4">
//               {services.map((service, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveIndex(index)}
//                   className={`
//                     p-4 rounded-lg text-left transition-all
//                     ${
//                       activeIndex === index
//                         ? "bg-gray-50 ring-2 ring-gray-200"
//                         : "hover:bg-gray-50"
//                     }
//                   `}
//                 >
//                   <div
//                     className={`${service.color} w-10 h-10 rounded-lg flex items-center justify-center text-white mb-2`}
//                   >
//                     {React.cloneElement(service.icon, { className: "w-5 h-5" })}
//                   </div>
//                   <div className="text-sm font-semibold text-gray-900">
//                     {service.title}
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CoreServices;
import React, { useState, useEffect } from "react";
import {
  Briefcase,
  BarChart3,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const CoreServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Talent Solutions",
      description:
        "End-to-end hiring for startups, SMEs, and corporates — from entry to senior levels.",
      color: "bg-[#0a1436ff]",
      microCopy: "From chaos to hires",
      gradient: "from-[#0a1436ff] ",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Analytics & Insights",
      description:
        "Build dashboards and reports that help businesses track performance and make data-driven decisions.",
      color: "bg-[#E63946]",
      microCopy: "Data drives decisions",
      gradient: "from-[#E63946] ",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Support for Candidates",
      description:
        "Resume guidance, interview coaching, and placement assistance — 100% transparent and genuine.",
      color: "bg-[#0a1436ff]",
      microCopy: "Growth, guided",
      gradient: "from-[#0a1436ff] ",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Prometric Exam & Licensing Support ⭐",
      description:
        "Helping healthcare and IT professionals apply, prepare, and succeed in Prometric & global licensing exams. (Jobfount is not a test center; we provide guidance and coordination support.)",
      color: "bg-[#E63946]",
      microCopy: "Excellence, certified",
      gradient: "from-[#E63946] ",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const getCardPosition = (index) => {
    const diff = index - activeIndex;
    const normalizedDiff = diff < 0 ? diff + services.length : diff;
    return normalizedDiff;
  };

  return (
    <div id="services" className="bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8 mb-8">
          {/* Header Section */}
          <div
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <h2
                className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                Our Core Services
              </h2>
              <p
                className="text-xs sm:text-base text-gray-700 font-medium"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Navigate through our comprehensive solutions
              </p>
            </div>
            <a
              href="#"
              className="text-[#E63946] hover:text-[#d62835] font-medium text-xs sm:text-sm flex items-center gap-1 whitespace-nowrap"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Explore all services →
            </a>
          </div>

          {/* Carousel Section */}
          <div
            className="relative overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <button
              onClick={handlePrev}
              className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 transition-all"
              aria-label="Previous service"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-1.5 sm:p-2 hover:bg-gray-50 transition-all"
              aria-label="Next service"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
            </button>

            <div className="relative h-[440px] sm:h-96 lg:h-[420px] flex items-center justify-center py-6 sm:py-8 px-8 sm:px-4">
              {services.map((service, index) => {
                const position = getCardPosition(index);
                const isActive = position === 0;
                const isHovered = hoveredIndex === index;

                const isMobile =
                  typeof window !== "undefined" && window.innerWidth < 640;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 ease-out cursor-pointer"
                    style={{
                      transform: `
                        translateX(${
                          position === 0 ? 0 : position * 180 - 160
                        }px) 
                        translateZ(${isActive ? 0 : -100}px)
                        rotateY(${
                          position === 0
                            ? 0
                            : position === 1
                            ? -8
                            : position === services.length - 1
                            ? 8
                            : 0
                        }deg)
                        scale(${isActive ? (isHovered ? 1.05 : 1) : 0.85})
                      `,
                      opacity: position === 0 ? 1 : position <= 2 ? 1 : 0,
                      zIndex: 10 - position,
                      pointerEvents:
                        position === 0
                          ? "auto"
                          : position <= 2
                          ? "auto"
                          : "none",
                      display: position > 2 ? "none" : "block",
                    }}
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    data-aos="fade-up"
                    data-aos-delay={450 + index * 100}
                  >
                    <div
                      className={`
                      w-[280px] sm:w-72 lg:w-80 bg-white rounded-2xl shadow-xl overflow-hidden
                      transition-all duration-300
                      ${isActive ? "ring-2 ring-offset-2 ring-gray-200" : ""}
                      ${isHovered && isActive ? "shadow-2xl" : ""}
                    `}
                    >
                      {!isActive && position === 1 && (
                        <div
                          className="hidden sm:block absolute top-4 -left-8 z-10"
                          data-aos="slide-right"
                          data-aos-delay={500 + index * 100}
                        >
                          <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white text-xs font-medium px-4 py-1.5 rounded-r-full shadow-lg">
                            {service.microCopy}
                          </div>
                        </div>
                      )}

                      <div
                        className={`bg-gradient-to-br ${service.gradient} p-5 sm:p-6 text-white relative overflow-hidden`}
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
                        <div
                          className="relative z-10 flex items-center justify-between"
                          data-aos="zoom-in"
                          data-aos-delay={500 + index * 100}
                        >
                          <div className="bg-white rounded-xl p-2.5 sm:p-3">
                            {React.cloneElement(service.icon, {
                              className: "w-6 h-6 sm:w-8 sm:h-8 text-gray-900",
                            })}
                          </div>
                          <div className="flex items-center justify-center w-8 h-8 bg-white rounded-full">
                            <span className="text-sm font-bold text-gray-900">
                              0{index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5 sm:p-6">
                        <h3
                          className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3"
                          data-aos="fade-up"
                          data-aos-delay={550 + index * 100}
                        >
                          {service.title}
                        </h3>
                        <p
                          className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                          data-aos="fade-up"
                          data-aos-delay={600 + index * 100}
                        >
                          {service.description}
                        </p>
                      </div>

                      <div
                        className={`h-1 bg-gradient-to-r ${service.gradient}`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Carousel Indicators */}
            <div
              className="flex justify-center gap-1.5 sm:gap-2 mt-4"
              data-aos="fade-up"
              data-aos-delay="750"
            >
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    h-1.5 sm:h-2 rounded-full transition-all duration-300
                    ${
                      index === activeIndex
                        ? "w-6 sm:w-8 bg-gray-800"
                        : "w-1.5 sm:w-2 bg-gray-300"
                    }
                  `}
                  aria-label={`Go to service ${index + 1}`}
                  data-aos="zoom-in"
                  data-aos-delay={800 + index * 100}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid Section */}
          <div className="hidden lg:block mt-12 pt-8 border-t border-gray-100">
            <div className="grid grid-cols-4 gap-4">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    p-4 rounded-lg text-left transition-all
                    ${
                      activeIndex === index
                        ? "bg-gray-50 ring-2 ring-gray-200"
                        : "hover:bg-gray-50"
                    }
                  `}
                >
                  <div
                    className={`${service.color} w-10 h-10 rounded-lg flex items-center justify-center text-white mb-2`}
                  >
                    {React.cloneElement(service.icon, { className: "w-5 h-5" })}
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {service.title}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreServices;
