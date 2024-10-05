// src/components/games/HowToMath/Menu.js

import React from 'react';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';

function Menu({ onStart, onSettings }) {
    return (
        <>
            <img
                src={playButtonImage}
                alt="Play Button"
                className="play-button"
                onClick={onStart}
                width="300"
            />
            <img
                src={settingsButtonImage}
                alt="Settings Button"
                className="settings-button"
                onClick={onSettings}
                width="300"
            />
        </>
    );
}

export default Menu;
