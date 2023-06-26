import React, { useState, useEffect } from 'react';
import Banner from './Banner';

const Carousel = ({ bannerData }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? bannerData.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === bannerData.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [bannerData]);

  return (
    <div className="flex w-full relative" >
      <Banner imageSrc={bannerData[currentImageIndex].imageSrc} overlayText={bannerData[currentImageIndex].overlayText} />
      <button className="font-sans overlay absolute top-1/2 left-1 ml-12 items-center justify-center h-10 w-10 bg-black rounded-full text-white text-4xl hover:text-orange213" onClick={previousImage}> &lt; </button>
      <button className="font-sans overlay absolute top-1/2 right-1 mr-12 items-center justify-center h-10 w-10 bg-black rounded-full text-white text-4xl hover:text-orange213" onClick={nextImage}> &gt; </button>
    </div>
  );
};

export default Carousel;
