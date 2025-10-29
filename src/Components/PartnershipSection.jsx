// import React, { useEffect, useRef } from "react";
// import {
//   Handshake,
//   Users,
//   FileText,
//   Target,
//   CheckCircle,
//   ArrowRight,
// } from "lucide-react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// const PartnershipSection = () => {
//   const headlineRef = useRef(null);
//   const descRef = useRef(null);
//   const benefitsRef = useRef([]);
//   const processRef = useRef([]);
//   const ctaRef = useRef(null);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100,
//     });

//     const elements = [
//       headlineRef.current,
//       descRef.current,
//       ...benefitsRef.current.filter(Boolean),
//       ...processRef.current.filter(Boolean),
//       ctaRef.current,
//     ];

//     elements.forEach((el, index) => {
//       if (el) {
//         setTimeout(() => {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         }, index * 150);
//       }
//     });
//   }, []);

//   const handleContactClick = (e) => {
//     e.preventDefault();
//     const contactSection = document.getElementById("contact-section");
//     if (contactSection) {
//       contactSection.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const benefits = [
//     {
//       icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
//       title: "Verified Candidates",
//       description:
//         "We bring pre-screened, qualified candidates directly to your institute or center",
//       bgColor: "#0a1436ff",
//     },
//     {
//       icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
//       title: "Documentation Management",
//       description:
//         "Complete handling of all paperwork, applications, and administrative tasks",
//       bgColor: "#E63946",
//     },
//     {
//       icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
//       title: "Application Flow",
//       description:
//         "Streamlined candidate pipeline management from inquiry to enrollment",
//       bgColor: "#0a1436ff",
//     },
//   ];

//   const focusPoints = [
//     "Training delivery without administrative burden",
//     "Testing operations with seamless coordination",
//     "Quality candidate experience throughout the journey",
//     "Growth through our network of professionals",
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-80 md:w-96 h-48 sm:h-80 md:h-96 rounded-full opacity-5"
//           style={{ backgroundColor: "#E63946" }}
//         ></div>
//         <div
//           className="absolute bottom-20 sm:bottom-40 left-5 sm:left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full opacity-5"
//           style={{ backgroundColor: "#0a1436ff" }}
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20 relative z-10">
//         {/* Hero Section */}
//         <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24">
//           <div
//             ref={headlineRef}
//             className="transition-all duration-1000 ease-out mb-5 sm:mb-6 md:mb-8"
//             style={{ opacity: 0, transform: "translateY(30px)" }}
//             data-aos="fade-up"
//           >
//             <div className="inline-flex items-center justify-center mb-3 sm:mb-4 md:mb-6 relative">
//               <Handshake
//                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
//                 style={{ color: "#0a1436ff" }}
//               />
//               <div
//                 className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse"
//                 style={{ backgroundColor: "#E63946" }}
//               ></div>
//             </div>
//             <h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4 px-4"
//               style={{ fontFamily: "Anton, sans-serif" }}
//               data-aos="fade-up"
//               data-aos-delay="100"
//             >
//               Partner With
//             </h1>
//             <h1
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4"
//               style={{
//                 fontFamily: "Anton, sans-serif",
//                 backgroundImage:
//                   "linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//               data-aos="fade-up"
//               data-aos-delay="200"
//             >
//               Jobfount
//             </h1>
//           </div>

//           <div
//             ref={descRef}
//             className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 px-4 transition-all duration-1000 ease-out"
//             style={{ opacity: 0, transform: "translateY(30px)" }}
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             <p
//               className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold leading-relaxed"
//               style={{ fontFamily: "Anton, sans-serif" }}
//             >
//               We bring verified candidates to your institute or center, manage
//               application flow, and handle documentation.
//             </p>
//             <p
//               className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
//               style={{ fontFamily: "Anton, sans-serif" }}
//             >
//               You focus on training or testing — we handle coordination and
//               candidate management.
//             </p>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 px-4 sm:px-0">
//           <h2
//             className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-12"
//             style={{ fontFamily: "Anton, sans-serif" }}
//             data-aos="fade-up"
//           >
//             What We Bring to Your Partnership
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
//             {benefits.map((benefit, index) => (
//               <div
//                 key={index}
//                 ref={(el) => (benefitsRef.current[index] = el)}
//                 className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out group border border-gray-100"
//                 style={{ opacity: 0, transform: "translateY(30px)" }}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <div
//                   className="inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-xl lg:rounded-2xl text-white mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
//                   style={{ backgroundColor: benefit.bgColor }}
//                 >
//                   {benefit.icon}
//                 </div>
//                 <h3
//                   className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4"
//                   style={{ fontFamily: "Anton, sans-serif" }}
//                 >
//                   {benefit.title}
//                 </h3>
//                 <p
//                   className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
//                   style={{ fontFamily: "Anton, sans-serif" }}
//                 >
//                   {benefit.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Focus Section */}
//         <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 px-4 sm:px-0">
//           <div
//             className="rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-white relative overflow-hidden"
//             style={{
//               background: "linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)",
//             }}
//             data-aos="fade-up"
//           >
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-2 sm:border-4 border-white rounded-full"></div>
//               <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-2 sm:border-4 border-white rounded-full"></div>
//             </div>

//             <div className="relative z-10">
//               <h2
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12"
//                 style={{ fontFamily: "Anton, sans-serif" }}
//                 data-aos="fade-up"
//               >
//                 You Focus On What Matters
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
//                 {focusPoints.map((point, index) => (
//                   <div
//                     key={index}
//                     ref={(el) => (processRef.current[index] = el)}
//                     className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 bg-white bg-opacity-10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm transition-all duration-1000 ease-out hover:bg-opacity-20"
//                     style={{ opacity: 0, transform: "translateY(30px)" }}
//                     data-aos="fade-up"
//                     data-aos-delay={index * 100}
//                   >
//                     <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 sm:mt-0.5 md:mt-1" />
//                     <p
//                       className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-900"
//                       style={{ fontFamily: "Anton, sans-serif" }}
//                     >
//                       {point}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         {/* <div
//           ref={ctaRef}
//           className="text-center transition-all duration-1000 ease-out px-4 sm:px-0"
//           style={{ opacity: 0, transform: 'translateY(30px)' }}
//           data-aos="fade-up"
//         >
//           <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 max-w-4xl mx-auto border-t-4 relative overflow-hidden" style={{ borderTopColor: '#0a1436ff' }}>
//             <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 opacity-5 rounded-bl-full" style={{ backgroundColor: '#E63946' }}></div>

//             <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
//               Ready to Grow Together?
//             </h3>
//             <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'Anton, sans-serif' }}>
//               Join our network of training institutes and exam centers. Let's create a seamless experience for professionals seeking licensing excellence.
//             </p>
//             <button
//               onClick={handleContactClick}
//               className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-white text-sm sm:text-base md:text-lg font-semibold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-2 md:space-x-3 mx-auto"
//               style={{ background: 'linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)', fontFamily: 'Anton, sans-serif' }}
//               data-aos="fade-up"
//             >
//               <span>Become a Partner</span>
//               <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
//             </button>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default PartnershipSection;
import React, { useEffect, useRef } from "react";
import {
  Handshake,
  Users,
  FileText,
  Target,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const PartnershipSection = () => {
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const benefitsRef = useRef([]);
  const processRef = useRef([]);
  const ctaRef = useRef(null);

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

  const benefits = [
    {
      icon: <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Verified Candidates",
      description:
        "We bring pre-screened, qualified candidates directly to your institute or center",
      bgColor: "#0a1436ff",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Documentation Management",
      description:
        "Complete handling of all paperwork, applications, and administrative tasks",
      bgColor: "#E63946",
    },
    {
      icon: <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />,
      title: "Application Flow",
      description:
        "Streamlined candidate pipeline management from inquiry to enrollment",
      bgColor: "#0a1436ff",
    },
  ];

  const focusPoints = [
    "Training delivery without administrative burden",
    "Testing operations with seamless coordination",
    "Quality candidate experience throughout the journey",
    "Growth through our network of professionals",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-80 md:w-96 h-48 sm:h-80 md:h-96 rounded-full opacity-5"
          style={{ backgroundColor: "#E63946" }}
        ></div>
        <div
          className="absolute bottom-20 sm:bottom-40 left-5 sm:left-10 w-40 sm:w-64 md:w-80 h-40 sm:h-64 md:h-80 rounded-full opacity-5"
          style={{ backgroundColor: "#0a1436ff" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-20 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-24">
          <div
            ref={headlineRef}
            className="transition-all duration-1000 ease-out mb-5 sm:mb-6 md:mb-8"
            data-aos="fade-up"
          >
            <div
              className="inline-flex items-center justify-center mb-3 sm:mb-4 md:mb-6 relative"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <Handshake
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                style={{ color: "#0a1436ff" }}
              />
              <div
                className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 rounded-full animate-pulse"
                style={{ backgroundColor: "#E63946" }}
              ></div>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-1 sm:mb-2 md:mb-4 px-4"
              style={{ fontFamily: "Anton, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="150"
            >
              Partner With
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold px-4"
              style={{
                fontFamily: "Anton, sans-serif",
                backgroundImage:
                  "linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Jobfount
            </h1>
          </div>

          <div
            ref={descRef}
            className="max-w-4xl mx-auto space-y-3 sm:space-y-4 md:space-y-6 px-4 transition-all duration-1000 ease-out"
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 font-semibold leading-relaxed"
              style={{ fontFamily: "Anton, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              We bring verified candidates to your institute or center, manage
              application flow, and handle documentation.
            </p>
            <p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed"
              style={{ fontFamily: "Anton, sans-serif" }}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              You focus on training or testing — we handle coordination and
              candidate management.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 px-4 sm:px-0">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-6 sm:mb-8 md:mb-12"
            style={{ fontFamily: "Anton, sans-serif" }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            What We Bring to Your Partnership
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                ref={(el) => (benefitsRef.current[index] = el)}
                className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl p-5 sm:p-6 md:p-8 lg:p-10 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-out group border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-xl lg:rounded-2xl text-white mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: benefit.bgColor }}
                  data-aos="zoom-in"
                  data-aos-delay={250 + index * 100}
                >
                  {benefit.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4"
                  style={{ fontFamily: "Anton, sans-serif" }}
                  data-aos="fade-up"
                  data-aos-delay={300 + index * 100}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "Anton, sans-serif" }}
                  data-aos="fade-up"
                  data-aos-delay={350 + index * 100}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Focus Section */}
        {/* <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 px-4 sm:px-0">
          <div
            className="rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 text-white relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-5 sm:top-10 right-5 sm:right-10 w-20 sm:w-28 md:w-32 h-20 sm:h-28 md:h-32 border-2 sm:border-4 border-white rounded-full"></div>
              <div className="absolute bottom-5 sm:bottom-10 left-5 sm:left-10 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-2 sm:border-4 border-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-12"
                style={{ fontFamily: "Anton, sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                You Focus On What Matters
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
                {focusPoints.map((point, index) => (
                  <div
                    key={index}
                    ref={(el) => (processRef.current[index] = el)}
                    className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 bg-white bg-opacity-10 rounded-lg sm:rounded-xl p-3 sm:p-4 backdrop-blur-sm transition-all duration-300 ease-out hover:bg-opacity-20"
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                  >
                    <CheckCircle
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0 mt-0.5 sm:mt-0.5 md:mt-1"
                      data-aos="zoom-in"
                      data-aos-delay={350 + index * 100}
                    />
                    <p
                      className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-900"
                      style={{ fontFamily: "Anton, sans-serif" }}
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 100}
                    >
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        {/* CTA Section */}
        {/* <div 
          ref={ctaRef}
          className="text-center transition-all duration-1000 ease-out px-4 sm:px-0"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 max-w-4xl mx-auto border-t-4 relative overflow-hidden" style={{ borderTopColor: '#0a1436ff' }}>
            <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 opacity-5 rounded-bl-full" style={{ backgroundColor: '#E63946' }}></div>
            
            <h3 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6" 
              style={{ fontFamily: 'Anton, sans-serif' }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to Grow Together?
            </h3>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto" 
              style={{ fontFamily: 'Anton, sans-serif' }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join our network of training institutes and exam centers. Let's create a seamless experience for professionals seeking licensing excellence.
            </p>
            <button
              onClick={handleContactClick}
              className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 text-white text-sm sm:text-base md:text-lg font-semibold rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-2 md:space-x-3 mx-auto"
              style={{ background: 'linear-gradient(135deg, #0a1436ff 0%, #E63946 100%)', fontFamily: 'Anton, sans-serif' }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PartnershipSection;
