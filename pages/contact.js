import Banner from '@/comp/Banner.js';
import Navbar from '../comp/Navbar.js'
import Footer from '@/comp/Footer.js';
import Rating from '@/comp/Rating.js';
const contact = () => {
    const bannerData = {
        imageSrc: '/images/contact.png',
        overlayText: 'Contact US',
      };
    return ( 
        <div>
            <Navbar />
            <Banner {...bannerData} />
            <Rating/>
            <Footer/>
            
        </div>
     );
}
 
export default contact;