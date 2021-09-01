import './Infrastructure.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Infrastructure = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
        <section className='infrastructure main-grid'>
            <div className='infrastructure-circles-svg-container'>
                <div  className='infrastructure-circles-svg-container-rel'>
                    <img className='infrastructure-circles-svg' src="./assets/bg-pattern-circles.svg" alt="" />
                </div>
            </div>

            <div className='infrastructure-content'>
                <div className='infrastructure-phones-svg-container-rel'>
                    <div className='infrastructure-phones-svg-container-abs'>
                        <img className='infrastructure-phones-svg' src="./assets/illustration-phones.svg" alt="" />
                    </div>
                </div>
                <div className='infrastructure-content-desc-container'>
                    <h2 data-aos='fade-left' data-aos-duration='500' data-aos-delay='400' className='infrastructure-content-heading'>State Of The Art Infrastructure</h2>
                    <p data-aos='fade-left' data-aos-duration='500' data-aos-delay='550' className='infrastructure-content-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem officia blanditiis autem velit assumenda quia repellendus reiciendis suscipit distinctio alias facilis, deserunt dolores commodi voluptas perferendis ad earum molestias officiis.</p>
                </div>
                
            </div>
        </section>
        </>
    )
}

export default Infrastructure;
