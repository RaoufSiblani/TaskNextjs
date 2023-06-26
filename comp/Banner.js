import React from 'react';

const Banner = ({ imageSrc, overlayText }) => {
  return (
    <div className="flex justify-center w-full relative">
      <img src={imageSrc} alt="Banner" style={{ width: '95%', maxHeight: '80vh' }} className="rounded-lg object-cover brightness-50" />
      <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <p className="font-sans w-full text-center font-bold break-words text-white relative text-3xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          {overlayText}
        </p>
      </div>
    </div>
  );
}

export default Banner;
