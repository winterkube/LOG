import React, { useState, useEffect, useRef } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import './HowToMath.css';
import './styles/Gameplay.css';
import ReactPlayer from 'react-player'
import trialBox from "./assets/trial box.png";
import trialBoxLocked from "./assets/trial box locked.png";
import trialBoxHover from "./assets/trial box hover.png";
import crumpledPaper from "./assets/crumpled paper.png";

import introTrialVideo from "./assets/vids/introTrialVid.mp4"

function Gameplay({ levelData, onGameEnd, inGame, difficulty}) {
    // State for user input and component animations
    // const [userAnswer, setUserAnswer] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [isEnding, setIsEnding] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoPlayerRef = useRef(null);

    const questions = difficulty === 'easy' ? levelData.easyQuestions : levelData.questions;

    function preloadVideos(videoArray, onProgress, onComplete) {
        let loadedVideos = 0;
        const totalVideos = videoArray.length;

        videoArray.forEach((src) => {
            const video = document.createElement('video');
            video.src = src;
            video.preload = 'auto';
            video.muted = false; // Mute the video to allow autoplay in some browsers

            // Event listener for when the video can play through
            const handleCanPlayThrough = () => {
                loadedVideos++;
                onProgress && onProgress(loadedVideos / totalVideos);

                if (loadedVideos === totalVideos) {
                    onComplete && onComplete();
                }

                // Clean up event listeners
                video.removeEventListener('canplaythrough', handleCanPlayThrough);
                video.removeEventListener('error', handleError);
            };

            const handleError = (e) => {
                console.error(`Failed to preload video: ${src}`, e);
                loadedVideos++;
                onProgress && onProgress(loadedVideos / totalVideos);

                if (loadedVideos === totalVideos) {
                    onComplete && onComplete();
                }

                // Clean up event listeners
                video.removeEventListener('canplaythrough', handleCanPlayThrough);
                video.removeEventListener('error', handleError);
            };

            video.addEventListener('canplaythrough', handleCanPlayThrough);
            video.addEventListener('error', handleError);

            // Start loading the video
            video.load();
        });
    }
    const [videoLoadingProgress, setVideoLoadingProgress] = useState(0);
    const [videoPreloaded, setVideoPreloaded] = useState(false);

    useEffect(() => {
        if (levelData.video) {
            preloadVideos(
                [levelData.video.url],
                (progress) => {
                    setVideoLoadingProgress(progress);
                },
                () => {
                    setVideoPreloaded(true);
                    console.log('Video is preloaded');
                }
            );
        } else {
            // No video to preload
            setVideoPreloaded(true);
        }
    }, [levelData.video]);



    useEffect(() => {
        if (levelData.video) {
            if (videoPreloaded) {
                setAssetsLoaded(true);
            }
        } else {
            setAssetsLoaded(true);
        }
    }, [videoPreloaded,  levelData.video]);

    // Function to handle the end of the game
    const handleGameEnd = (performanceData) => {

        setIsEnding(true);
        setTimeout(() => {
            // audioRef.current.pause();
            onGameEnd({...performanceData, levelNumber: levelData.levelNumber});
        }, 3000); // Duration of fade-out animation
    };

    // Destructure variables returned by useGameLogic
    const {
        currentQuestion,
        timeLeft,
        score,
        isReady,
        userAnswer,
        setUserAnswer,
        feedbackMessage,
        wait,
        isPaused,
        setIsPaused,
        currentVar,
        restartLevel,
    } = useGameLogic(levelData, questions, handleGameEnd, 2, difficulty); // Start delay of 1.5 seconds

    // Mounting effect for animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // If the user is paused or if there's no video, skip scheduling
        if (!levelData.video || isPaused) return;

        const videoStartTime = levelData.video.offset;
        const handle = setTimeout(() => {
            setVideoPlaying(true);
        }, videoStartTime);

        return () => {
            clearTimeout(handle);
            setVideoPlaying(false);
        };
    }, [isPaused, levelData.video]);

    // Audio reference and effect to play level music
    // const audioRef = useRef(null);

    // state variable to store the timer (or a ref)
    const videoStartTimerRef = useRef(null);

    useEffect(() => {
        if (inGame && levelData.video) {
            // If there's an offset for the video
            const videoStartTime = levelData.video.offset;

            // Only schedule the video if we're not already paused
            if (!isPaused) {
                videoStartTimerRef.current = setTimeout(() => {
                    // If at this moment, we are still not paused
                    if (!isPaused) {
                        setVideoPlaying(true);
                    }
                }, videoStartTime);
            }
        }

        return () => {
            // Clean up any timer
            if (videoStartTimerRef.current) {
                clearTimeout(videoStartTimerRef.current);
                videoStartTimerRef.current = null;
            }
        };
    }, [inGame, levelData.video, isPaused]);


    function notLong(name) {
        return (name.length <= 30);
    }

    function renderQuestion(question) {
        const elements = [];
        let i = 0;
        let len = question.length;

        if (levelData.levelNumber === 4 && currentQuestion.question === levelData.questions[4].question) {
            elements.push('‎');
            // elements.push('3 + x = 7');
            elements.push(<h4>3 + ‎ ‎‎ ‎ = </h4>);
            elements.push(<h5>?</h5>);
            elements.push(<h6>7</h6>);
            elements.push(<h7>x</h7>);
            return elements;
        }

        // if (levelData.levelNumber === 4 && currentQuestion.question === levelData.questions[27].question) {
        //     // elements.push('‎');
        //     elements.push('5y - y = 2');
        //     elements.push(<h4>5</h4>);
        //     elements.push(<h4>5</h4>);
        //
        //     return elements;
        // }

        while (i < len) {
            if (question[i] === '^') {
                // Exponent detected
                // Check if there is a base character
                if (elements.length > 0) {
                    const base = elements.pop();
                    i++; // Move past '^'
                    let exponent = '';
                    if (question[i] === '{') {
                        // Collect until '}'
                        i++; // Skip '{'
                        while (i < len && question[i] !== '}') {
                            exponent += question[i];
                            i++;
                        }
                        i++; // Skip '}'
                    } else {
                        // Collect consecutive alphanumeric characters
                        while (i < len && /\w/.test(question[i]) || question[i] === '-' || question[i] === '.') {
                            exponent += question[i];
                            i++;
                        }
                    }
                    elements.push(base);
                    elements.push(<sup key={i}>{exponent}</sup>);
                } else {
                    // No base character, treat '^' as regular character
                    elements.push('^');
                    i++;
                }
            } else if (question[i] === 's' && question[i + 1] === 'q') {
                //sqrt detected

                const base = elements.pop();
                i += 4; // Move past 'sqrt'
                let sqrt = '';

                // Collect consecutive alphanumeric characters
                while (i < len && /\w/.test(question[i]) || question[i] === '-' || question[i] === '.') {
                    sqrt += question[i];
                    i++;
                }

                elements.push(base);
                elements.push('√' + sqrt);

            } else if (question[i] === 'l' && question[i + 1] === 'o') {
                // log detected

                let base = '';
                i += 3; // Move past 'log'
                let log = '';

                // Collect consecutive alphanumeric characters
                while ((i < len && /\w/.test(question[i]) || question[i] === '-' || question[i] === '.') && question[i] !== '(') {
                    base += question[i];
                    i++;
                }
                i++; // move past (
                while ((i < len && /\w/.test(question[i]) || question[i] === '-' || question[i] === '.') && question[i] !== ')') {
                    log += question[i];
                    i++;
                }
                i++;

                elements.push('log');
                elements.push(<sub key={i}> {base} </sub>);
                elements.push(log);

            } else {
                elements.push(question[i]);
                i++;
            }
        }
        return elements;
    }

    const handleRetry = () => {
        restartLevel();
        setIsPaused(false);
        onGameEnd({action: 'retry'}); // Pass an action to restart the level
    };

    // Function to handle 'Menu' action
    const handleMenu = () => {
        setIsPaused(false);
        onGameEnd({action: 'menu'}); // Pass an action to go back to level select
    };

    const varPlaceholder = () => {
        if (!currentQuestion.question.includes('?') && currentQuestion.question !== '...') {
            return `${currentVar} = ?`
        }
        if (currentQuestion.question === '...') {
            return "Grading..."
        }
    }


    if (!assetsLoaded) {
        return (
            <>
                {!assetsLoaded && (
                    <div className="loading-screen">
                        <p>Loading...</p>
                    </div>
                )}
            </>
        );
    } else {
        return (

            <div className={`game-play ${isMounted ? 'lvl-fade-in' : ''} ${isEnding ? 'lvl-fade-out' : ''}`}>


                <div className={`gp-background ${isPaused ? 'paused' : ''}`}>

                    {levelData.video ? (
                        <ReactPlayer
                            className="video-background"
                            url={levelData.video.url}
                            playing={videoPlaying}
                            loop={false}
                            muted={false}
                            volume={levelData.video.volume}
                            width="100%"
                            height="100%"
                            style={{position: 'absolute', top: 0, left: 0}}
                        />
                    ) : (
                        <img src={require('./assets/tempbg.png')} alt="Background" className="image-background"
                             style={{opacity: 0}}/>
                    )}
                </div>

                {isReady && currentQuestion ? (
                    <>


                        {currentQuestion.question !== '...' && (
                            <button className="pause-button" onClick={() => setIsPaused(true)}>
                                | |
                            </button>
                        )}


                        {/* Pause Modal */}
                        {isPaused && (
                            <div className="pause-modal">
                                <div className="pause-modal-content">
                                    <h3>Paused</h3>
                                    <button onClick={() => setIsPaused(false)}>Resume</button>
                                    <button onClick={handleRetry}>Retry</button>
                                    <button onClick={handleMenu}>Menu</button>
                                </div>
                            </div>
                        )}

                        <div
                            className={`not-pause ${isPaused ? 'paused' : ''} ${(levelData.levelNumber === 4 && currentQuestion.question === levelData.questions[4].question) ? 'inverse' : ''}`}>

                            <div className={`timer-bar`}>
                                <div
                                    className="timer-progress"
                                    style={{
                                        width: `${(timeLeft / currentQuestion.time) * 100}%`,
                                    }}
                                ></div>
                            </div>
                            {/* Question and Answer Input */}
                            <div className={`question-container `}>
                                <div className="question-bg">
                                    {!isEnding ? (   // first

                                        <h2 className={`ques ${notLong(currentQuestion.question) ? '' : 'long'}`}>
                                            <sup></sup>{renderQuestion(currentQuestion.question)}</h2>

                                    ) : (
                                        <h2><sup></sup> ... <sup></sup></h2>
                                    )}
                                </div>
                                {wait ? (
                                    <input autoFocus={true} className="input"
                                           type="text"
                                           placeholder={varPlaceholder()}
                                           value={userAnswer}
                                           maxLength="15"
                                           onChange={(e) => {
                                               setUserAnswer(e.target.value);

                                           }}
                                           onKeyDown={(e) => {
                                               if (e.repeat) {
                                                   e.preventDefault();
                                               }
                                           }}
                                           disabled={isPaused}
                                    />
                                ) : (
                                    <input
                                    />
                                )}

                                {feedbackMessage && (
                                    <div className="feedback-message"
                                         style={{
                                             opacity: `${(timeLeft / currentQuestion.time) * 3 - 0.5}`,
                                         }}
                                    >
                                        {feedbackMessage}
                                    </div>
                                )}
                                <p>
                                    <div className="score">
                                        score: <br/> <p> {Math.round(score * 100) / 100}</p>
                                    </div>

                                    <div className="time">
                                        {Math.round(timeLeft * 10) / 10} <br/>
                                    </div>


                                </p>


                            </div>
                        </div>


                    </>
                ) : ( // NOT READY
                    <>

                        {!isEnding && (
                            <>
                                <button className="pause-button" onClick={() => {
                                    setIsPaused(true);
                                    // audioRef.current.volume = 0;
                                }}>
                                    | |
                                </button>

                                {/* Pause Modal */}
                                {isPaused && (
                                    <div className="pause-modal">
                                        <div className="pause-modal-content">
                                            <h3>Paused</h3>
                                            <button onClick={handleRetry}>Retry</button>
                                            <button onClick={handleMenu}>Menu</button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        <div className={`not-pause ${isPaused ? 'paused' : ''}`}>

                            {/* Pre-Level Timer Fill-Up */}
                            <div className={`initial-timer-bar`}>
                                <div
                                    className="initial-timer-progress"
                                    style={{
                                        width: `${((1.5 - timeLeft) / 1.5) * 100}%`,
                                    }}
                                ></div>
                            </div>

                            <div className={`question-container ${isMounted ? 'lvl-slide-in' : ''}`}>
                                <div className="question-bg">
                                    {!isEnding ? ( // second
                                        <h2><sup></sup>{renderQuestion(questions[0].question)}</h2>
                                    ) : (
                                        <h2><sup></sup> ... <sup></sup></h2>
                                    )}
                                </div>
                                <input autoFocus={true} className="input"
                                       placeholder="GET READY..."
                                       type="text"
                                       value={userAnswer}
                                       maxLength="15"
                                />
                                <p>
                                    <div className="score">
                                        score: <br/> <p> {Math.round(score * 100) / 100}</p>
                                    </div>

                                    {/*time: {Math.ceil(timeLeft * 10) / 10}*/}
                                </p>

                            </div>
                            {/*<div className="get-ready">GET READY...</div>*/}
                        </div>

                        <script> isReady = true;</script>
                    </>

                )}
                <div className="song-title"> Song: {levelData.songTitle}</div>

            </div>
        );
    }
}

export default Gameplay;
