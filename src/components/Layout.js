// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import logoImage from "./images/log logo.png";

function Layout() {
    return (
        <div>
            <Navbar />

            {/* LOGO */}
            <div id="logo" style={{ textAlign: 'center' }}>
                <img src={logoImage} alt="Logo" height={200} />
            </div>

            <Outlet /> {/* This is where the child routes will be rendered */}

            <ScrollRestoration />
        </div>
    );
}

export default Layout;
