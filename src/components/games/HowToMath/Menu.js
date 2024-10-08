// src/components/games/HowToMath/Menu.js

import React, { useState, useEffect } from 'react';
import './HowToMath.css';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';
import volumeButtonImage from './assets/volume button.png';
import backButtonImage from './assets/back button.png';
import trialsButtonImage from './assets/trials button.png';
import trialBox from "./assets/trial box.png";
import crumpledPaper from "./assets/crumpled paper.png";
import cheeba1Image from "./assets/cheeba1.png";
import cheeba2Image from "./assets/cheeba2.png";
import leyvi1Image from "./assets/leyvi1.png";
import leyvi2Image from "./assets/leyvi2.png";
import classroomImage from "./assets/classroom.png";
import classroomImage2 from "./assets/classroom2.png";
import classroomImage3 from "./assets/classroom3.png";
import classroomImage4 from "./assets/classroom4.png";
import blackboardImage from "./assets/blackboard.png";

function Menu({ onStart }) {


    const [imagesLoaded, setImagesLoaded] = useState(false);

    function preloadMImages(imageArray, callback) {
        let loadedMImages = 0;
        const totalImages = imageArray.length;

        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedMImages++;
                if (loadedMImages === totalImages) {
                    callback();
                }
            };
            img.onerror = () => {
                loadedMImages++;
                if (loadedMImages === totalImages) {
                    callback();
                }
            };
        });
    }

    useEffect(() => {
        const imageSources = [
            playButtonImage,
            settingsButtonImage,
            volumeButtonImage,
            backButtonImage,
            trialsButtonImage,
            cheeba1Image,
            cheeba2Image,
            leyvi1Image,
            leyvi2Image,
            classroomImage,
            classroomImage2,
            classroomImage3,
            classroomImage4,
            blackboardImage,

            // Add any other images used in your game
        ];

        preloadMImages(imageSources, () => {
            setImagesLoaded(true);
        });
    }, []);


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
            <>
            {!imagesLoaded && (
                <div className="loading-screen">
                    <p>Loading...</p>
                </div>
            )}
            </>

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
