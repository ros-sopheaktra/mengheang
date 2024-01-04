import React, { useState, useEffect } from "react";
import "../css/header.css";
import logo from "../images/logos/fashion.png";

const Header = () =>{
    const [pageURL, setPageURL] = useState(0);
    useEffect(() => {
        setPageURL(window.location.pathname);
        console.log(pageURL)
    })
    return(
        <nav className="navbar navbar-expand-lg navbar-light text-white">
             <div className="collapse navbar-collapse justify-content-start">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt='Brand Logo'/>
                        </a>
                    </li>
                </ul> 
            </div>
            <div className="collapse navbar-collapse justify-content-center">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className={pageURL === "/"? "nav-link active": "nav-link"} href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className={pageURL === "/about"? "nav-link active": "nav-link"} href="/about">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className={pageURL === "/contact"? "nav-link active": "nav-link"} href="/contact">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li className="nav-item">
                        <a class="nav-link" href="/cart">
                            <i className="fa fa-shopping-cart text-warning"></i> 
                        </a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="/login"><i className="fa fa-sign-in"></i> Login</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a class="nav-link" href="/register"><i className="fa fa-sign-out"></i> Register</a>
                    </li>
                </ul> 
            </div>
        </nav>
    )
}

export default Header;