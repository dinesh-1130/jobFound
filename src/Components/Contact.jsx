import React, { useState, useEffect } from "react";
import { Mail, Phone, Globe, Loader2 } from "lucide-react"; // Imported Loader2 for the spinner
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    userType: "job-seeker", // Added default value for select
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/; // Basic check for digits only

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"; // Email validation
    }
    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (digits only)"; // Phone validation
    }
    if (!formData.message) newErrors.message = "Message is required";
    // userType has a default value, so not checking for required, but uncomment if needed:
    // if (!formData.userType) newErrors.userType = "User type is required";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setLoading(true); // Start loading

    try {
      // NOTE: For 'no-cors' mode, the actual data sent might be limited (Simple Request),
      // and you won't be able to read the response status, but the request will be sent.
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzatl10HsWk4HkTUSIk_n_76eyeHFcFOIfZafarGLYhV02NtJ2JIDEO-ZucOIdHPwAt/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      // Since mode is 'no-cors', we can't reliably check `response.ok` or read the body.
      // We assume success if the fetch operation completes without an *internal* error.

      setSuccessMessage("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        userType: "job-seeker", // Reset to default
      });

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("An error occurred during submission.");
      setTimeout(() => setSuccessMessage(""), 3000);
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on change
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8F4F5] via-[#D4E9EA] to-[#C0DEDE] relative overflow-hidden">
      {/* Decorative Phone Elements */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-48 sm:h-72 md:h-96 opacity-70">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <ellipse
            cx="150"
            cy="60"
            rx="50"
            ry="50"
            fill="#164d61"
            opacity="0.8"
          />
          <circle cx="150" cy="60" r="25" fill="#164d61" opacity="0.6" />
          <circle cx="150" cy="60" r="15" fill="#E63946" opacity="0.4" />
          <circle cx="150" cy="60" r="8" fill="#E63946" opacity="0.3" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 h-48 sm:h-72 md:h-96 opacity-70">
        <svg viewBox="0 0 200 400" className="w-full h-full">
          <ellipse
            cx="150"
            cy="340"
            rx="50"
            ry="50"
            fill="#164d61"
            opacity="0.8"
          />
          <circle cx="150" cy="340" r="25" fill="#164d61" opacity="0.6" />
          <circle cx="150" cy="340" r="15" fill="#E63946" opacity="0.4" />
          <circle cx="150" cy="340" r="8" fill="#E63946" opacity="0.3" />
        </svg>
      </div>

      {/* Phone Cord */}
      <div className="hidden md:block absolute right-32 top-32 bottom-32">
        <svg width="100" height="100%" className="w-full h-full">
          <path
            d="M 50 0 Q 30 50, 50 100 T 50 200 T 50 300 T 50 400 T 50 500"
            stroke="#164d61"
            strokeWidth="8"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center" data-aos="fade-down">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#164d61] mb-2 sm:mb-3 tracking-wide">
            CONTACT US
          </h1>
          <p className="text-gray-700 text-base sm:text-lg italic">
            Over the phone or online
          </p>
        </div>

        {/* Contact Info Left */}
        <div
          className="flex flex-col space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          data-aos="fade-right"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-[#164d61]">
            <div className="bg-[#164d61] p-1.5 sm:p-2 rounded-lg">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-medium">
              info@jobfount.con
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[#164d61]">
            <div className="bg-[#E63946] p-1.5 sm:p-2 rounded-lg">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-medium">
              +91 7010745548
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-[#164d61]">
            <div className="bg-[#164d61] p-1.5 sm:p-2 rounded-lg">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-xs sm:text-sm font-medium">
              www.jobfount.com
            </span>
          </div>
        </div>

        {/* Address - Centered Box */}
        <div className="flex justify-center mb-8 sm:mb-12" data-aos="fade-up">
          <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-lg border-l-4 border-[#164d61] text-center w-full sm:w-2/3 md:w-1/2">
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
              {/* UPDATED ADDRESS */}
              No.583, School Road,
              <br />
              Anna Nagar West Extension, Chennai - 600101
            </p>
          </div>
        </div>

        {/* Main Content Grid - Map Left, Form Right */}
        <div
          id="contact-section"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-stretch"
        >
          {/* Left Section - Map */}
          <div className="flex flex-col h-full" data-aos="fade-right">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-[#164d61] flex-grow h-96 lg:h-auto lg:min-h-[500px]">
              <div className="bg-[#164d61] text-white text-center py-2 font-semibold text-sm">
                Map View
              </div>
              <div className="h-full bg-gray-200 relative">
                <iframe
                  // Note: To display a correct map, the src URL here should be updated
                  // to point to the new address.
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.8837363698786!2d80.19456!3d13.09297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52637a4c4c4c4d%3A0x7e3f3c3c3c3c3c3c!2sNo%20524%20CTH%20Road%20Pattabiram%20Chennai!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="flex flex-col h-full" data-aos="fade-left">
            <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border-t-4 border-[#E63946] w-full h-full">
              <p className="text-[#164d61] mb-4 sm:mb-6 text-xs sm:text-sm font-semibold">
                Get in touch with us today.
                <br />
                We'd love to hear from you!
              </p>
              <div className="space-y-3 sm:space-y-4">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    name="name" // Added name attribute
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#164d61] focus:ring-2 focus:ring-[#164d61] focus:ring-opacity-20`}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email Input - Validation Added */}
                <div>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    name="email" // Added name attribute
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#164d61] focus:ring-2 focus:ring-[#164d61] focus:ring-opacity-20`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* User Type Select */}
                <div>
                  <select
                    name="userType" // Added name attribute
                    value={formData.userType}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${
                      errors.userType ? "border-red-500" : "border-gray-200"
                    } rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#164d61] focus:ring-2 focus:ring-[#164d61] focus:ring-opacity-20`}
                  >
                    <option value="job-seeker">Job Seeker</option>
                    <option value="employer">Employer</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.userType && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.userType}
                    </p>
                  )}
                </div>

                {/* Phone Input - Validation Added */}
                <div>
                  <input
                    type="tel" // Use type="tel" for phone
                    placeholder="Enter your Phone"
                    name="phone" // Added name attribute
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#164d61] focus:ring-2 focus:ring-[#164d61] focus:ring-opacity-20`}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Enter your Message"
                    name="message" // Added name attribute
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-white border-2 ${
                      errors.message ? "border-red-500" : "border-gray-200"
                    } rounded-lg text-gray-800 placeholder-gray-500 text-xs sm:text-sm focus:outline-none focus:border-[#164d61] focus:ring-2 focus:ring-[#164d61] focus:ring-opacity-20 resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Success Message */}
                {successMessage && (
                  <p className="text-green-600 text-sm mt-2">
                    {successMessage}
                  </p>
                )}

                {/* Submit Button with Loader */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={loading} // Disable button when loading
                    className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-[#E63946] to-[#d62835] hover:from-[#d62835] hover:to-[#c61729] text-white rounded-lg text-xs sm:text-sm font-semibold transition-all transform shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
