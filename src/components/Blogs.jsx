import React, { useState } from 'react';

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState('NEET 2025');

  const handleBlogChange = (e) => {
    setSelectedBlog(e.target.value);
  };

  return (
    <>
    <div className="text-center text-3xl sm:text-base md:text-xl lg:text-2xl xl:text-4xl pt-8 text-yellow-400">
      <h1>BLOGS FOR JEE, NEET & KCET PREPARATION</h1>
    </div>
    <div className="max-w-7xl mx-auto py-8  space-y-12">
      {/* Dropdown Menu */}
      <div className="flex justify-center mb-8">
        <select
          className="
            w-full sm:w-40 md:w-48 lg:w-64 
            px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3
            text-sm sm:text-sm md:text-base
            bg-[#2E6982] text-white rounded-full
            hover:bg-[#225160] transition ease-in-out duration-300
          "
          value={selectedBlog}
          onChange={handleBlogChange}
        >
          <option className="text-xs sm:text-sm md:text-base w-50" value="JEE Main 2025">JEE Main 2025</option>
          <option className="text-xs sm:text-sm md:text-base w-50" value="NEET 2025">NEET 2025</option>
          <option className="text-xs sm:text-sm md:text-base w-50" value="KCET 2025">KCET 2025</option>
        </select>
      </div>
  
      {/* Render selected blog content */}
      {selectedBlog === 'JEE Main 2025' ? (
        <JeeMain2025 />
      ) : selectedBlog === 'NEET 2025' ? (
        <Neet2025 />
      ) : (
        <Kcet2025 />
      )}
    </div>
    </>
  );
  
};

const JeeMain2025 = () => (
  <div className="space-y-12 animate-fade-in">
    {/* JEE Main 2025 content */}
    <section className="text-center space-y-4">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">JEE Main 2025: Exam Dates, Syllabus & More</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">Get all the latest updates on JEE Main 2025...</p>
      <div className="flex justify-center space-x-6 mt-6">
        <button className="px-6 py-3 bg-[#2E6982] text-white rounded-full hover:bg-[#225160] transition-transform duration-300 transform hover:scale-105">Start Preparing</button>
      </div>
    </section>

    {/* JEE Main 2025 Overview */}
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2E6982]">Overview</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        JEE Main 2025 is one of the most important entrance exams for students aspiring to pursue engineering at
        premier institutions like the IITs, NITs, and other top engineering colleges across India. The exam is conducted
        by NTA (National Testing Agency), and the first session is expected in January 2025.
      </p>
    </section>

    {/* JEE Main 2025 Important Dates */}
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2E6982]">Important Dates (Tentative)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2">Event</th>
            <th className="border-b-2 py-2">Date 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b py-2">Release of Application</td>
            <td className="border-b py-2">1st week of November 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">End of the application process</td>
            <td className="border-b py-2">Last week of November 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">Correction window opens</td>
            <td className="border-b py-2">2nd week of December 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">JEE Main Session 1 Exam</td>
            <td className="border-b py-2">3rd week of January 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">JEE Main Session 2 Exam</td>
            <td className="border-b py-2">2nd week of April 2025</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* JEE Main 2025 Eligibility */}
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2E6982]">Eligibility Criteria</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        <li><strong>Nationality:</strong> Indian Nationals, NRIs, PIO, OCI, and Foreign Nationals are eligible.</li>
        <li><strong>Age Limit:</strong> No age limit for candidates applying for JEE Main 2025.</li>
        <li><strong>Qualification:</strong> Candidates must have passed their 12th standard in 2023, 2024, or will appear in 2025.</li>
      </ul>
    </section>

    {/* JEE Main 2025 Application Process */}
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2E6982]">Application Form</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The JEE Main 2025 application process will be online, starting from November 2024. Follow these steps to apply:
        Register → Fill in personal, academic details → Upload documents → Pay fees → Submit application form.
        The correction window will be available in December 2024.
      </p>
    </section>

    {/* JEE Main 2025 Syllabus */}
    <section className="space-y-4">
      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-2xl font-bold text-[#2E6982]">Syllabus</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        JEE Main syllabus includes three major subjects: Physics, Chemistry, and Mathematics. The syllabus is based on
        11th and 12th class topics as per CBSE standards. The exam is divided into two papers: Paper 1 for engineering
        courses and Paper 2 for architecture and planning courses.
      </p>
    </section>
  </div>
);

const Neet2025 = () => (
  <div className="space-y-12 animate-fade-in">
    {/* NEET 2025 content */}
    <section className="text-center space-y-4">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">NEET 2025: Syllabus, Exam Date, Eligibility & More</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">A complete guide for NEET 2025 aspirants...</p>
      <div className="flex justify-center space-x-6 mt-6">
        <button className="px-6 py-3 bg-[#2E6982] text-white rounded-full hover:bg-[#225160] transition-transform duration-300 transform hover:scale-105">Start Preparing</button>
      </div>
    </section>

    {/* NEET 2025 Overview */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Overview</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        National Testing Agency (NTA) will conduct the NEET 2025 Exam for MBBS and BDS admissions along with Ayush
        Courses. The exam will be conducted offline in the first week of May 2025. The application process will begin in
        December 2024. Stay updated with syllabus changes and focus on the complete syllabus for better performance.
      </p>
    </section>

    {/* NEET 2025 Important Dates */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Important Dates (Tentative)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2">Event</th>
            <th className="border-b-2 py-2">Date 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b py-2">Release of Application</td>
            <td className="border-b py-2">1st week of December 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">End of the application process</td>
            <td className="border-b py-2">Last week of December 2024</td>
          </tr>
          <tr>
            <td className="border-b py-2">Correction window opens</td>
            <td className="border-b py-2">3rd to last week of January 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Availability of Admit card</td>
            <td className="border-b py-2">4th week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">NEET 2025 Exam</td>
            <td className="border-b py-2">1st week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Availability of Answer key</td>
            <td className="border-b py-2">2nd week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Declaration of Result</td>
            <td className="border-b py-2">1st week of June 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Starting of Counselling</td>
            <td className="border-b py-2">2nd week of June 2025</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* NEET 2025 Eligibility */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Eligibility Criteria</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        <li><strong>Nationality:</strong> Indian Nationals, NRIs, PIO, OCI, and Foreign Nationals are eligible.</li>
        <li><strong>Age Limit:</strong> Must be 17 years old by 31st December 2025. No upper age limit.</li>
        <li><strong>Qualification:</strong> Passed 12th with Physics, Chemistry, Biology/Biotechnology, and English (50% marks for UR, 40% for SC/ST/OBC, 45% for PwD).</li>
        <li><strong>Attempts:</strong> No limit on attempts.</li>
      </ul>
    </section>

    {/* NEET 2025 Application Form */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Application Form</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The NEET 2025 application process will be online only. Follow these steps: Register → Fill Details → Upload Photo & Signature → Pay Fee → Print Receipt.
        Corrections can be made online from the 3rd to last week of January 2025.
      </p>
    </section>

    {/* NEET 2025 Syllabus */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Syllabus</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The NEET syllabus covers Physics, Chemistry, Botany, and Zoology across 97 chapters. Students should focus on the entire syllabus to score high.
      </p>
    </section>
  </div>);

const Kcet2025 = () => (
  <div className="space-y-12 animate-fade-in">
    {/* KCET 2025 content */}
    <section className="text-center space-y-4">
      <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4 sm:mb-6 md:mb-8 text-[#2E6982]">KCET 2025: Date, Notification, Application Form & More</h1>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">All details about KCET 2025 are available here...</p>
      <div className="flex justify-center space-x-6 mt-6">
        <button className="px-6 py-3 bg-[#2E6982] text-white rounded-full hover:bg-[#225160] transition-transform duration-300 transform hover:scale-105">Start Preparing</button>
      </div>
    </section>

    {/* KCET 2025 Overview */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Overview</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        Karnataka Examinations Authority (KEA) will conduct KCET 2025 for admissions to undergraduate courses in 
        Engineering, Architecture, and Pharmacy. The exam will take place in the first week of May 2025. Stay updated 
        with the official notification and application process.
      </p>
    </section>

    {/* KCET 2025 Important Dates */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Important Dates (Tentative)</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 py-2">Event</th>
            <th className="border-b-2 py-2">Date 2025</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-b py-2">Release of Application</td>
            <td className="border-b py-2">1st week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">End of Application Process</td>
            <td className="border-b py-2">Last week of March 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Admit Card Release</td>
            <td className="border-b py-2">3rd week of April 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">KCET 2025 Exam</td>
            <td className="border-b py-2">1st week of May 2025</td>
          </tr>
          <tr>
            <td className="border-b py-2">Result Declaration</td>
            <td className="border-b py-2">Last week of May 2025</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* KCET 2025 Eligibility */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Eligibility Criteria</h2>
      <ul className="list-disc list-inside text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        <li><strong>Nationality:</strong> Indian Nationals are eligible.</li>
        <li><strong>Educational Qualification:</strong> Passed 12th with Mathematics, Physics, Chemistry as compulsory subjects for Engineering; Biology for Medical courses.</li>
        <li><strong>Minimum Marks:</strong> 45% for General, 40% for reserved categories in 12th class exams.</li>
      </ul>
    </section>

    {/* KCET 2025 Application Process */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Application Process</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        Candidates need to register online by visiting the official KEA website. After registration, fill in personal 
        details, upload documents, and pay the fee to complete the application process. Corrections can be made online 
        during the specified window in April 2025.
      </p>
    </section>

    {/* KCET 2025 Syllabus */}
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold sm:text-xl md:text-2xl lg:text-2xl text-[#2E6982]">Syllabus</h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-md lg:text-xl">
        The syllabus for KCET 2025 includes topics from Physics, Chemistry, and Mathematics or Biology based on the 
        candidate's choice of course. Aspirants are advised to thoroughly study the 12th standard syllabus as 
        prescribed by the Karnataka Board.
      </p>
    </section>
  </div>
  
);
export default Blogs;
