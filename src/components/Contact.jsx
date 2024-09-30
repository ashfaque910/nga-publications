import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-[#f9f9f9] py-6 sm:py-6 md:py-6 lg:py-6">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2E6982] mb-4">
            Contact Us
          </h1>
          <p className="text-lg sm:text-base md:text-lg lg:text-xl text-gray-600">
            We would love to hear from you! Please fill out the form below, or reach out to us at one of our offices.
          </p>
        </div>

        {/* Flex Container for Form and Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start bg-white shadow-2xl rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mr-8 bg-[#2E6982] shadow-xl rounded-lg p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-bold mb-2 text-white" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E6982] text-black"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 hover:bg-red-400 text-white font-bold py-3 rounded-lg shadow-lg transition duration-300 w-full"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-1/2 text-gray-600">
            <h2 className="text-2xl font-bold mb-4 text-[#2E6982]">Contact Information</h2>
            <p className="text-lg sm:text-base md:text-lg lg:text-xl mb-6">
              Feel free to reach us through the following offices and contact details:
            </p>

            <div className="space-y-6">
              {/* Head Office */}
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E6982]">Head Office</h3>
                <p className="text-gray-700">H No. 597, Govind Puri, New Delhi, Delhi 110019, India</p>
              </div>
              {/* Regional Office */}
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E6982]">Regional Office</h3>
                <p className="text-gray-700">25th Cross Kuvempu Nagar, Hassan 573201</p>
              </div>
              {/* Contact Details */}
              <div className="p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#2E6982]">Contact Us</h3>
                <p className="text-gray-700">Email: ngapublication@gmail.com</p>
                <p className="text-gray-700">Phone: +91 9108536678</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
