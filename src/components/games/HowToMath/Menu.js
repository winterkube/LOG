// src/components/games/HowToMath/Menu.js

import React from 'react';
import './HowToMath.css';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';

function handlePlayButtonClick() {
    // Start the game or transition to the next scene
}

function handleSettingsButtonClick() {
    // Start the game or transition to the next scene
}

function Menu({ onStart }) {
    return (
        <div className="menu">

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
                    onClick={handleSettingsButtonClick}
                    width="300"
                />


            {/*<button onClick={onStart}>Start Game</button>*/}
            {/*/!* You can add more buttons here for settings, instructions, etc. *!/*/}
        </div>
    );
}

export default Menu;
