import React, { useEffect, useState } from "react";
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import "./style.css";

const ImageSlider = function ({ url, limit }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchImages = async function (url) {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=2&limit=${limit}`);
      if (!response.ok) {
        throw new Error(" url Not found!");
      }
      const data = await response.json();
      if (data) setImages(data);

      setLoading(false);
    } catch (err) {
      setErrorMsg(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading Data!!! Please wait</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured! Please try again later. {errorMsg}</div>;
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  return (
    <div>
      <h2>Image Slider</h2>
      <div className="main">
        {images && images.length
          ? images.map(function (el, index) {
              return (
                <img
                  key={el.id}
                  src={el.download_url}
                  className={
                    currentSlide === index
                      ? "current--image"
                      : "current--image hide--current--image"
                  }
                  alt="downloaded image"
                />
              );
            })
          : null}

        <FaCircleArrowLeft className="btn btn--left" onClick={handlePrevious} />
        <FaCircleArrowRight className="btn btn--right" onClick={handleNext} />
        <span className="circle-indicators">
          {images && images.length
            ? images.map(function (_, index) {
                return (
                  <button
                    className={
                      currentSlide === index
                        ? "current--indicators"
                        : "current--indicators unselected "
                    }
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
