import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./LoadingScreen.module.css";

const steps = [
  "Loading your report",
  "Parsing your report",
  "Evaluating",
  "Preparing summary result",
  "Finalizing",
  "Checking for inconsistencies",
  "Optimizing the report",
  "Reviewing the data",
  "Summarizing the findings",
  "Report is almost ready",
];

const LoadingScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const file = location.state?.file;

  useEffect(() => {
    if (!file) {
      navigate("/");
      return;
    }

    // Start animating steps every 9 seconds
    const stepInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prevStep) =>
          prevStep < steps.length - 1 ? prevStep + 1 : prevStep
        );
        setIsTransitioning(false);
      }, 500);
    }, 6000);

    // Function to handle file upload to the API
    const uploadFile = async () => {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8002/upload-pdf", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();

        navigate("/filecontent", { state: { result } });
      } catch (error) {
        navigate("/");
        console.error("Error uploading PDF:", error);
      } finally {
        clearInterval(stepInterval);
      }
    };

    uploadFile();

    return () => clearInterval(stepInterval);
  }, [file, navigate]);

  return (
    <div className={styles.background}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingBox}>
          <div className={styles.stepper}>
            <div
              className={`${styles.step} ${
                isTransitioning ? styles.fadeInSlideUp : ""
              }`}
            >
              <div className={styles.stepNumber}>{currentStep + 1}</div>
              <div className={styles.stepText}>
                {steps[currentStep]}
                <span className={styles.loadingDots}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
