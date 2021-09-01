import './FutureSection.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const FutureSection = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section className='future-section main-grid'>
            <div className='future-section-content'>

                <h2 data-aos='fade-down' data-aos-duration='400' className='future-section-heading'>Designed for the future</h2>


                <div data-aos='fade-left'  data-aos-delay='300' data-aos-duration='400' className='future-section-svg-container'>
                    <img src="./assets/illustration-editor-desktop.svg" alt="" />
                </div>

                <div className='future-section-desc-container'>
                        <div className='future-section-desc-features'>
                            <div data-aos='fade-right' data-aos-delay='450' data-aos-duration='400' className='future-section-desc-feature'>
                                <h3 className='feature-title future-section-desc-feature-title'>
                                    Introducing an extensible editor
                                </h3>
                                <p className='feature-desc future-section-desc-feature-desc'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure quo nobis voluptatum delectus eos, saepe laborum teneturi sed officia quis aliquid minus est fugit tempora atque vero beatae distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita explicabo, nostrum fuga voluptatum.
                                    
                                </p>
                            </div>

                            <div data-aos='fade-right' data-aos-delay='600' data-aos-duration='400' className='future-section-desc-feature'>
                                <h3 className='feature-title future-section-desc-feature-title'>
                                    Robust content management
                                </h3>
                                <p className='feature-desc future-section-desc-feature-desc'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis esse quis incidunt pariatur ex qui earum, ipsum dolore, ea autem quisquam recusandae dicta fuga iste omnis cum adipisci veritatis? Laudantium!
                                </p>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default FutureSection
