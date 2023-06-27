import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';

import Banner from './Banner';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Carousel = ({ bannerData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
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
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {bannerData.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner imageSrc={banner.imageSrc} overlayText={banner.overlayText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;

