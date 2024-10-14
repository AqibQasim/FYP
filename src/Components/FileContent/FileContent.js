import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FileContent.module.css";

const FileContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  if (!result) {
    navigate("/");
    return null;
  }

  const { TestResults, Summary, Recommendations } = result;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Medical Report Summary</h1>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Test Results</h2>
        <ul className={styles.resultsList}>
          {Object.entries(TestResults).map(([testName, testResult], index) => (
            <li key={index} className={styles.testResult}>
              <strong>{testName}:</strong> {testResult}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Summary</h2>
        <p className={styles.summaryText}>{Summary}</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subheading}>Recommendations</h2>
        <p className={styles.recommendationsText}>{Recommendations}</p>
      </div>
    </div>
  );
};

export default FileContent;
