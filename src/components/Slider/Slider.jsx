import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";

// fotos para slider
import foto1 from "/imgs/foto1.jpg";
import foto2 from "/imgs/foto2.jpeg";
import foto3 from "/imgs/foto3.jpeg";
import foto4 from "/imgs/foto4.jpeg";
import foto5 from "/imgs/foto5.jpeg";
import foto6 from "/imgs/foto6.jpeg";
import foto7 from "/imgs/foto7.jpeg";

// imagenes botones
import backButton from "/imgs/backButton.png";
import forwardButton from "/imgs/forwardButton.png";

const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function goToPrevious() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  function goToNext() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className={styles.slider} role="region" aria-label="Image Slider">
      <button
        onClick={goToPrevious}
        className={styles.backButton}
        aria-label="Previous Slide"
      >
        <img src={backButton} alt="Previous Slide" />
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
        aria-live="polite"
      />
      <button
        onClick={goToNext}
        className={styles.forwardButton}
        aria-label="Next Slide"
      >
        <img src={forwardButton} alt="Next Slide" />
      </button>
    </div>
  );
}
