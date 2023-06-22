import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black flex items-center mb-10">
      <img src="/images/logo.png" alt="My Image" className="w-20 h-20 p-3" />
      <ul className="flex items-center justify-center w-full list-none">
        <li>
          <a
            href="/"
            className={`block text-2xl sm:text-3xl lg:text-4xl text-center p-3 px-5 sm:px-10 lg:px-20 no-underline font-bold ${
              router.pathname === '/' ? 'text-orange213' : 'text-white'
            }`}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/menu"
            className={`block text-2xl sm:text-3xl lg:text-4xl text-center p-3 px-5 sm:px-10 lg:px-20 no-underline font-bold ${
              router.pathname === '/menu' ? 'text-orange213' : 'text-white'
            }`}
          >
            Menu
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className={`block text-2xl sm:text-3xl lg:text-4xl text-center p-3 px-5 sm:px-10 lg:px-20 no-underline font-bold ${
              router.pathname === '/contact' ? 'text-orange213' : 'text-white'
            }`}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
