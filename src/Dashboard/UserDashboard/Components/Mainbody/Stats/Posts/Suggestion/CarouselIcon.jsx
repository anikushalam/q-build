import React from "react";
import style from "./Suggestion.module.css";

const CarouselIcon = ({ onScrollNext, viewAs }) => {
  return (
    <div
      className={
        viewAs === "PREVIOUS"
          ? style.carousel_container_prev
          : style.carousel_container
      }
      title={viewAs === "PREVIOUS" ? "previous" : "next"}
      onClick={onScrollNext}
    >
      <img src="/images/carousel-next-icon.svg" alt="carousel icon" />
    </div>
  );
};

export default CarouselIcon;
