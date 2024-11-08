import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import styles from "./Hero.module.scss";

function Hero() {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension((prev) => ({
      ...prev,
      width: window.innerWidth,
    }));
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimension]);

  return (
    <>
      <div className={styles.hero}>
        <ReactConfetti
          width={windowDimension.width}
          height={windowDimension.height}
        />
        <div className={styles.balloon} />
        <div className={styles.balloon} />
        <div className={styles.balloon} />
        <div className={styles.balloon} />
        <div className={styles.balloon} />
        <div className={styles.balloon} />
        
        <h1>Welcome to Pooh's Paradise</h1>
      </div>
    </>
  );
}

export default Hero;