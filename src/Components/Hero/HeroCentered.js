import React, { useState, useRef } from "react";
import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const HeroCentered = () => {
  const [file, setFile] = useState(null);
  const fileInput = useRef(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) {
      return;
    }

    setFile(selectedFile);

    // Navigate to the loading screen and pass the file as state
    navigate("/loading", { state: { file: selectedFile } });
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
