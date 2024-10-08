import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomeSection = () => {
  return (
    <section>
      {/* Banner Section */}
      <div className=" text-white py-8 sm:py-12 md:py-16 lg:py-20" style={{ background: 'linear-gradient(135deg, #c3e6ec, #2e6982, #a7d1d9)'}}>
        <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
          <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8">All India Test Series</h1>
          <p className="text-sm sm:text-base md:text-md lg:text-xl mb-6 sm:mb-4 md:mb-8 max-w-lg sm:max-w-xl md:max-w-6xl mx-auto">
            Join the N.G.A All India Test Series, the ultimate preparation platform for NEET and JEE aspirants. Our meticulously crafted test series simulates real exam conditions, providing comprehensive assessments and detailed performance analyses. With N.G.A, transform your hard work into guaranteed success and secure your place in prestigious medical and engineering institutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-yellow-300 hover:bg-red-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-lg transition duration-300">
              Click Here For NEET
            </button>
            <button className="bg-yellow-300 hover:bg-red-300 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-lg transition duration-300">
              Click Here For IIT-JEE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
