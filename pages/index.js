import Navbar from '../comp/Navbar.js';
import Footer from '@/comp/Footer.js';
import Carousel from '@/comp/Carousel.js';
import Accordion from '@/comp/Accordion.js'; 
import Example from '@/comp/Acc+.js';

export default function Home() {
  const bannerData = [
    {
      imageSrc: '/images/carousel1.png',
      overlayText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      imageSrc: '/images/carousel2.png',
      overlayText: 'Sed tincidunt facilisis ultrices. Nullam nec consequat nisi',
    },
    {
      imageSrc: '/images/carousel3.png',
      overlayText: 'Suspendisse tristique lacus ac nisl consequat, nec dignissim leo posuere',
    },
    {
      imageSrc: '/images/carousel4.png',
      overlayText: 'Morbi eget velit in massa tempor efficitur',
    },
  ];

  const accordionData = [
    {
      id: 1,
      question: 'Question 1',
      answer: 'Answer 1',
    },
    {
      id: 2,
      question: 'Question 2',
      answer: 'Answer 2',
    },
    {
      id: 3,
      question: 'Question 3',
      answer: 'Answer 3',
    },
  ];

  return (
    <div>
      <Navbar />
      <Carousel bannerData={bannerData} />
      <Accordion accordionData={accordionData} />
      <Example/>
      <Footer />
    </div>
  );
}