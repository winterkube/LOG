// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// Import images
import plankImage from './images/plank.png';
import homeIcon from './images/homeicon.png';
import gamingIcon from './images/gamingicon.png';
import aboutIcon from './images/abouticon.png';
import loginIcon from './images/loginicon.png';

function Navbar() {
    return (
        <div className="navbar">
            <div id="plank">
                <img src={plankImage} alt="Plank" height="140" width="530" />
            </div>

            {/* HOME LOGO */}
            <div id="home">
                <Link to="/" title="Home">
                    <img src={homeIcon} alt="Home" height="75" />
                </Link>
                <h5>HOME</h5>
            </div>

            {/* GAMES LOGO */}
            <div id="gaming">
                <Link to="/games" title="Games">
                    <img src={gamingIcon} alt="Games" height="75" />
                </Link>
                <h5>GAMES</h5>
            </div>

            {/* ABOUT LOGO */}
            <div id="about">
                <Link to="/about" title="About">
                    <img src={aboutIcon} alt="About" height="75" />
                </Link>
                <h5>ABOUT</h5>
            </div>

            {/* LOGIN LOGO */}
            <div id="login">
                <Link to="/login" title="Login">
                    <img src={loginIcon} alt="Login" height="75" />
                </Link>
                <h5>LOGIN</h5>
            </div>
        </div>
    );
}

export default Navbar;
