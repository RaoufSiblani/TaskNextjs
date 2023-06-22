import React from 'react';

const Banner = ({ imageSrc, overlayText }) => {
  return (
    <div className="flex justify-center w-full relative">
      <img src={imageSrc} alt="Banner" style={{ width: '95%', maxHeight: '80vh' }} className="rounded-lg object-cover" />
      <div className="overlay absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <p className="font-sans w-full text-center font-bold text-5xl break-words text-black relative ">
          {overlayText}
        </p>
      </div>
    </div>
  );
}

export default Banner;
