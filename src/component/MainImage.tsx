import React from "react";
import Carousel from "react-bootstrap/Carousel";

function MainImage() {
  return (
    <Carousel controls={false} interval={3000}>
      <Carousel.Item>
        <img className="d-block w-100" src="img/main01.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/main02.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="img/main03.jpg" alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default MainImage;
