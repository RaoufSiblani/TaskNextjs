import { Inter } from 'next/font/google'
import Navbar from '../comp/Navbar.js'
import Banner from '@/comp/Banner.js';
import Footer from '@/comp/Footer.js';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const bannerData = {
    imageSrc: '/images/ban1.jpg',
    overlayText: 'Welcome',
  };
  return (
    <div>
      <Navbar />
      <Banner {...bannerData} />
      <Footer/>
      </div>
  )
}
