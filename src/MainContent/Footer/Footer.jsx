import './Footer.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <footer className='footer main-grid'>
            <div className='footer-content'>
                <div data-aos='fade-up' data-aos-delay='0' data-aos-duration='500' className='footer-sections footer-logo'>
                    <h1 className='footer-headings'>Blogr</h1>
                </div>

                <div data-aos='fade-up' data-aos-delay='250' data-aos-duration='500' className='footer-sections footer-btn-sections footer-products'>
                    <h3 className='footer-headings footer-section-headings'>Product</h3>

                    <div className='footer-sections-btns'>
                        <button className='footer-btn'>Overview</button>
                        <button className='footer-btn'>Pricing</button>
                        <button className='footer-btn'>Marketplace</button>
                        <button className='footer-btn'>Features</button>
                        <button className='footer-btn'>Integrations</button>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-delay='500' data-aos-duration='500' className='footer-sections footer-btn-sections footer-company'>
                    <h3 className='footer-headings footer-section-headings'>Company</h3>

                    <div className='footer-sections-btns'>
                        <button className='footer-btn'>About</button>
                        <button className='footer-btn'>Team</button>
                        <button className='footer-btn'>Blog</button>
                        <button className='footer-btn'>Careers</button>
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-delay='750' data-aos-duration='500' className='footer-sections footer-btn-sections footer-connect'>
                    <h3 className='footer-headings footer-section-headings'>Connect</h3>

                    <div className='footer-sections-btns'>
                        <button className='footer-btn'>Contact</button>
                        <button className='footer-btn'>Newsletter</button>
                        <button className='footer-btn'>LinkedIn</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
