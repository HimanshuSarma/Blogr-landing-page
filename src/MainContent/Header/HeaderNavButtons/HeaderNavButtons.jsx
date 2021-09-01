import { useRef } from 'react';
import './HeaderNavButtons.css';

const HeaderNavButtons = ({from}) => {

    const header_nav_btns = useRef();

    return (
        <ul ref={header_nav_btns} className='header-nav-btns'>
            <li className='header-nav-btn'>
                <div className='header-nav-btn-title'>
                    <p>Product</p> 
                    {from === 'header' && <img className='header-nav-btn-icon-light' src="./assets/icon-arrow-light.svg" alt="" />}
                    {from === 'header-content' && <img className='header-nav-btn-icon-dark' src="./assets/icon-arrow-dark.svg" alt="" />}
                </div>

                <div className="header-nav-btn-dropdown">
                    <button className="header-nav-btn-dropdown-btn">Overview</button>
                    <button className="header-nav-btn-dropdown-btn">Pricing</button>
                    <button className="header-nav-btn-dropdown-btn">Marketplace</button>
                    <button className="header-nav-btn-dropdown-btn">Features</button>
                    <button className="header-nav-btn-dropdown-btn">Integration</button>
                </div>
            </li>
            <li className='header-nav-btn'>

                <div className='header-nav-btn-title'>
                    <p>Company</p> 
                    <img className='header-nav-btn-icon-light' src="./assets/icon-arrow-light.svg" alt="" />
                    <img className='header-nav-btn-icon-dark' src="./assets/icon-arrow-dark.svg" alt="" />
                </div>

                <div className="header-nav-btn-dropdown">
                    <button className="header-nav-btn-dropdown-btn">About</button>
                    <button className="header-nav-btn-dropdown-btn">Team</button>
                    <button className="header-nav-btn-dropdown-btn">Blog</button>
                    <button className="header-nav-btn-dropdown-btn">Career</button>
                </div>
            </li>
            <li className='header-nav-btn'>

                <div className='header-nav-btn-title'>
                    <p>Connect</p> 
                    <img className='header-nav-btn-icon-light' src="./assets/icon-arrow-light.svg" alt="" />
                    <img className='header-nav-btn-icon-dark' src="./assets/icon-arrow-dark.svg" alt="" />
                </div>

                <div className="header-nav-btn-dropdown">
                    <button className="header-nav-btn-dropdown-btn">Contact</button>
                    <button className="header-nav-btn-dropdown-btn">Newsletter</button>
                    <button className="header-nav-btn-dropdown-btn">LinkedIn</button>
                </div>
            </li>

            <li className='header-auth'>
                <button className='header-auth-login'>Login</button>
                <button className='header-auth-signup'>Signup</button>
            </li>
        </ul>
    )
}

export default HeaderNavButtons
