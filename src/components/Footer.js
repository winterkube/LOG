// src/components/Footer.js

import React from 'react';
import './styles/Footer.css'; // Import CSS for styling

function terms() {
    return window.confirm('please dont sue us');
}

function contact() {
    window.confirm('please dont contact us');
}

function Footer() {
    return (

        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; 2024 LOG. All lefts reserved.</p>
                </div>
                <div className="footer-right">
                    <span onClick={terms}>Terms & Conditions</span>
                    <span className="separator"> | </span>
                    <span onClick={contact}>Contact</span>
                </div>
            </div>
        </footer>

    );
}

export default Footer;
