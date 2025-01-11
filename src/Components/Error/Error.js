import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Error.module.css"; // Import CSS module
import errorImage from "../../assets/Error.jpg";

const Error = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    navigate("/");
  };

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <img
          src={errorImage} // Replace with your actual image path
          
          alt="Error Illustration"
          className={styles.errorImage}
        />
        <h1 className={styles.errorTitle}>Oops! Something Went Wrong</h1>
        <p className={styles.errorMessage}>
          We couldn't process your medical report. This could be due to an
          unsupported file format or corrupted data.
        </p>
        <p className={styles.errorInstructions}>
          Please ensure the file is a valid PDF containing the medical report
          and try uploading it again. If the issue persists, contact our support
          team for assistance.
        </p>
        <button className={styles.retryButton} onClick={handleRetry}>
          Retry Upload
        </button>
      </div>
    </div>
  );
};

export default Error;
