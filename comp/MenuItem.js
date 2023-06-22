import React, { useState } from 'react';

const MenuItem = ({ image, title, price, description, onSelectItem, selected }) => {
  const handleCheckboxChange = () => {
    onSelectItem({ image, title, price });
  };

  return (
    <div className="inline-block sticky w-30 sm:w-45 lg:w-90 mx-10 my-5 border-2 border-black rounded-25 p-1 box-border hover:border-orange213 hover:border-dotted">
      <div className="group">
        <img src={image} alt="Food" className="w-95 object-contain rounded-25 px-1" />
      </div>
      <div className="text-left mt-10">
        <h3>{title}</h3>
        <h4>{price}$</h4>
        <p>{description}</p>
        <label>
          <input type="checkbox" checked={selected} onChange={handleCheckboxChange} /> add/remove Item
        </label>
      </div>
    </div>
  );
};

export default MenuItem;
