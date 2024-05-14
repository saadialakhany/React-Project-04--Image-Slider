import React from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import img01 from "./assets/img-01.jpg";
import "./style.css";

const ImageSlider = () => {
  return (
    <div>
      <h2>Image Slider</h2>
      <div className="main">
        <img src={img01} className="image" />
        <FaCircleArrowRight className="btn btn--right" />
        <FaCircleArrowLeft className="btn btn--left" />
        <GoDot className="dot" />
      </div>
    </div>
  );
};

export default ImageSlider;
