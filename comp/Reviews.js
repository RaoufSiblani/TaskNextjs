import React from 'react';

const Reviews = ({ rating, comment }) => {
  return (

    <div className="flex justify-center">
      <div className="w-4/5 bg-black bg-opacity-20">
        <p>Name</p>
        <div className="items-center flex">
        <img src="/images/Mpfp.png" alt="Review Image" className="p-1 relative" />
        <p className="font-sans font-xl ml-2 text-white font-bold ">Rating:{rating}/5</p>
        <p className="font-sans font-30 ml-2 text-white font-bold text-center">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
