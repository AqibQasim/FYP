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
      // If no file, navigate back to home
      navigate("/");
      return;
    }

    // Start animating steps every 9 seconds
    const stepInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        setIsTransitioning(false);
      }, 500);
    }, 9000);

    // Function to handle file upload to the API
    const uploadFile = async () => {
      const formData = new FormData();
      formData.append("file", file); // Append the file to FormData

      try {
        const response = await fetch("/upload-pdf", {
          method: "POST",
          body: formData,
        });

        const result = await response.text(); // Expecting text response

        // Navigate to filecontent screen with the API result
        navigate("/filecontent", { state: { result } });
      } catch (error) {
        console.error("Error uploading PDF:", error);
      }
    };

    uploadFile();

    return () => clearInterval(stepInterval);
  }, [file, navigate]);

  // Show 3 steps at a time
  const stepWindow = steps.slice(currentStep, currentStep + 3);

  return (
    <div className={styles.background}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingBox}>
          <div className={styles.stepper}>
            {stepWindow.map((step, index) => (
              <div
                key={index}
                className={`${styles.step} ${
                  index === 0 ? styles.activeStep : ""
                } ${isTransitioning ? styles.slideIn : ""}`}
              >
                <div className={styles.stepNumber}>
                  {currentStep + index + 1}
                </div>
                <div className={styles.stepText}>
                  {step}
                  <span className={styles.loadingDots}></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
