import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoadingScreen.module.css";
import background from "../../assets/background3.png";

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
  const [currentStep, setCurrentStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Update step every 9 seconds (9000 ms)
    const stepInterval = setInterval(() => {
      // Start exit transition (fade out)
      setIsTransitioning(true);

      // Wait for 500ms for the exit animation before moving to the next step
      setTimeout(() => {
        setCurrentStep((prevStep) => prevStep + 1);
        // End the transition (start fade in for the new step)
        setIsTransitioning(false);
      }, 500); // Animation duration (500ms)
    }, 6000); // Total duration for each step (9 seconds)

    // Simulate the 90 seconds wait before navigating to the result screen
    const timer = setTimeout(() => {
      navigate("/filecontent", { replace: true });
    }, 60000); // 90 seconds

    // Clear timers if the component unmounts
    return () => {
      clearInterval(stepInterval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className={styles.background}>
      <div className={styles.loadingContainer}>
        <div className={`${styles.loadingBox}`}>
          <div
            className={`${styles.step} ${
              isTransitioning ? styles.fadeOut : styles.fadeIn
            }`}
          >
            <div className={styles.stepNumber}>{currentStep + 1}</div>
            <div className={styles.stepText}>{steps[currentStep]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
