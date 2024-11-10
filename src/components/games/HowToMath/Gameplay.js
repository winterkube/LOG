import React, { useState, useEffect, useRef } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import './HowToMath.css';
import './styles/Gameplay.css';

function Gameplay({ levelData, onGameEnd, inGame}) {
    // State for user input and component animations
    // const [userAnswer, setUserAnswer] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [isEnding, setIsEnding] = useState(false);


    // Function to handle the end of the game
    const handleGameEnd = (performanceData) => {

        setIsEnding(true);
        setTimeout(() => {
            audioRef.current.pause();
            onGameEnd({...performanceData, levelNumber: levelData.levelNumber });
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
    } = useGameLogic(levelData, levelData.questions, handleGameEnd, 2); // Start delay of 1.5 seconds

    // Mounting effect for animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (audioRef.current) {
            if (isPaused) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    }, [isPaused]);

    // Audio reference and effect to play level music
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(levelData.song);

        if (inGame) {

            audioRef.current.loop = false;
            audioRef.current.volume = 0.6;
            audioRef.current.load();
            setTimeout(function() {

                audioRef.current.play();
            }, 2000 - levelData.offset);

        } else {
            audioRef.current.pause();
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };

    }, [levelData.song]);

    function renderQuestion(question) {
        const elements = [];
        let i = 0;
        let len = question.length;

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
                        while (i < len && /\w/.test(question[i]) || question[i] === '-') {
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
            } else {
                elements.push(question[i]);
                i++;
            }
        }
        return elements;
    }

    const handleRetry = () => {
        setIsPaused(false);
        onGameEnd({ action: 'retry' }); // Pass an action to restart the level
    };

    // Function to handle 'Menu' action
    const handleMenu = () => {
        setIsPaused(false);
        onGameEnd({ action: 'menu' }); // Pass an action to go back to level select
    };

    const varPlaceholder = () => {
        if (!currentQuestion.question.includes('?') && currentQuestion.question !== '...') {
            return `${currentVar} = ?`
        }
        if (currentQuestion.question === '...') {
            return "Grading..."
        }
    }


    return (

        <div className={`game-play ${isMounted ? 'lvl-fade-in' : ''} ${isEnding ? 'lvl-fade-out' : ''}`}>

            <div className={`gp-background ${isPaused ? 'paused' : ''}`}> </div>

            {isReady && currentQuestion ? (
                <>


                    <button className="pause-button" onClick={() => setIsPaused(true)}>
                        | |
                    </button>

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

                    <div className={`not-pause ${isPaused ? 'paused' : ''}`}>
                        {/* Question Timer Bar */}
                        <div className={`timer-bar`}>
                            <div
                                className="timer-progress"
                                style={{
                                    width: `${(timeLeft / currentQuestion.time) * 100}%`,
                                }}
                            ></div>
                        </div>
                        {/* Question and Answer Input */}
                        <div className={`question-container`}>
                            {!isEnding ? (
                                <h2><sup></sup> {renderQuestion(currentQuestion.question)}</h2>
                            ) : (
                                <h2><sup></sup> ... <sup></sup></h2>
                            )}

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
                                score: {Math.round(score * 100) / 100} <br/>
                                time: {Math.round(timeLeft * 10) / 10} <br/>

                            </p>


                        </div>
                    </div>



                </>
            ) : (
                <>

                    {!isEnding && (
                        <>
                            <button className="pause-button" onClick={() => setIsPaused(true)}>
                                | |
                            </button>

                            {/* Pause Modal */}
                            {isPaused && (
                                <div className="pause-modal">
                                    <div className="pause-modal-content">
                                        <h3>Paused</h3>
                                        <button onClick={() =>
                                            setIsPaused(false)

                                        }>Resume
                                        </button>
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
                        {!isEnding ? (
                            <h2><sup></sup>{currentQuestion.question}</h2>

                        ) : (
                            <h2><sup></sup> ... <sup></sup></h2>
                        )}

                        <input autoFocus={true} className="input"
                               placeholder="GET READY..."
                               type="text"
                               value={userAnswer}
                               maxLength="15"
                        />
                        <p>
                            score: {score} <br/>
                            time: {Math.ceil(timeLeft * 10) / 10}
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

export default Gameplay;
