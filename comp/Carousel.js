import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import Banner from './Banner';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const Carousel = ({ bannerData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const swiperRef = useRef(null);

  const previousImage = () => {
    swiperRef.current.swiper.slidePrev();
  };

  const nextImage = () => {
    swiperRef.current.swiper.slideNext();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex w-full relative">
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
        navigation={{
          prevEl: '.prev-button',
          nextEl: '.next-button',
        }}
        ref={swiperRef}
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner imageSrc={banner.imageSrc} overlayText={banner.overlayText} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="prev-button" onClick={previousImage}>
        &lt;
      </button>
      <button className="next-button" onClick={nextImage}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;