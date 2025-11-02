import React, { useEffect, useRef } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import JobfountFooter from "./Footer";

const HireTalentPage = () => {
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

  const handleContactUsClick = () => {
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
        {/* Back to Search Button */}
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
              FIND TALENT
            </h1>
            <p
              className="text-lg sm:text-xl md:text-2xl text-white italic px-4"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your dream candidate is just around the corner.
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
                  From tiny startups to international conglomerates, one of the
                  age-old challenges in business is building a winning team.
                  With shifting demographics, varying skill levels, and
                  different motivations, it is increasingly difficult to
                  identify and cater to today's labor pool.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed text-justify">
                  The three-fold challenge of finding, attracting, and retaining
                  talented and productive employees has long vexed even the best
                  of companies. No organization is exempt from the struggle to
                  find quality employees, the difficulty of hiring the wrong
                  candidate, or the loss of a star employee moving on.
                </p>

                <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed text-justify">
                  But like anything in business, there are tactics and
                  strategies that increase your chances of success in acquiring
                  top talent. we will help you discover what works best for your
                  team.
                </p>
              </div>

              {/* Right Column - Call to Action */}
              <div
                ref={contentRightRef}
                className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl sm:rounded-2xl shadow-xl flex flex-col justify-center items-center text-center min-h-[350px] sm:min-h-[400px] transition-all duration-1000 ease-out hover:shadow-2xl"
                style={{ opacity: 0, transform: "translateY(30px)" }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 sm:mb-8 leading-tight px-2">
                  We can't wait to hear from you!
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-900 mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
                  Call us today and let us help you find what you're looking
                  for.
                </p>

                {/* Decorative Line */}
                <div
                  className="w-full max-w-xs sm:max-w-md h-px mb-8 sm:mb-10 md:mb-12"
                  style={{
                    background:
                      "linear-gradient(to right, transparent, #164d61, transparent)",
                  }}
                ></div>

                {/* Contact Button */}
                <button
                  onClick={handleContactUsClick}
                  className="group w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 text-white font-bold text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 sm:space-x-3"
                  style={{
                    background:
                      "linear-gradient(135deg, #162461ff 0%, #E63946 100%)",
                  }}
                >
                  <span>CONTACT US</span>
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

export default HireTalentPage;
