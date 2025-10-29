// import React, { useState, useEffect, useRef } from "react";
// import { Target, Compass, Shield, Zap, Users, Heart } from "lucide-react";

// const FadeInSection = ({ children, delay = 0 }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const ref = useRef(null);

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

//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translateY(0)" : "translateY(30px)",
//         transition: `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const ValueItem = ({ icon: Icon, title, delay }) => {
//   return (
//     <FadeInSection delay={delay}>
//       <div className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-100 hover:border-[#1e3a8a] transition-all duration-300 hover:shadow-md">
//         <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#E63946] rounded-full flex items-center justify-center flex-shrink-0">
//           <Icon className="w-5 h-5 text-white" />
//         </div>
//         <span className="text-gray-800 font-semibold">{title}</span>
//       </div>
//     </FadeInSection>
//   );
// };

// export default function AboutUs() {
//   const values = [
//     { icon: Shield, title: "Integrity" },
//     { icon: Zap, title: "Empowerment" },
//     { icon: Compass, title: "Simplicity" },
//     { icon: Users, title: "Relationships" },
//     { icon: Heart, title: "Purposeful Innovation" },
//   ];

//   return (
//     <section className="py-20 bg-white" id="about-us">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <FadeInSection>
//           <div className="text-center mb-16">
//             <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1436] mb-4">
//               About <span className="text-[#E63946]">JobFount</span>
//             </h2>
//             <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#E63946] mx-auto rounded-full"></div>
//           </div>
//         </FadeInSection>

//         {/* Vision & Mission */}
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <FadeInSection delay={200}>
//             <div className="bg-[#0a1436] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#1e3a8a]">
//               <div className="flex items-center mb-4">
//                 <Target className="w-8 h-8 mr-3 text-[#E63946]" />
//                 <h3 className="text-2xl font-bold">Our Vision</h3>
//               </div>
//               <p className="text-gray-200 leading-relaxed">
//                 To redefine the future of employment by creating an ecosystem
//                 where every talent finds purpose and every organization finds
//                 its perfect match — built on trust, innovation, and human
//                 connection.
//               </p>
//             </div>
//           </FadeInSection>

//           <FadeInSection delay={400}>
//             <div className="bg-[#E63946] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#dc2f3e]">
//               <div className="flex items-center mb-4">
//                 <Compass className="w-8 h-8 mr-3" />
//                 <h3 className="text-2xl font-bold">Our Mission</h3>
//               </div>
//               <p className="text-gray-100 leading-relaxed">
//                 To empower people and businesses through a transparent hiring
//                 network that values skill over background, efficiency over
//                 complexity, and relationships over transactions.
//               </p>
//             </div>
//           </FadeInSection>
//         </div>

//         {/* Values */}
//         <FadeInSection delay={600}>
//           <div className="mb-16">
//             <h3 className="text-3xl font-bold text-center text-[#0a1436] mb-10">
//               Our <span className="text-[#E63946]">Values</span>
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//               {values.map((value, index) => (
//                 <ValueItem
//                   key={value.title}
//                   icon={value.icon}
//                   title={value.title}
//                   delay={700 + index * 100}
//                 />
//               ))}
//             </div>
//           </div>
//         </FadeInSection>

//         {/* Promise */}
//         <FadeInSection delay={1200}>
//           <div className="bg-white border-4 border-[#1e3a8a] rounded-2xl p-8 sm:p-12 shadow-lg">
//             <div className="max-w-4xl mx-auto text-center">
//               <h3 className="text-3xl font-bold text-[#0a1436] mb-6">
//                 Our <span className="text-[#E63946]">Promise</span>
//               </h3>
//               <p className="text-lg text-gray-700 leading-relaxed mb-6">
//                 At JobFount, we're here to build a better employment ecosystem —
//                 one that respects time, values skill, and celebrates growth.
//               </p>
//               <p className="text-lg text-gray-700 leading-relaxed">
//                 Whether you're a job seeker chasing your next opportunity or a
//                 company searching for the right fit, we're here to make the
//                 process{" "}
//                 <span className="font-bold text-[#1e3a8a]">effortless</span>,{" "}
//                 <span className="font-bold text-[#1e3a8a]">transparent</span>,
//                 and{" "}
//                 <span className="font-bold text-[#1e3a8a]">trustworthy</span>.
//               </p>
//             </div>
//           </div>
//         </FadeInSection>
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Compass, Shield, Zap, Users, Heart } from "lucide-react";

const ValueItem = ({ icon: Icon, title, delay }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="800"
      className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-100 hover:border-[#1e3a8a] transition-all duration-300 hover:shadow-md"
    >
      <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#E63946] rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <span className="text-gray-800 font-semibold">{title}</span>
    </div>
  );
};

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const values = [
    { icon: Shield, title: "Integrity" },
    { icon: Zap, title: "Empowerment" },
    { icon: Compass, title: "Simplicity" },
    { icon: Users, title: "Relationships" },
    { icon: Heart, title: "Purposeful Innovation" },
  ];

  return (
    <section className="py-20 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1436] mb-4">
            About <span className="text-[#E63946]">JobFount</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#E63946] mx-auto rounded-full"></div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div
            className="bg-[#0a1436] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#1e3a8a]"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className="flex items-center mb-4">
              <Target className="w-8 h-8 mr-3 text-[#E63946]" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">
              To redefine the future of employment by creating an ecosystem
              where every talent finds purpose and every organization finds its
              perfect match — built on trust, innovation, and human connection.
            </p>
          </div>

          <div
            className="bg-[#E63946] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#dc2f3e]"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className="flex items-center mb-4">
              <Compass className="w-8 h-8 mr-3" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-100 leading-relaxed">
              To empower people and businesses through a transparent hiring
              network that values skill over background, efficiency over
              complexity, and relationships over transactions.
            </p>
          </div>
        </div>

        {/* Values */}
        <div
          className="mb-16"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h3 className="text-3xl font-bold text-center text-[#0a1436] mb-10">
            Our <span className="text-[#E63946]">Values</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((value, index) => (
              <ValueItem
                key={value.title}
                icon={value.icon}
                title={value.title}
                delay={700 + index * 100}
              />
            ))}
          </div>
        </div>

        {/* Promise */}
        <div
          className="bg-white border-4 border-[#1e3a8a] rounded-2xl p-8 sm:p-12 shadow-lg"
          data-aos="zoom-in-up"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-[#0a1436] mb-6">
              Our <span className="text-[#E63946]">Promise</span>
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At JobFount, we're here to build a better employment ecosystem —
              one that respects time, values skill, and celebrates growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you're a job seeker chasing your next opportunity or a
              company searching for the right fit, we're here to make the
              process{" "}
              <span className="font-bold text-[#1e3a8a]">effortless</span>,{" "}
              <span className="font-bold text-[#1e3a8a]">transparent</span>, and{" "}
              <span className="font-bold text-[#1e3a8a]">trustworthy</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
