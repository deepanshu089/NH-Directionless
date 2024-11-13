import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";
import styles from "./Hero.module.scss";

function Hero() {
  const [windowDimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return (
    <div className={styles.hero}>
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
      />
      {[...Array(6)].map((_, index) => (
        <div key={index} className={styles.balloon} />
      ))}
      <h1 className={styles.heroTitle}>Welcome to Pooh's Paradise</h1>
    </div>
  );
}

export default Hero;
