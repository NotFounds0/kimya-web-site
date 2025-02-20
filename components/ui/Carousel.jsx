import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    appenDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 border bg-white rounded-full mt-10"></div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative w-full md:h-[400px] h-[200px]">
          <Image alt="" src={"/img/foto11.jpg"} fill objectFit="cover" />
        </div>
        <div className="relative w-full md:h-[400px] h-[200px]">
          <Image alt="" src={"/img/foto12.jpg"} fill objectFit="cover" />
        </div>
        <div className="relative w-full md:h-[400px] h-[200px]">
          <Image alt="" src={"/img/foto13.jpg"} fill objectFit="cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
