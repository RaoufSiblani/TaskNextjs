import React from 'react';
const Footer = () => {
  return (
    <footer>
      <div className="relative flex justify-center items-center flex-col w-full bg-black mt-5 pb-3">
        <div className="flex justify-center">
          <div className="p-10"><a className="inline-block h-10 w-10 bg-white  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></div>
          <div className="p-10"><a className="inline-block h-10 w-10 bg-white  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><i class="fab fa-twitter"></i></a></div>
          <div className="p-10"><a className="inline-block h-10 w-10 bg-white  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><i class="fab fa-instagram"></i></a></div>
        </div>

        <div className="div2">
          <h3 className="text-white text-base text-center inline">Also visit: </h3>
          <a className="no-underline text-white text-base text-center inline hover:text-orange213" href="https://en.wikipedia.org/wiki/Bleach_(manga)" target="_blank" > Wiki</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
