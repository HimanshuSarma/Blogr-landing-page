import './Header.css';
import { useRef, useState } from 'react';

const Header = () => {

    const ham_menu_container = useRef();

    const header_nav_btns = useRef();

    const [hamClickStatus, setHamClickStatus] = useState(false);



    const hamMenuClickHandler = () => {
        if(hamClickStatus) {
            ham_menu_container.current.classList.remove('ham-menu-open-anim');
            header_nav_btns.current.classList.remove('header-nav-btns-open-anim');
            header_nav_btns.current.classList.add('header-nav-btns-close-anim');

            setTimeout (() => {
                header_nav_btns.current.classList.remove('header-nav-btns-close-anim');
                header_nav_btns.current.classList.remove('header-nav-btns-mobile-container');
            }, 500)
            setHamClickStatus(false);
        } else {
            ham_menu_container.current.classList.add('ham-menu-open-anim');
            header_nav_btns.current.classList.add('header-nav-btns-mobile-container');
            header_nav_btns.current.classList.add('header-nav-btns-open-anim');
            header_nav_btns.current.classList.remove('header-nav-btns-close-anim');
            setHamClickStatus(true);
        }
    }


    const loginBtnSpanRef = useRef();

    const loginBtnTickSvgRef = useRef();
    const loginBtnTickSpanRef = useRef();
    const loginBtnTickSvgElRef = useRef();

    const loginClickHandler = () => {
        loginBtnSpanRef.current.classList.add('span-content');
        setTimeout(() => {
            loginBtnSpanRef.current.classList.remove('span-content');
        }, 2100);

        setTimeout(() => {
            loginBtnTickSvgElRef.current.classList.add('header-auth-login-tick');
            loginBtnTickSvgRef.current.classList.add('tick-span');
            loginBtnTickSpanRef.current.classList.add('header-auth-login-tick-svg-span');
        }, 2100);

        setTimeout(() => {
            loginBtnTickSvgElRef.current.classList.remove('header-auth-login-tick');
            loginBtnTickSvgRef.current.classList.remove('tick-span');
            loginBtnTickSpanRef.current.classList.remove('header-auth-login-tick-svg-span');
        }, 3000)
    }


    return (
        <div className='header'>
            <h1 className='header-logo'>
                Blogr
            </h1>

            <ul ref={header_nav_btns} className='header-nav-btns'>
                <li className='header-nav-btn'>
                    <div className='header-nav-btn-title'>
                        <button>Product</button> 
                        <img className='header-nav-btn-icon-light' src="./assets/icon-arrow-light.svg" alt="" />
                        <img className='header-nav-btn-icon-dark' src="./assets/icon-arrow-dark.svg" alt="" />
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
                        <button>Company</button> 
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
                        <button>Connect</button> 
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
                    <button onClick={loginClickHandler} className='header-auth-login'>Login 
                        <span ref={loginBtnSpanRef}></span>
                        <span ref={loginBtnTickSpanRef}><svg ref={loginBtnTickSvgElRef}xmlns="http://www.w3.org/2000/svg" width='0' height='0' viewBox="0 0 24 24"><path ref={loginBtnTickSvgRef} d="M0 12.116l2.053-1.897c2.401 1.162 3.924 2.045 6.622 3.969 5.073-5.757 8.426-8.678 14.657-12.555l.668 1.536c-5.139 4.484-8.902 9.479-14.321 19.198-3.343-3.936-5.574-6.446-9.679-10.251z"/></svg>
                            </span>
                    </button>
                    <button className='header-auth-signup'>Signup</button>
                </li>
            </ul>
            

            <div ref={ham_menu_container} onClick={hamMenuClickHandler} className='header-ham-menu-container'>
                <div className='header-ham-menu'>
                </div>
                <div className='header-ham-menu-top'>
                </div>
                <div className="header-ham-menu-bottom">
                </div>
            </div>
        </div>
    )
}

export default Header
