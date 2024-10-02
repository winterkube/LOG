// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import {Outlet, ScrollRestoration} from 'react-router-dom';

function Layout() {
    return (
        <div>
            <Navbar />
            <Outlet /> {/* This is where the child routes will be rendered */}

            <ScrollRestoration />
        </div>
    );
}

export default Layout;
