import React from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-black flex max-h-70 items-center mb-10">
      <img src="/images/logo.png" alt="My Image" class="w-20 h-20 p-3" />
      <ul className="flex items-center justify-center w-full list-none">
        <li>
          <a href="/" className={router.pathname === '/' ? "nav-item text-orange213" : "nav-item text-white"}>
            Home
          </a>
        </li>
        <li>
          <a href="/menu" className={router.pathname === '/menu' ? "nav-item text-orange213" : "nav-item text-white"}>
            Menu
          </a>
        </li>
        <li>
            <a href="/contact" className={router.pathname === '/contact' ? "nav-item text-orange213" : "nav-item text-white"}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
