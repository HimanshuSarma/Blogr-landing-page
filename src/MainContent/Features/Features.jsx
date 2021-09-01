import './Features.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Features = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className='features main-grid'>
            <div className='features-content'>
                <div data-aos='fade-left' data-aos-delay='0' data-aos-duration='500' className='features-content-svg-container'>
                    <img className='features-content-svg' src="./assets/illustration-laptop-desktop.svg" alt="" />
                </div>

                <div className='features-content-details'>
                    <div data-aos='fade-right' data-aos-delay='300' data-aos-duration='500' className="features-content-details-feature">
                        <h3 className=' feature-title features-content-details-feature-title'>
                            Free, open, simple
                        </h3>
                        <p className='feature-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet laboriosam ratione, voluptates nostrum repudiandae laudantium quisquam accusamus odio, et numquam nemo sit dicta omnis vitae saepe ullam? Explicabo, nam illum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet, unde ab beatae repellendus optio.
                        </p>
                    </div>

                    <div data-aos='fade-right' data-aos-delay='600' data-aos-duration='500' className="features-content-details-feature">
                        <h3 className='feature-title features-content-details-feature-title'>
                            Powerful toolings
                        </h3>
                        <p className='feature-desc'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet laboriosam ratione, voluptates nostrum repudiandae laudantium quisquam accusamus odio, et numquam nemo sit dicta omnis vitae saepe ullam? Explicabo, nam illum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features;
