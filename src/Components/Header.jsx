import React from "react";
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="header-area header-area-2">
                <div className="navbar-area">
                    <div className="main-responsive-nav">
                        <div className="container">
                            <div className="mobile-nav">
                                <a href="index.html" className="logo">
                                    <img className="black-logo" src="assets/images/logo.png" alt="logo" />
                                </a>
                                <div className="menu-sidebar-1 menu-small-device">
                                    <div className="call-button">
                                        <i className="fas fa-headset"></i>
                                        <p>Have Any <span>Questions?</span></p>
                                        <a href="tel:+980045647823">+980-045-647-823</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-light">
                                <a className="navbar-brand" href="index.html">
                                    <img className="black-logo" src="assets/images/logo.png" alt="logo" />
                                </a>
                                <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item plus-icon">
                                            <Link to={'/'} className="nav-link  active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/services"} className="nav-link ">Services</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/our-team"} className="nav-link ">Our Team</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/case-study"} className="nav-link ">Case Study</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/blogs"} className="nav-link ">Blog</Link>
                                        </li>
                                        <li className="nav-item"><a href="contact.html" className="nav-link">Contact Us</a></li>
                                    </ul>
                                    <div className="menu-sidebar menu-sidebar-1">
                                        <a className="default-button-3 default-button-3-h" href="contact.html">Get Started <i className="fas fa-long-arrow-alt-right"></i></a>
                                        <div className="call-button">
                                            <i className="fas fa-headset"></i>
                                            <p>Have Any <span>Questions?</span></p>
                                            <a href="tel:+980045647823">+980-045-647-823</a>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;