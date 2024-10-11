import React, { useState, useRef } from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const HeroCentered = () => {
  const [fileName, setFileName] = useState(""); // State to store the file name
  const fileInput = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    setFileName(file.name); // Set the file name when file is selected

    // Navigate to the loading screen after selecting a file
    navigate("/loading");
  };

  return (
    <div>
      <h1 className={styles.heroheading}>Medical Report Analyzer</h1>
      <p className={styles.heropera}>
        Upload your medical report PDF and let our AI process and analyze it.
      </p>

      <div className={styles.uploadContainer}>
        <div className={styles.uploadBox}>
          <p className={styles.uploadpera}>Drop your file here, or browse</p>
          <p className={styles.uploadpera2}>
            Supports PDF and images. Free service for documents up to 200 pages
            or 50 Mb and 3 tasks per hour.
          </p>
          <input
            type="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
            ref={fileInput}
          />
          <button
            className={styles.uploadButton}
            onClick={() => fileInput.current.click()}
          >
            Upload File
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCentered;
