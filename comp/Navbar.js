import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black flex max-h-70 items-center mb-10">
      <img src="/images/logo.png" alt="My Image" class="w-20 h-20 p-3" />
      <ul className="flex items-center justify-center w-full list-none">
        <li>
          <a href="/" className={router.pathname === '/' ? "block text-35 text-[#F4992D] text-center p-10 px-20 no-underline font-bold" : "block text-35 text-white text-center p-10 px-20 no-underline font-bold"}>
            Home
          </a>
        </li>
        <li>
          <a href="/menu" className={router.pathname === '/menu' ? "block text-35 text-[#F4992D] text-center p-10 px-20 no-underline font-bold" : "block text-35 text-white text-center p-10 px-20 no-underline font-bold"}>
            Menu
          </a>
        </li>
        <li>
          <a href="/contact" className={router.pathname === '/contact' ? "block text-35 text-[#F4992D] text-center p-10 px-20 no-underline font-bold" : "block text-35 text-white text-center p-10 px-20 no-underline font-bold"}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
