import React from 'react';
import { useLocation } from 'react-router-dom';
import ClickArrow from './ClickArrow'; // Import the ClickArrow component
import "./DownloadPage.css"; // Custom styles if needed

const DownloadPage = ({ nextRoute }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const fileTitle = query.get("title") || "Download";
  const filePath = location.pathname.split("/download/")[1];

  return (
    <div className="download-page flex justify-center items-center"> {/* Removed top and bottom padding on large devices */}
      <div className="download-container border border-[#2E6982] rounded-lg p-6 max-w-lg w-full shadow-lg" style={{borderRadius: 'var(--border-radius)'}}>
        <h1 className="download-title text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 text-center">
          {fileTitle}
        </h1>
        <p className="download-description text-sm sm:text-base lg:text-lg mb-6 text-center">
          Click the button below to download the {fileTitle}.
        </p>
        <div className="download-actions flex justify-center">
          <a 
            href={`/pdfs/${filePath}`} 
            download={filePath} 
            className="download-button bg-[#2E6982] hover:bg-[#225160] text-white font-bold py-2 px-6 sm:px-8 rounded-full transition duration-300 ease-in-out"
          >
            Download {fileTitle}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;
