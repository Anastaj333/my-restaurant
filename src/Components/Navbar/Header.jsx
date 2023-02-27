import React, { useState } from 'react';
import "./Header.css"
import logo from './../../imgs/FoodYummy.png'
function Header() {
        const [navbarState, setNavbarState] = useState(false);
        const html = document.querySelector("html");
        html.addEventListener("click", () => setNavbarState(false));
    return(
        <header className='header'>
            <nav className='nav container'>
                <div className='brand'>
                <a href="index.html" >
                    <img src={logo} className="nav__logo"/>
                </a>
                <div className="toggle">
            {navbarState ? (
                <i className="uil uil-times nav__close" onClick={() => setNavbarState(false)}></i>

            ) : (
                <i className="uil uil-bars nav__toggle" 
                onClick={(e) => {
                    e.stopPropagation();
                    setNavbarState(true);
                  }}></i>
            )}
                </div>
                </div>
                <div className="nav__menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link yello">Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">our services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" >portfolio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#test" className="nav__link">testimonials</a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" className="nav__link">products</a>
                        </li>
                        <li className="nav__item">
                            <a href="#newletter" className="nav__link" >newsletter</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id='nav__responsive' state = {navbarState} className={navbarState ? "show" : ""}
            >
                   <ul >
                        <li className="nav__item">
                            <a href="#home" className="nav__link yello" onClick={() => setNavbarState(false)}>Home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link" onClick={() => setNavbarState(false)}>our services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link" onClick={() => setNavbarState(false)}>portfolio</a>
                        </li>
                        <li className="nav__item">
                            <a href="#test" className="nav__link" onClick={() => setNavbarState(false)}>testimonials</a>
                        </li>
                        <li className="nav__item">
                            <a href="#products" className="nav__link" onClick={() => setNavbarState(false)}>products</a>
                        </li>
                        <li className="nav__item">
                            <a href="#newletter" className="nav__link" onClick={() => setNavbarState(false)}>newsletter</a>
                        </li>
                    </ul>
            </div>
        </header>
    )
}





export default Header