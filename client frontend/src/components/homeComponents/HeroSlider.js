import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {/* <div
        className="hero-item1"
       
      >
        <div className="hero-content text-center m-auto"> */}
          {/* <h2>Save 25%</h2>
          <h1>Christmas Sale</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </p> */}
          {/* <a href="#">LEARN MORE</a> */}
        {/* </div>
      </div> */}
      <div
        className="hero-item2"
     
      >
        <div className="hero-content text-center m-auto">
          {/* <h2>Save 25%</h2>
          <h1>Christmas Sale</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </p> */}
          {/* <a href="#">LEARN MORE</a> */}
        </div>
      </div>
      <div
        className="hero-item3"
       
      >
        <div className="hero-content text-center m-auto">
          {/* <h2>Save 25%</h2>
          <h1>Christmas Sale</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </p> */}
          {/* <a href="#">LEARN MORE</a> */}
        </div>
      </div>
      <div
        className="hero-item4"
        
      >
        <div className="hero-content text-center m-auto"> */}
          {/* <h2>Save 25%</h2>
          <h1>Christmas Sale</h1>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </p> */}
          {/* <a href="#">LEARN MORE</a> */}
        </div>
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default HeroSlider;
