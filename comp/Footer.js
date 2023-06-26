import React from 'react';
const Footer = () => {
  return (
    <footer>
      <div className="relative flex justify-center items-center flex-col w-full bg-black mt-5 pb-3">
        <div className="flex justify-center">
          <div className="p-10"><a className="inline-block h-12 w-12 bg-black  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><img src="/images/FB.png"></img></a></div>
          <div className="p-10"><a className="inline-block h-12 w-12 bg-black  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><img src="/images/TW.png"></img></a></div>
          <div className="p-10"><a className="inline-block h-12 w-12 bg-black  leading-10 rounded-full transition-colors duration-500 ease-in-out hover:bg-orange213" href="#" target="_blank"><img src="/images/IN.png"></img></a></div>
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
