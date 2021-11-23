import React from "react";
import styles from "./Slider.module.css"
import leftArrow from "./../../images/left.png";
import rightArrow from "./../../images/right.png";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ?  styles.btnSlideNext :  styles.btnSlidePrev}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}