import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/united-states-america-map-with-magnifying-glass_23-2148232489.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/grayscale-shot-buildings-torun-city-poland-with-cloudy-sky-background_181624-18014.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.freepik.com/free-photo/greyscale-shot-big-ben-london-uk_181624-46762.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
  );
  };    

export default Banner;