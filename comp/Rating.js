import React, { useState } from 'react';
import Reviews from './Reviews';

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [tempRating, setTempRating] = useState(0);
  const [tempComment, setTempComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRatingChange = (value) => {
    setTempRating(value);
  };

  const handleMouseEnter = (value) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleCommentChange = (event) => {
    setTempComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tempRating !== 0 && tempComment.trim() !== '') {
      setRating(tempRating);
      setComment(tempComment);
      setSubmitted(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Please provide a rating and comment.');
    }
  };

  return (
    <div className="mt-5 mb-5">
      <h1 className="text-center font-sans font-bold text-orange213 text-2xl">Rate This Page</h1>
      <hr className="border-t-2 border-orange213" />
      <p className="text-center">Please select a rating:</p>
      <div className="flex justify-center mt-5">
        {[1, 2, 3, 4, 5].map((value) => (
          <img
            key={value}
            src={
              value <= (hoverRating || tempRating)
                ? '/images/FillStar.png'
                : '/images/VoidStar.png'
            }
            alt={`Star ${value}`}
            onMouseEnter={() => handleMouseEnter(value)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleRatingChange(value)}
            className="cursor-pointer w-12 h-12"
          />
        ))}
      </div>
      <form onSubmit={handleSubmit} className="relative items-center flex flex-col">
        <textarea
          value={tempComment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
          className="block border outline-none w-4/5 text-18 mt-5 text-center border-gray-300 rounded-md p-10 rounded-3 placeholder-orange213 placeholder-center"
        />
        <button
          type="submit"
          className="mt-5 bg-orange-500 text-black cursor-pointer text-2xl rounded-1g font-semibold px-1 py-2  border-none rounded-3 transform transition-transform duration-300 hover:scale-110"
        >
          Submit
        </button>
      </form>
      <div className="mt-5">
  {errorMessage && <p className="text-red-500 ml-5 mb-2 text-center">{errorMessage}</p>}
  {submitted && <Reviews rating={rating} comment={comment} />}
</div>
    </div>
  );
};

export default Rating;
