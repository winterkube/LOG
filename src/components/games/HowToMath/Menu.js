// src/components/games/HowToMath/Menu.js

import React from 'react';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';
import cheebaImage from './assets/dogss_spsh.png';

function Menu({ onStart, onSettings }) {
    return (
        <>

            <div className="cheeba"></div>


            <img
                src={playButtonImage}
                alt="Play Button"
                className="play-button"
                onClick={onStart}
                width="260"
            />
            <img
                src={settingsButtonImage}
                alt="Settings Button"
                className="settings-button"
                onClick={onSettings}
                width="260"
            />


        </>
    );
}

export default Menu;
