// src/components/games/HowToMath/Menu.js

import React, { useState, useEffect } from 'react';
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
    const [flashExit, setFlashExit] = useState(false);

    // New state variable to control initial animations
    const [animateEnter, setAnimateEnter] = useState(false);

    useEffect(() => {
        // Trigger enter animations when the component mounts
        setAnimateEnter(true);
    }, []);

    const goToSettings = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setTimeout(() => {
            setIsSettingsOpen(true);
            setAnimateExit(false);
        }, 300);
    };

    const goBack = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setTimeout(() => {
            setIsSettingsOpen(false);
            setIsPlayOpen(false);
            setAnimateExit(false);
        }, 300);
    };

    const goToPlay = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setTimeout(() => {
            setIsPlayOpen(true);
            setAnimateExit(false);
        }, 300);
    };

    const goToTrials = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setFlashExit(true);
        setTimeout(() => {
            onStart();
        }, 500);
    };

    const volumeFunc = () => {
        window.confirm('just lower your computer volume xd');
    };

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
                            className={`play-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                            onClick={goToPlay}
                            width="230"
                        />
                        <img
                            src={settingsButtonImage}
                            alt="Settings Button"
                            className={`settings-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
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
                            className={`volume-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                            onClick={volumeFunc}
                            width="230"
                        />
                        <img
                            src={backButtonImage}
                            alt="Back Button"
                            className={`back-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                            onClick={goBack}
                            width="230"
                        />
                    </>
                )}

                {isPlayOpen && (
                    <>
                        <img
                            src={trialsButtonImage}
                            alt="Trials Button"
                            className={`trials-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                            onClick={goToTrials}
                            width="230"
                        />
                        <img
                            src={backButtonImage}
                            alt="Back Button"
                            className={`back-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                            onClick={goBack}
                            width="230"
                        />
                    </>
                )}

                <div className={`flash ${flashExit ? 'exit' : ''}`}></div>
            </div>
        </>
    );
}

export default Menu;
