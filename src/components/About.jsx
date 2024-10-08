import React from "react";

const AboutUs = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className="bg-[#2E6982] text-white py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8">
            Welcome to <span className="text-yellow-400">NGA</span>!
          </h1>
          {/* Description */}
          <p className="text-sm sm:text-base md:text-md lg:text-xl mb-6 sm:mb-4 md:mb-8 max-w-lg sm:max-w-xl md:max-w-6xl mx-auto leading-relaxed">
            At NGA, we are dedicated to empowering aspiring students on their educational journeys. Specializing in high-quality printed test series and study materials for JEE, KCET, NEET, and foundation classes (6 to 10), we cater specifically to coaching institutes and colleges for grades 11 and 12.
          </p>
        </div>
      </div>

      {/* Content Section with White Background */}
      <div className="bg-white py-4 sm:py-4 md:py-4 lg:py-4">
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          {/* Our Mission */}
          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-md lg:text-xl mb-6 sm:mb-4 md:mb-8 max-w-lg sm:max-w-xl md:max-w-6xl mx-auto leading-relaxed">
            To enhance learning experiences and provide comprehensive resources that foster academic excellence. With a team of experienced educators and industry professionals, we curate content that aligns with the latest syllabi and challenges students to think critically and excel.
          </p>

        {/* What Sets Us Apart */}
<div className="my-12">
  <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-center text-[#2E6982]">
    What Sets Us Apart
  </h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
    {/* Card 1 */}
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#2E6982] mb-4">Quality Materials</h3>
      <p className="text-gray-700">
        Our test series and study guides are meticulously crafted to ensure clarity and depth, helping students master complex concepts.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500">
      <h3 className="text-xl font-bold text-[#2E6982] mb-4">Tailored Solutions</h3>
      <p className="text-gray-700">
        We understand the diverse needs of coaching institutes and colleges, offering customizable packages to fit your requirements.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-[#2E6982] mb-4">Commitment to Success</h3>
      <p className="text-gray-700">
        We are passionate about supporting educators and students alike, providing tools that inspire confidence and drive results.
      </p>
    </div>
  </div>
</div>


          {/* Call to Action */}
          <div className="p-4">
            <p className="text-[#2E6982] text-sm sm:text-base md:text-md lg:text-xl mb-6 sm:mb-4 md:mb-8 max-w-lg sm:max-w-xl md:max-w-6xl mx-auto leading-relaxed">
              Join us in shaping the future of education. Together, we can cultivate a generation of achievers ready to conquer their goals.
            </p>
            <button className="bg-yellow-400 hover:bg-red-500 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-lg transition duration-300">
              Join Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
