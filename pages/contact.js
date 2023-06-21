import Banner from '@/comp/Banner.js';
import Navbar from '../comp/Navbar.js'
import Footer from '@/comp/Footer.js';
const contact = () => {
    const bannerData = {
        imageSrc: '/images/ban2.jpg',
        overlayText: 'Contact US',
      };
    return ( 
        <div>
            <Navbar />
            <Banner {...bannerData} />
            <Footer/>
        </div>
     );
}
 
export default contact;