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

function Menu({ onStart }, {setVolume}) {


    const [imagesLoaded, setImagesLoaded] = useState(false);

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isPlayOpen, setIsPlayOpen] = useState(false);
    const [animateExit, setAnimateExit] = useState(false);
    const [flashExit, setFlashExit] = useState(false);

    // const [openVolume, setOpenVolume] = useState(false);

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
        // setOpenVolume(true);

    };

    // if (!imagesLoaded) {
    //     return (
    //         <>
    //             {/*{!imagesLoaded && (*/}
    //             {/*    <div className="loading-screen">*/}
    //             {/*        <p>Loading...</p>*/}
    //             {/*    </div>*/}
    //             {/*)}*/}
    //         </>
    //     );
    const handleVolumeChange = (event) => {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
    };

    // } else {
    {
        return (
            <div className="behind-bg">

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
                            {/*{openVolume && (*/}


                                <label className="volume-slider">
                                    Volume:
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.01"
                                        onChange={handleVolumeChange}
                                        defaultValue="0.5"
                                    />
                                </label>


                            {/*<img*/}
                            {/*    src={volumeButtonImage}*/}
                            {/*    alt="Volume Button"*/}
                            {/*    className={`volume-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}*/}
                            {/*    onClick={volumeFunc}*/}
                            {/*    width="230"*/}
                            {/*/>*/}
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
            </div>
        );
    }

}

export default Menu;
