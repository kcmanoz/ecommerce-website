import React, { useState } from "react";
import back from "../Images/arrow_back.png";
import forward from "../Images/arrow_forward.png";
import trend1 from "../Images/trending/trending1.jpg";
import trend2 from "../Images/trending/trending2.jpg";
import trend3 from "../Images/trending/trending3.jpg";
import trend4 from "../Images/trending/trending4.jpg";
import shoe1 from "../Images/shoes/shoe1.jpg";
import shoe2 from "../Images/shoes/shoe2.jpg";
import shoe3 from "../Images/shoes/shoe3.jpg";
import tshirt1 from "../Images/men-clothing/men-tshirt1.jpg";
import tshirt2 from "../Images/women-clothing/women-tshirt2.jpg";
import "../Styles/clothingCarousel.css";

const ClothingCarousel = ({ images }) => {
  const [startIndex, setStartIndex] = useState(0);

  const prevSlide = () => {
    if (startIndex === 0) return;
    setStartIndex(startIndex - 1);
  };

  const nextSlide = () => {
    if (startIndex + 4 >= images.length) return;
    setStartIndex(startIndex + 1);
  };

  return (
    <div className="clothing-carousel">
      <h3>Trending</h3>
      <button
        className="prev-button"
        onClick={prevSlide}
        disabled={startIndex === 0}
      >
        <img src={back} alt="back-arrow" />
      </button>

      <div className="carousel-container">
        {images.slice(startIndex, startIndex + 4).map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Clothing ${index}`} />
          </div>
        ))}
      </div>
      <button
        className="next-button"
        onClick={nextSlide}
        disabled={startIndex + 4 >= images.length}
      >
        <img src={forward} alt="forward-arrow" />
      </button>
    </div>
  );
};

const ClothingStoreCarousel = () => {
  const images = [
    trend1,
    trend2,
    shoe1,
    trend3,
    trend4,
    shoe2,
    tshirt1,
    tshirt2,
    shoe3,
  ];

  return (
    <div>
      <ClothingCarousel images={images} />
    </div>
  );
};

export default ClothingStoreCarousel;
