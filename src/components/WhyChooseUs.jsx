import React from 'react';
import features from './Features'; // Importing the features array
import FeatureCard from './FeatureCard'; // Importing FeatureCard component

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-4 sm:py-4 md:py-4 lg:py-4">
      <div className="container mx-auto text-center px-4 sm:px-6 md:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2E6982] mb-8">
          Why Choose Us
        </h2>
        <p className="text-lg sm:text-base md:text-xl lg:text-xl font-semibold text-gray-700 mb-12 max-w-3xl mx-auto">
          Our expertise and commitment to excellence provide you with the tools and support needed to achieve academic success.
        </p>

        {/* Feature List with Dynamic Data */}
        <div className="grid grid-cols-1 px-16 sm:px-24 lg:pl-24 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 text-left">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} />
          ))}
        </div>

        <p className="text-lg sm:text-xl md:text-2xl pb-8 lg:text-3xl font-semibold text-gray-700 mt-12">
          We’re committed to continuous improvement and excellence.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseUs;
