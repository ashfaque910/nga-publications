import React from "react";
import { useLocation } from "react-router-dom";
import "./DownloadPage.css";

const DownloadPage = () => {
  const location = useLocation();

  // Extract the file name from the URL path and the title from query parameters
  const query = new URLSearchParams(location.search);
  const fileTitle = query.get("title") || "Download";
  const filePath = location.pathname.split("/download/")[1];

  return (
    <div className="download-page">
      <div className="download-container">
        <h1 className="download-title">{fileTitle}</h1>
        <p className="download-description">
          Click the button below to download the {fileTitle}.
        </p>
        <a href={`/pdfs/${filePath}`} download={filePath} className="download-button">
          Download {fileTitle}
        </a>
      </div>
    </div>
  );
};

export default DownloadPage;
