// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { Target, Compass, Shield, Zap, Users, Heart } from "lucide-react";

// const ValueItem = ({ icon: Icon, title, delay }) => {
//   return (
//     <div
//       data-aos="fade-up"
//       data-aos-delay={delay}
//       data-aos-duration="800"
//       className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-gray-100 hover:border-[#1e3a8a] transition-all duration-300 hover:shadow-md"
//     >
//       <div className="w-10 h-10 bg-gradient-to-br from-[#1e3a8a] to-[#E63946] rounded-full flex items-center justify-center flex-shrink-0">
//         <Icon className="w-5 h-5 text-white" />
//       </div>
//       <span className="text-gray-800 font-semibold">{title}</span>
//     </div>
//   );
// };

// export default function AboutUs() {
//   useEffect(() => {
//     AOS.init({ once: true });
//   }, []);

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
//         <div
//           className="text-center mb-16"
//           data-aos="fade-down"
//           data-aos-duration="1000"
//         >
//           <h2 className="text-4xl sm:text-5xl font-bold text-[#0a1436] mb-4">
//             About <span className="text-[#E63946]">JobFount</span>
//           </h2>
//           <div className="w-24 h-1 bg-gradient-to-r from-[#1e3a8a] to-[#E63946] mx-auto rounded-full"></div>
//         </div>

//         {/* Vision & Mission */}
//         <div className="grid md:grid-cols-2 gap-8 mb-16">
//           <div
//             className="bg-[#0a1436] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#1e3a8a]"
//             data-aos="fade-right"
//             data-aos-delay="200"
//             data-aos-duration="1000"
//           >
//             <div className="flex items-center mb-4">
//               <Target className="w-8 h-8 mr-3 text-[#E63946]" />
//               <h3 className="text-2xl font-bold">Our Vision</h3>
//             </div>
//             <p className="text-gray-200 leading-relaxed">
//               To redefine the future of employment by creating an ecosystem
//               where every talent finds purpose and every organization finds its
//               perfect match — built on trust, innovation, and human connection.
//             </p>
//           </div>

//           <div
//             className="bg-[#E63946] p-8 rounded-2xl shadow-lg text-white h-full border-4 border-[#dc2f3e]"
//             data-aos="fade-left"
//             data-aos-delay="400"
//             data-aos-duration="1000"
//           >
//             <div className="flex items-center mb-4">
//               <Compass className="w-8 h-8 mr-3" />
//               <h3 className="text-2xl font-bold">Our Mission</h3>
//             </div>
//             <p className="text-gray-100 leading-relaxed">
//               To empower people and businesses through a transparent hiring
//               network that values skill over background, efficiency over
//               complexity, and relationships over transactions.
//             </p>
//           </div>
//         </div>

//         {/* Values */}
//         <div
//           className="mb-16"
//           data-aos="fade-up"
//           data-aos-delay="600"
//           data-aos-duration="1000"
//         >
//           <h3 className="text-3xl font-bold text-center text-[#0a1436] mb-10">
//             Our <span className="text-[#E63946]">Values</span>
//           </h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
//             {values.map((value, index) => (
//               <ValueItem
//                 key={value.title}
//                 icon={value.icon}
//                 title={value.title}
//                 delay={700 + index * 100}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Promise */}
//       </div>
//     </section>
//   );
// }
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Target, Compass, Shield, Zap, Users, Heart } from "lucide-react";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices.",
    },
    {
      icon: Zap,
      title: "Empowerment",
      description: "Control of career and hiring journeys.",
    },
    {
      icon: Compass,
      title: "Simplicity",
      description: "Clear, intuitive, and efficient experiences.",
    },
    {
      icon: Users,
      title: "Relationships",
      description: "Meaningful connections over transactions.",
    },
    {
      icon: Heart,
      title: "Innovation",
      description: "Human needs at the center of solutions.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-5xl font-bold text-[#0a1436] mb-4">
            About <span className="text-[#E63946]">JobFount</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building the future of recruitment through innovation and human
            connection.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 mb-24">
          <div
            className="p-10 rounded-lg border border-gray-200 bg-gradient-to-br from-[#0a1436] to-[#1a2d5c] text-white cursor-pointer hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3 mb-5">
              <Target className="w-6 h-6 text-[#E63946]" />
              <h3 className="text-2xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-base">
              To redefine the future of employment by creating an ecosystem
              where every talent finds purpose and every organization finds its
              perfect match — built on trust, innovation, and human connection.
            </p>
          </div>

          <div
            className="p-10 rounded-lg border border-gray-200 bg-gradient-to-br from-[#E63946] to-[#c81e35] text-white cursor-pointer hover:shadow-lg transition-shadow duration-300"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <div className="flex items-center gap-3 mb-5">
              <Compass className="w-6 h-6" />
              <h3 className="text-2xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-100 leading-relaxed text-base">
              To empower people and businesses through a transparent hiring
              network that values skill over background, efficiency over
              complexity, and relationships over transactions.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-20"></div>

        {/* Values - Showcase Grid */}
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-3xl font-bold text-[#0a1436] mb-16 text-center">
            Our <span className="text-[#E63946]">Values</span>
          </h3>

          {/* Large cards with detailed layout */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
          >
            {values.map((value, index) => (
              <div
                key={value.title}
                data-aos="fade-up"
                data-aos-delay={150 + index * 100}
                data-aos-duration="700"
                className="group relative cursor-pointer"
              >
                <div className="h-full flex flex-col">
                  {/* Card Background */}
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-200 group-hover:border-[#E63946] group-hover:shadow-xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col p-8 rounded-2xl border border-gray-100 group-hover:border-transparent transition-all duration-500">
                    {/* Number - Top Right */}
                    <div className="absolute top-4 right-6 text-5xl font-black text-gray-100 group-hover:text-[#E63946] transition-colors duration-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Icon - Large */}
                    <div className="mb-6 mt-2">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1e3a8a] to-[#E63946] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl font-bold text-[#0a1436] mb-3 group-hover:text-[#E63946] transition-colors duration-500">
                      {value.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-500">
                      {value.description}
                    </p>

                    {/* Bottom Accent */}
                    <div className="mt-6 h-1 w-0 bg-gradient-to-r from-[#1e3a8a] to-[#E63946] group-hover:w-full transition-all duration-700 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
