import './Hero.css';
import Header from './Header/Header';

const Hero = () => {
    return (
        <div className='hero main-grid'>
            <div className='hero-background-svg'>
                <img src="./assets/bg-pattern-intro.svg" alt="" />
            </div>
            <Header />
            <div className='hero-content'>
                <h1> 
                    <span>A</span>
                    <span className='word'>modern</span>
                    <span className='word'>publishing</span>
                    <span className='word'>platform</span>
                </h1>
                <p>Grow your audience and build your online brand</p>
                <div className='hero-content-cta-btns'>
                    <button className='hero-content-cta-start-for-free'>Start For Free</button>
                    <button className='hero-content-cta-learn-more'>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Hero
