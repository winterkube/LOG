// src/components/games/HowToMath/Menu.js

import React, { useState } from 'react';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';
import volumeButtonImage from './assets/volume button.png';
import backButtonImage from './assets/back button.png';
import trialsButtonImage from './assets/trials button.png';

function Menu({ onStart }) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isPlayOpen, setIsPlayOpen] = useState(false);

    const [animateExit, setAnimateExit] = useState(false);

    const goToSettings = () => {
        setAnimateExit(true);
        setTimeout(() => {
            setIsSettingsOpen(true);
            setAnimateExit(false);
        }, 300);
    };

    const goBack = () => {
        setAnimateExit(true);
        setTimeout(() => {
            setIsSettingsOpen(false);
            setIsPlayOpen(false);
            setAnimateExit(false);
        }, 300);
    };

    const goToPlay = () => {
        setAnimateExit(true);
        setTimeout(() => {
            setIsPlayOpen(true);
            setAnimateExit(false);
        }, 300);
    };

    const volumeFunc = () => {
        window.confirm('just lower ur computer volume idiot');
    }

    return (
        <>
            <div className="bg">
                <div className="blackboard"></div>
                <div className="leyvi"></div>
                <div className="cheeba"></div>

                {(!isSettingsOpen && !isPlayOpen) && (
                    <>
                        <img
                            src={playButtonImage}
                            alt="Play Button"
                            className={`play-button button ${animateExit ? 'exit' : ''}`}
                            onClick={goToPlay}
                            width="230"
                        />
                        <img
                            src={settingsButtonImage}
                            alt="Settings Button"
                            className={`settings-button button ${animateExit ? 'exit' : ''}`}
                            onClick={goToSettings}
                            width="230"
                        />
                    </>
                )}

                {isSettingsOpen && (
                    <>
                        <img
                            src={volumeButtonImage}
                            alt="Volume Button"
                            className={`volume-button button ${animateExit ? 'exit' : ''}`}
                            onClick={volumeFunc}
                            width="230"
                        />


                        <img
                            src={backButtonImage}
                            alt="Back Button"
                            className={`back-button button ${animateExit ? 'exit' : ''}`}
                            onClick={goBack}
                            width="230"
                        />
                    </>
                )}

                {isPlayOpen && (
                    <>
                        <img
                            src={trialsButtonImage}
                            alt="trials Button"
                            className={`trials-button button ${animateExit ? 'exit' : ''}`}
                            onClick={onStart}
                            width="230"
                        />
                        <img
                            src={backButtonImage}
                            alt="Back Button"
                            className={`back-button button ${animateExit ? 'exit' : ''}`}
                            onClick={goBack}
                            width="230"
                        />
                    </>

                )}

                <div className="flash"></div>
            </div>
        </>
    );
}

export default Menu;
