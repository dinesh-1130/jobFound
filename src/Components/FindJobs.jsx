// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// import JobfountFooter from "./Footer";
// import { ArrowRight, ArrowLeft } from "lucide-react";

// const FindJobsPage = () => {
//   const navigate = useNavigate();
//   const heroRef = useRef(null);
//   const contentLeftRef = useRef(null);
//   const contentRightRef = useRef(null);

//   useEffect(() => {
//     const elements = [
//       heroRef.current,
//       contentLeftRef.current,
//       contentRightRef.current,
//     ];

//     elements.forEach((el, index) => {
//       if (el) {
//         setTimeout(() => {
//           el.style.opacity = "1";
//           el.style.transform = "translateY(0)";
//         }, index * 200);
//       }
//     });
//   }, []);

//   const handleApplyNowClick = (e) => {
//     e.preventDefault();

//     // Check if we're already on the home page
//     if (window.location.pathname === "/") {
//       const contactSection = document.getElementById("contact-section");
//       if (contactSection) {
//         contactSection.scrollIntoView({ behavior: "smooth" });
//       }
//     } else {
//       // Navigate to home page with state to scroll to contact
//       navigate("/", { state: { scrollToContact: true } });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <div className="flex-1 flex flex-col bg-white">
//         {/* Hero Section */}
//         <div
//           ref={heroRef}
//           className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 pt-32 pb-24 px-4 sm:px-6 transition-all duration-1000 ease-out mt-16 sm:mt-20"
//           style={{ opacity: 0, transform: "translateY(30px)" }}
//         >
//           <div className="max-w-7xl mx-auto text-center">
//             <h1
//               className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
//               style={{
//                 fontFamily: "futura-lt-w01-book, sans-serif",
//                 letterSpacing: "0.15em",
//               }}
//             >
//               FIND A JOB
//             </h1>
//             <p
//               className="text-xl sm:text-2xl text-white italic"
//               style={{ fontFamily: "Georgia, serif" }}
//             >
//               Put your passion to work
//             </p>
//           </div>
//         </div>

//         {/* Image Section */}
//         <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
//             alt="People working together"
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content Section */}
//         <div className="flex-1 py-16 sm:py-20 md:py-24 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-start">
//               {/* Left Column - Text Content */}
//               <div
//                 ref={contentLeftRef}
//                 className="space-y-6 transition-all duration-1000 ease-out"
//                 style={{ opacity: 0, transform: "translateY(30px)" }}
//               >
//                 <p className="text-base md:text-lg text-gray-900 leading-relaxed text-justify">
//                   The changing employer-employee contract, lack of job security,
//                   increasing pace of change in the workplace, advances in
//                   technology, globalization, and even quest for better work-life
//                   balance—these are enough reasons for anyone to quit their job.
//                   Add to this the overall economic recession. People are
//                   changing jobs much more frequently than ever, either because
//                   of the many new opportunities created or the fear of missing
//                   out on the opportunities available.
//                 </p>

//                 <p className="text-base md:text-lg text-gray-900 leading-relaxed text-justify">
//                   Whatever is your reason to quit your job, you'll have to go
//                   through the tedious job-search process. Although the process
//                   is crucially important for most professionals, it's also one
//                   of the most feared, misunderstood, and mishandled activities.
//                   We will help you get better job , by giving a wide variety of
//                   suggestions for how to be your best possible self throughout
//                   the process. Given the current economic situation around the
//                   world, you'll probably be getting your dream job.
//                 </p>
//               </div>

//               {/* Right Column - Call to Action */}
//               <div
//                 ref={contentRightRef}
//                 className="bg-white border-2 border-gray-200 p-8 sm:p-10 md:p-12 rounded-none shadow-lg flex flex-col justify-center items-start transition-all duration-1000 ease-out"
//                 style={{ opacity: 0, transform: "translateY(30px)" }}
//               >
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
//                   Want to work with the best?
//                 </h2>
//                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
//                   We can't wait to help
//                 </h3>
//                 <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-10 leading-tight">
//                   you get started.
//                 </h3>

//                 {/* Decorative Line */}
//                 <div className="w-full h-0.5 bg-black mb-10"></div>

//                 {/* Apply Button */}
//                 <button
//                   onClick={handleApplyNowClick}
//                   className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #164d61 0%, #E63946 100%)",
//                   }}
//                 >
//                   <span>APPLY NOW</span>
//                   <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <JobfountFooter />
//     </div>
//   );
// };

// export default FindJobsPage;
import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import JobfountFooter from "./Footer";

const FindJobPage = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const contentLeftRef = useRef(null);
  const contentRightRef = useRef(null);

  useEffect(() => {
    const elements = [
      heroRef.current,
      contentLeftRef.current,
      contentRightRef.current,
    ];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }, index * 200);
      }
    });
  }, []);

  const handleApplyNowClick = () => {
    // Check if we're already on the home page
    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page with state to scroll to contact
      navigate("/", { state: { scrollToContact: true } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col bg-white">
        {/* Back to Search Button - commented out */}
        {/* <button
          onClick={() => navigate('/')}
          className="fixed top-20 sm:top-24 left-4 z-40 flex items-center px-4 py-2 bg-white text-gray-800 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Search
        </button> */}

        {/* Hero Section with Background Image */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "url(https://static.wixstatic.com/media/11062b_6743da5900054f1f8e69f53302930a6af000.jpg/v1/fill/w_980,h_400,al_c,q_85,usm_0.33_1.00_0.00,enc_avif,quality_auto/11062b_6743da5900054f1f8e69f53302930a6af000.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay with brand color */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: "#164d61", opacity: 0.75 }}
            ></div>
          </div>

          {/* Content */}
          <div
            ref={heroRef}
            className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 ease-out"
            style={{ opacity: 0, transform: "translateY(30px)" }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6"
              style={{
                fontFamily: "futura-lt-w01-book, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              FIND A JOB
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white italic px-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Put your passion to work
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
              {/* Left Column - Text Content */}
              <div
                ref={contentLeftRef}
                className="space-y-5 sm:space-y-6 transition-all duration-1000 ease-out"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed text-justify">
                  The changing employer-employee contract, lack of job security,
                  increasing pace of change in the workplace, advances in
                  technology, globalization, and even quest for better work-life
                  balance—these are enough reasons for anyone to quit their job.
                  Add to this the overall economic recession. People are
                  changing jobs much more frequently than ever, either because
                  of the many new opportunities created or the fear of missing
                  out on the opportunities available.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed text-justify">
                  Whatever is your reason to quit your job, you'll have to go
                  through the tedious job-search process. Although the process
                  is crucially important for most professionals, it's also one
                  of the most feared, misunderstood, and mishandled activities.
                  We will help you get better job, by giving a wide variety of
                  suggestions for how to be your best possible self throughout
                  the process. Given the current economic situation around the
                  world, you'll probably be getting your dream job.
                </p>
              </div>

              {/* Right Column - Call to Action */}
              <div
                ref={contentRightRef}
                className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl flex flex-col justify-center items-center text-center min-h-[350px] sm:min-h-[400px] transition-all duration-1000 ease-out hover:shadow-2xl"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                  Want to work with the best?
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
                  We can't wait to help you get started.
                </p>

                {/* Decorative Line */}
                <div
                  className="w-full max-w-xs sm:max-w-md h-px mb-8 sm:mb-10 md:mb-12"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #164d61, transparent)",
                  }}
                ></div>

                {/* Apply Now Button */}
                <button
                  onClick={handleApplyNowClick}
                  className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #162461ff 0%, #E63946 100%)",
                  }}
                >
                  <span>APPLY NOW</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobfountFooter />
    </div>
  );
};

export default FindJobPage;
