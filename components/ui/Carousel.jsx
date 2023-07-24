import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick'

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
          <div className='relative w-full h-[450px]'>
            <Image alt='' src={'/img/sliderFoto.jpg'} fill/>
          </div>
          <div className='relative w-full h-[450px]'>
            <Image alt='' src={'/img/sliderFoto.jpg'} fill/>
          </div>
          <div className='relative w-full h-[450px]'>
            <Image alt='' src={'/img/sliderFoto.jpg'} fill/>
          </div>
        </Slider>
      </div>
  )
}

export default Carousel