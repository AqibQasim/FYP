import React from "react";
import styles from "./Hero.module.css";
import background from "../../assets/background3.png";
import HeroCentered from "./HeroCentered";

const Hero = () => {
  return (
    <div className={styles.container}>
      <img src={background} alt="background" className={styles.backgroundimg} />
      <div className={styles.centered}>
        <HeroCentered />
      </div>
    </div>
  );
};
export default Hero;
