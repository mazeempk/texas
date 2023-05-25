import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import Logo from '../images/logo.png'
export default function Navbar() {
  return (
    <>
    <div className="myNav">
        {/* <div className="logo">
            <h1>logo</h1>
            <h2>logo</h2>
        </div> */}
        <ul>
            <li>
              <Link to="/">
                <img src={Logo} className="myLogo" alt="logo" />
              </Link> 
            </li>

            <li><Link className="home" to="/">Home</Link></li>
            <li><Link className="contact" to="">Contact</Link></li>
            <li><Link className="about" to="/about">About Us</Link></li>
            <li><a className="faq" href="#contact">FAQ</a></li>

            <li> <Link to="/login"><button type="button" class="outline purple-white">Sign In</button> </Link> </li>
        </ul>
    </div>
    </>
  );
}
