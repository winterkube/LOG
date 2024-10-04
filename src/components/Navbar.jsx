


// src/components/NavBar.js
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';

// Import images
import plankImage from './images/plank.png';
import homeIcon from './images/homeicon.png';
import gamingIcon from './images/gamingicon.png';
import aboutIcon from './images/abouticon.png';
import loginIcon from './images/loginicon.png';

import arrowRight from './images/arrow-right.png'; // Arrow pointing right
import arrowLeft from './images/arrow-left.png'; // Arrow pointing left


function Navbar() {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const handleToggle = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`navbar ${isCollapsed ? 'collapsed' : ''}`}>

            <div className="toggle-button" onClick={handleToggle}>
                <img
                    src={isCollapsed ? arrowLeft : arrowRight}
                    alt="Toggle Navbar"
                    className="arrow-icon"
                />
            </div>


            <div className="plank-image">
                <img src={plankImage} alt="Plank" height="140" width="530"/>
            </div>

            <div className="nav-buttons">
                {/* HOME LOGO */}
                <div id="home">
                    <Link to="/LOG" title="Home">
                        <img src={homeIcon} alt="Home" height="65"/>
                    </Link>
                    <h5>HOME</h5>
                </div>

                {/* GAMES LOGO */}
                <div id="gaming">
                    <Link to="/LOG/games" title="Games">
                        <img src={gamingIcon} alt="Games" height="65"/>
                    </Link>
                    <h5>GAMES</h5>
                </div>

                {/* ABOUT LOGO */}
                <div id="about">
                    <Link to="/LOG/about" title="About">
                        <img src={aboutIcon} alt="About" height="65"/>
                    </Link>
                    <h5>ABOUT</h5>
                </div>

                {/* LOGIN LOGO */}
                <div id="login">
                    <Link to="/LOG/login" title="Login">
                        <img src={loginIcon} alt="Login" height="65"/>
                    </Link>
                    <h5>LOGIN</h5>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
