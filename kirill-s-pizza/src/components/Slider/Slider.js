import React, { useEffect, useState } from "react";
import dataSlider from "./DataSlider";
import styles from "./Slider.module.css";
import BtnSlider from "./BtnSlider";
function Slider(props) {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const play = setInterval(() => {
      if (slideIndex !== dataSlider.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === dataSlider.length) {
        setSlideIndex(1);
      }
    }, 3000);
    return () => clearInterval(play);
  }, [slideIndex]);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };
  return (
    <div
      className={
        props.clicked ? styles.containerSliderClicked : styles.containerSlider
      }
    >
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? styles.activeAnim : styles.slide
            }
          >
            <img src={process.env.PUBLIC_URL + `/Imgs/${index + 1}.jpg`} />
            <h3 className={styles.title}>{obj.title}</h3>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}

export default Slider;
