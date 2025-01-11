import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./FileContent.module.css";

const RenderContent = ({ data }) => {
  if (typeof data === "object" && data !== null) {
    return Array.isArray(data) ? (
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={index}>
            <RenderContent data={item} />
          </li>
        ))}
      </ul>
    ) : (
      <div className={styles.objectContainer}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className={styles.objectItem}>
            <strong>{key}:</strong> <RenderContent data={value} />
          </div>
        ))}
      </div>
    );
  } else {
    return <span>{data}</span>;
  }
};

const FileContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  // If no result is available, redirect to the home page
  if (!result) {
    navigate("/");
    return null;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Medical Report Summary</h1>

      {/* Render the dynamic content here */}
      <div className={styles.dynamicContent}>
        <RenderContent data={result} />
      </div>
    </div>
  );
};

export default FileContent;
