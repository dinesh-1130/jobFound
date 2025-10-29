// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import JobfountLogo from "../assets/Jobfount.jpeg";
// import { Menu, X } from "lucide-react";
// import Header from "./Header.jsx";

// const SplitText = ({
//   text,
//   className = "",
//   delay = 50,
//   duration = 0.6,
//   tag = "h1",
// }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible || !ref.current) return;

//     const chars = ref.current.querySelectorAll(".split-char");
//     chars.forEach((char, index) => {
//       setTimeout(() => {
//         char.style.opacity = "1";
//         char.style.transform = "translateY(0)";
//       }, index * delay);
//     });
//   }, [isVisible, delay]);

//   const renderChars = () => {
//     return text.split("").map((char, index) => (
//       <span
//         key={index}
//         className="split-char inline-block"
//         style={{
//           opacity: 0,
//           transform: "translateY(40px)",
//           transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
//           willChange: "transform, opacity",
//         }}
//       >
//         {char === " " ? "\u00A0" : char}
//       </span>
//     ));
//   };

//   const Tag = tag;
//   return (
//     <Tag ref={ref} className={className}>
//       {renderChars()}
//     </Tag>
//   );
// };

// export default function Hero({ prometricLicensingRef }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("All categories");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleFindJobsClick = () => {
//     navigate("/findjobs");
//     setMobileMenuOpen(false);
//   };

//   const handleHireTalentClick = () => {
//     navigate("/hiretalents");
//     setMobileMenuOpen(false);
//   };

//   const handleLicensingSupportClick = () => {
//     if (prometricLicensingRef && prometricLicensingRef.current) {
//       prometricLicensingRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif] w-full overflow-x-hidden">
//       <Header prometricLicensingRef={prometricLicensingRef} />

//       <section
//         id="hero-section"
//         className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-orange-100 pt-32 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 animate-[fadeIn_0.8s_ease-out] w-full"
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//           <div className="mb-8 sm:mb-10 lg:mb-12">
//             <div className="mb-6 sm:mb-8 text-center overflow-x-hidden">
//               <div className="inline-block min-w-0">
//                 <SplitText
//                   text="Unlocking Talent."
//                   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight"
//                   delay={50}
//                   duration={0.6}
//                   tag="h1"
//                 />
//               </div>
//               <div className="inline-block min-w-0">
//                 <SplitText
//                   text="Illuminating Growth."
//                   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
//                   delay={50}
//                   duration={0.6}
//                   tag="h1"
//                 />
//               </div>
//             </div>

//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto mb-8 sm:mb-10 leading-relaxed text-center animate-[fadeIn_1s_ease-out_0.8s_both] px-4">
//               Jobfount combines recruitment expertise with data analytics —
//               helping people find jobs, helping businesses hire smarter, and now
//               helping professionals achieve international licensing success.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-10 lg:mb-12 px-4">
//               <button
//                 className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1s_both] text-sm sm:text-base"
//                 onClick={handleFindJobsClick}
//               >
//                 Find Jobs
//               </button>
//               <button
//                 className="bg-[#0a1436ff] hover:bg-[#164d50] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.1s_both] text-sm sm:text-base"
//                 onClick={handleHireTalentClick}
//               >
//                 Hire Talent
//               </button>
//               <button
//                 className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.2s_both] text-sm sm:text-base"
//                 onClick={handleLicensingSupportClick}
//               >
//                 Licensing Support
//               </button>
//             </div>
//           </div>

//           {/* <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-2 sm:p-3 flex flex-col md:flex-row gap-2 sm:gap-3 animate-[fadeIn_1s_ease-out_1.3s_both] border border-gray-100">
//             <input
//               type="text"
//               placeholder="Job title or keyword"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="flex-1 px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1436ff] focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-400 text-sm sm:text-base"
//             />
//             <select
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="px-4 sm:px-5 py-3 sm:py-3.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a1436ff] focus:border-transparent bg-white transition-all duration-300 text-gray-700 cursor-pointer text-sm sm:text-base"
//             >
//               <option>All categories</option>
//               <option>Software</option>
//               <option>Healthcare</option>
//               <option>Marketing</option>
//               <option>Production</option>
//             </select>
//             <button className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold whitespace-nowrap shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 text-sm sm:text-base">
//               Find Jobs
//             </button>
//           </div> */}
//         </div>
//       </section>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

//         * {
//           box-sizing: border-box;
//         }

//         html, body {
//           width: 100%;
//           max-width: 100vw;
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//         }

//         .split-char {
//           display: inline-block;
//           white-space: pre;
//         }

//         @media (max-width: 640px) {
//           h1 {
//             font-size: clamp(1.5rem, 8vw, 3rem) !important;
//             line-height: 1.2;
//           }
//         }

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

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
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
//     </div>
//   );
// }
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import JobfountLogo from "../assets/Jobfount.jpeg";
// import bgImage from "../assets/img.jpg";
// import { Menu, X } from "lucide-react";
// import Header from "./Header.jsx";

// const SplitText = ({
//   text,
//   className = "",
//   delay = 50,
//   duration = 0.6,
//   tag = "h1",
// }) => {
//   const ref = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (!isVisible || !ref.current) return;

//     const chars = ref.current.querySelectorAll(".split-char");
//     chars.forEach((char, index) => {
//       setTimeout(() => {
//         char.style.opacity = "1";
//         char.style.transform = "translateY(0)";
//       }, index * delay);
//     });
//   }, [isVisible, delay]);

//   const renderChars = () => {
//     return text.split("").map((char, index) => (
//       <span
//         key={index}
//         className="split-char inline-block"
//         style={{
//           opacity: 0,
//           transform: "translateY(40px)",
//           transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
//           willChange: "transform, opacity",
//         }}
//       >
//         {char === " " ? "\u00A0" : char}
//       </span>
//     ));
//   };

//   const Tag = tag;
//   return (
//     <Tag ref={ref} className={className}>
//       {renderChars()}
//     </Tag>
//   );
// };

// export default function Hero({ prometricLicensingRef }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [category, setCategory] = useState("All categories");
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleFindJobsClick = () => {
//     navigate("/findjobs");
//     setMobileMenuOpen(false);
//   };

//   const handleHireTalentClick = () => {
//     navigate("/hiretalents");
//     setMobileMenuOpen(false);
//   };

//   const handleLicensingSupportClick = () => {
//     if (prometricLicensingRef && prometricLicensingRef.current) {
//       prometricLicensingRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//     setMobileMenuOpen(false);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-['Inter',sans-serif] w-full overflow-x-hidden">
//       <Header prometricLicensingRef={prometricLicensingRef} />

//       <section
//         id="hero-section"
//         className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-orange-100 pt-32 sm:pt-40 lg:pt-48 pb-32 sm:pb-40 lg:pb-48 animate-[fadeIn_0.8s_ease-out] w-full relative"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundAttachment: "fixed",
//         }}
//       >
//         {/* Overlay for better text visibility */}
//         <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 via-purple-50/90 to-orange-100/95"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
//           <div className="mb-8 sm:mb-12 lg:mb-16">
//             <div className="mb-6 sm:mb-10 text-center overflow-x-hidden">
//               <div className="inline-block min-w-0">
//                 <SplitText
//                   text="Unlocking Talent."
//                   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight"
//                   delay={50}
//                   duration={0.6}
//                   tag="h1"
//                 />
//               </div>
//               <div className="inline-block min-w-0">
//                 <SplitText
//                   text="Illuminating Growth."
//                   className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
//                   delay={50}
//                   duration={0.6}
//                   tag="h1"
//                 />
//               </div>
//             </div>

//             <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto mb-10 sm:mb-14 leading-relaxed text-center animate-[fadeIn_1s_ease-out_0.8s_both] px-4">
//               Jobfount combines recruitment expertise with data analytics —
//               helping people find jobs, helping businesses hire smarter, and now
//               helping professionals achieve international licensing success.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
//               <button
//                 className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1s_both] text-sm sm:text-base"
//                 onClick={handleFindJobsClick}
//               >
//                 Find Jobs
//               </button>
//               <button
//                 className="bg-[#0a1436ff] hover:bg-[#164d50] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.1s_both] text-sm sm:text-base"
//                 onClick={handleHireTalentClick}
//               >
//                 Hire Talent
//               </button>
//               <button
//                 className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.2s_both] text-sm sm:text-base"
//                 onClick={handleLicensingSupportClick}
//               >
//                 Licensing Support
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

//         * {
//           box-sizing: border-box;
//         }

//         html, body {
//           width: 100%;
//           max-width: 100vw;
//           overflow-x: hidden;
//           margin: 0;
//           padding: 0;
//         }

//         .split-char {
//           display: inline-block;
//           white-space: pre;
//         }

//         @media (max-width: 640px) {
//           h1 {
//             font-size: clamp(1.5rem, 8vw, 3rem) !important;
//             line-height: 1.2;
//           }
//         }

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

//         @keyframes slideUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
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
//     </div>
//   );
// }
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import JobfountLogo from "../assets/Jobfount.jpeg";
import bgImage from "../assets/img.jpg";
import { Menu, X } from "lucide-react";
import Header from "./Header.jsx";

const SplitText = ({
  text,
  className = "",
  delay = 50,
  duration = 0.6,
  tag = "h1",
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    const chars = ref.current.querySelectorAll(".split-char");
    chars.forEach((char, index) => {
      setTimeout(() => {
        char.style.opacity = "1";
        char.style.transform = "translateY(0)";
      }, index * delay);
    });
  }, [isVisible, delay]);

  const renderChars = () => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        className="split-char inline-block"
        style={{
          opacity: 0,
          transform: "translateY(40px)",
          transition: `all ${duration}s cubic-bezier(0.22, 1, 0.36, 1)`,
          willChange: "transform, opacity",
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const Tag = tag;
  return (
    <Tag ref={ref} className={className}>
      {renderChars()}
    </Tag>
  );
};

export default function Hero({ prometricLicensingRef }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All categories");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleFindJobsClick = () => {
    navigate("/findjobs");
    setMobileMenuOpen(false);
  };

  const handleHireTalentClick = () => {
    navigate("/hiretalents");
    setMobileMenuOpen(false);
  };

  const handleLicensingSupportClick = () => {
    if (prometricLicensingRef && prometricLicensingRef.current) {
      prometricLicensingRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className=" bg-gray-50 font-['Inter',sans-serif] w-full ">
      <Header prometricLicensingRef={prometricLicensingRef} />

      <section
        id="hero-section"
        className="bg-gradient-to-b from-blue-50 via-purple-50/30 to-orange-100 pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-40 lg:pb-48 animate-[fadeIn_0.8s_ease-out] w-full relative"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/95 via-purple-50/90 to-orange-100/95"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="mb-6 sm:mb-10 text-center overflow-x-hidden">
              <div className="inline-block min-w-0">
                <SplitText
                  text="Unlocking Talent."
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-1 sm:mb-2 tracking-tight"
                  delay={50}
                  duration={0.6}
                  tag="h1"
                />
              </div>
              <div className="inline-block min-w-0">
                <SplitText
                  text="Illuminating Growth."
                  className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight"
                  delay={50}
                  duration={0.6}
                  tag="h1"
                />
              </div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-5xl mx-auto mb-10 sm:mb-14 leading-relaxed text-center animate-[fadeIn_1s_ease-out_0.8s_both] px-4">
              Jobfount combines recruitment expertise with data analytics —
              helping people find jobs, helping businesses hire smarter, and now
              helping professionals achieve international licensing success.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button
                className="bg-[#E63946] hover:bg-[#d62835] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1s_both] text-sm sm:text-base"
                onClick={handleFindJobsClick}
              >
                Find Jobs
              </button>
              <button
                className="bg-[#0a1436ff] hover:bg-[#164d50] text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.1s_both] text-sm sm:text-base"
                onClick={handleHireTalentClick}
              >
                Hire Talent
              </button>
              <button
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 sm:px-10 py-3 sm:py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 animate-[slideUp_0.8s_ease-out_1.2s_both] text-sm sm:text-base"
                onClick={handleLicensingSupportClick}
              >
                Licensing Support
              </button>
            </div>
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        * {
          box-sizing: border-box;
        }
        
        html, body {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }
        
        .split-char {
          display: inline-block;
          white-space: pre;
        }
        
        @media (max-width: 640px) {
          h1 {
            font-size: clamp(1.5rem, 8vw, 3rem) !important;
            line-height: 1.2;
          }
        }
        
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
    </div>
  );
}
