// src/components/games/HowToMath/Menu.js

import React, {useState, useEffect, useRef} from 'react';
import './HowToMath.css';
import './styles/Menu.css';
import playButtonImage from './assets/play button.png';
import playButtonImageHover from './assets/play button hover.png';
import settingsButtonImage from './assets/settings button.png';
import settingsButtonImageHover from './assets/settings button hover.png';
import volumeButtonImage from './assets/volume button.png';
import volumeButtonImageHover from './assets/volume button hover.png';
import backButtonImage from './assets/back button.png';
import backButtonImageHover from './assets/back button hover.png';
import trialsButtonImage from './assets/trials button.png';
import trialsButtonImageHover from './assets/trials button hover.png';
import difficultyButtonImage from './assets/difficulty button.png';
import difficultyButtonImageHover from './assets/difficulty button hover.png';
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
import buttonClickSfx from "./assets/music/buttonclick.mp3";

function Menu({ onStart, setVolume, setDifficulty, difficulty }) {


    const [imagesLoaded, setImagesLoaded] = useState(false);

    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isPlayOpen, setIsPlayOpen] = useState(false);
    const [animateExit, setAnimateExit] = useState(false);
    const [flashExit, setFlashExit] = useState(false);

    const [openVolume, setOpenVolume] = useState(false);

    // New state variable to control initial animations
    const [animateEnter, setAnimateEnter] = useState(true);

    const [isDifficultyModalOpen, setIsDifficultyModalOpen] = useState(false);

    const clickAudioRef = useRef(new Audio(buttonClickSfx));
    // ensure the audio is ready
    useEffect(() => {
        const a = clickAudioRef.current;
        a.load();
    }, []);
    // function to play the SFX (resetting time so it can play repeatedly)
    const playClick = () => {
        const a = clickAudioRef.current;
        a.currentTime = 0;
        a.volume = 1;
        a.play();
    };

    const goToSettings = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setTimeout(() => {
            setIsSettingsOpen(true);
            setAnimateExit(false);
        }, 300);
        playClick();
    };

    const goBack = () => {
        if (!openVolume && !isDifficultyModalOpen) {
            setAnimateExit(true);
            setAnimateEnter(false); // Stop enter animations
            setTimeout(() => {
                setIsSettingsOpen(false);
                setIsPlayOpen(false);
                setAnimateExit(false);
            }, 300);
        }
        playClick();
    };

    const goToPlay = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setTimeout(() => {
            setIsPlayOpen(true);
            setAnimateExit(false);
        }, 300);
        playClick();
    };

    const goToTrials = () => {
        setAnimateExit(true);
        setAnimateEnter(false); // Stop enter animations
        setFlashExit(true);
        setTimeout(() => {
            onStart();
        }, 500);
        playClick();
    };

    const volumeFunc = () => {
        // window.confirm('just lower your computer volume xd');
        if (!openVolume && !isDifficultyModalOpen) {
            setOpenVolume(true);
        }
        playClick();
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

    const [over, setOver] = useState(false);
    const [over2, setOver2] = useState(false);
    const [over3, setOver3] = useState(false);
    const [over4, setOver4] = useState(false);
    const [over5, setOver5] = useState(false);
    const [over6, setOver6] = useState(false);

    const difficultyFunc = () => {
        if (!openVolume && !isDifficultyModalOpen)
            setIsDifficultyModalOpen(true);
        playClick();
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
                            <div>
                                <img
                                    onMouseOver={() => setOver(true)}
                                    onMouseOut={() => setOver(false)}
                                    src={over ? playButtonImageHover : playButtonImage}
                                    alt="Play Button"
                                    className={`play-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                    onClick={goToPlay}
                                    draggable={false}
                                    width="230"
                                />
                            </div>

                            <img
                                onMouseOver={() => setOver2(true)}
                                onMouseOut={() => setOver2(false)}
                                src={over2 ? settingsButtonImageHover : settingsButtonImage}
                                alt="Settings Button"
                                className={`settings-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={goToSettings}
                                width="230"
                            />
                        </>
                    )}

                    {isSettingsOpen && (
                        <>
                        {openVolume && (
                            <>
                            <div className="modal-overlay">
                                <div className="volume-modal">

                                    <div className="voltext">VOLUME</div>

                                    <label className="volume-slider">

                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.01"
                                            onChange={handleVolumeChange}
                                            defaultValue="1"
                                        />
                                    </label>

                                    <div className="close-button" onClick={() => setOpenVolume(false)}>
                                        X
                                    </div>
                                </div>
                            </div>
                            </>
                    )}

                            <img
                                onMouseOver={() => setOver6(true)}
                                onMouseOut={() => setOver6(false)}
                                src={over6 ? difficultyButtonImageHover : difficultyButtonImage}
                                alt="Difficulty Button"
                                className={`difficulty-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={difficultyFunc}

                                width="230"
                            />

                            <img
                                onMouseOver={() => setOver3(true)}
                                onMouseOut={() => setOver3(false)}
                                src={over3 ? volumeButtonImageHover : volumeButtonImage}
                                alt="Volume Button"
                                className={`volume-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={volumeFunc}
                                width="230"
                            />
                            <img
                                onMouseOver={() => setOver4(true)}
                                onMouseOut={() => setOver4(false)}
                                src={over4 ? backButtonImageHover : backButtonImage}
                                className={`back-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={goBack}
                                width="230"
                            />
                        </>
                    )}

                    {isPlayOpen && (
                        <>
                            <img
                                onMouseOver={() => setOver5(true)}
                                onMouseOut={() => setOver5(false)}
                                src={over5 ? trialsButtonImageHover : trialsButtonImage}
                                alt="Trials Button"
                                className={`trials-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={goToTrials}
                                width="230"
                            />
                            <img
                                onMouseOver={() => setOver4(true)}
                                onMouseOut={() => setOver4(false)}
                                src={over4 ? backButtonImageHover : backButtonImage}
                                alt="Back Button"
                                className={`back-button button ${animateEnter ? 'enter' : ''} ${animateExit ? 'exit' : ''}`}
                                onClick={goBack}
                                width="230"
                            />
                        </>
                    )}

                    {isDifficultyModalOpen && (
                        <div className="modal-overlay">
                            <div className="difficulty-modal">
                                <div className="difftext">SELECT DIFFICULTY</div>

                                <button
                                    onClick={() => {
                                        setDifficulty('easy');
                                    }}
                                    className={`difficulty-option ${difficulty === 'easy' ? 'selected' : ''}`}
                                >
                                    Piss Easy Idiot Baby Brainlet Loser Freebie Noob Mode
                                </button>
                                <button
                                    onClick={() => {
                                        setDifficulty('normal');
                                    }}
                                    className={`difficulty-option ${'norm'} ${difficulty === 'normal' ? 'selected' : ''}`}
                                >
                                    Normal Mode
                                </button>
                                <div className="close-button" onClick={() => setIsDifficultyModalOpen(false)}>
                                    X
                                </div>
                            </div>
                        </div>
                    )}


                    <div className={`flash ${flashExit ? 'exit' : ''}`}></div>
                </div>
            </div>
        );
    }

}

export default Menu;
