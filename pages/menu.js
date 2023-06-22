import React from 'react';
import MenuItem from '@/comp/MenuItem.js';
import Navbar from '../comp/Navbar.js';
import Banner from '@/comp/Banner.js';
import Footer from '@/comp/Footer.js';

const Menu = () => {
  const bannerData = {
    imageSrc: '/images/ban3.jpg',
    overlayText: 'Menu',
  };
  const menuItems = [
    {
      image: '/images/item1.png',
      title: 'Pecan-Crusted Chicken Breast',
      price: '10',
      description: '480 calories, 38 grams carbohydrate',
    },
    {
      image: '/images/item2.png',
      title: 'Turkey Tacos',
      price: '7',
      description: '430 calories, 43 grams carbohydrate',
    },
    {
      image: '/images/item3.png',
      title: 'Jalapeño Chicken and Corn Chowder',
      price: '13',
      description: '255 calories, 28 grams carbohydrate',
    },
  ];
  
  return (
    <div>
      <Navbar />
      <Banner {...bannerData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
  {menuItems.map((menuItem, index) => (
    <MenuItem
      key={index}
      image={menuItem.image}
      title={menuItem.title}
      price={menuItem.price}
      description={menuItem.description}
    />
  ))}
</div>
      <Footer />
    </div>
  );
};

export default Menu;
