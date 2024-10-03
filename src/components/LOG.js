// src/Home.js
import React from 'react';
import '../App.css'; // Import the stylesheet

// Import images
import logoImage from './images/log logo.png';
import constructImage from './images/construct.png';
import {ScrollRestoration} from "react-router-dom";


function LOG() {
    return (
        <div className="LOG">

            {/* LOGO */}
            <div id="logo" style={{ textAlign: 'center' }}>
                <img src={logoImage} alt="Logo" height={250} />
            </div>

            <h4>
                LOG...?
                <br/>
            </h4>

            <h1>You shouldn't be here...</h1>


            <ScrollRestoration />
        </div>
    );
}

export default LOG;

