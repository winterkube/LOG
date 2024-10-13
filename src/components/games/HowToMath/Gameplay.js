import React, { useState, useEffect, useRef } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import './HowToMath.css';
import './styles/Gameplay.css';

function Gameplay({ levelData, onGameEnd }) {
    // State for user input and component animations
    // const [userAnswer, setUserAnswer] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [isEnding, setIsEnding] = useState(false);

    // Function to handle the end of the game
    const handleGameEnd = (performanceData) => {

        setIsEnding(true);
        setTimeout(() => {
            audioRef.current.pause();
            onGameEnd(performanceData);
        }, 2000); // Duration of fade-out animation
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
    } = useGameLogic(levelData.questions, handleGameEnd, 2.3); // Start delay of 1.5 seconds

    // Mounting effect for animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Audio reference and effect to play level music
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(levelData.song);
        audioRef.current.loop = false;
        audioRef.current.volume = 0.4;
        audioRef.current.load();
        setTimeout(function() {

                audioRef.current.play();
            }, 2300 - levelData.offset);


    }, [levelData.song]);


    return (

        <div className={`game-play ${isMounted ? 'lvl-fade-in' : ''} ${isEnding ? 'lvl-fade-out' : ''}`}>

            {isReady ? (
                <>
                    {/* Question Timer Bar */}
                    <div className="timer-bar">
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
                            <h2>{currentQuestion.question}
                                {/*timeLeft = {Math.ceil(timeLeft * 10) / 10}*/}
                            </h2>
                        ) : (
                            <h2> ... </h2>
                        )}

                        {wait ? (
                            <input autoFocus={true} className="input"
                                   type="text"
                                   value={userAnswer}
                                   maxLength="15"
                                   onChange={(e) => {
                                       setUserAnswer(e.target.value);

                                   }}
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
                            score: {score} <br/>
                            time: {Math.ceil(timeLeft * 10) / 10}
                        </p>


                    </div>

                </>
            ) : (
                <>

                    {/* Pre-Level Timer Fill-Up */}
                    <div className="initial-timer-bar">
                        <div
                            className="initial-timer-progress"
                            style={{
                                width: `${((1.5 - timeLeft) / 1.5) * 100}%`,
                            }}
                        ></div>
                    </div>

                    <div className={`question-container ${isMounted ? 'lvl-slide-in' : ''}`}>
                        {!isEnding ? (
                            <h2>{currentQuestion.question}</h2>
                        ) : (
                            <h2> ... </h2>
                        )}

                        <input autoFocus={true} className="input"
                               type="text"
                               value={userAnswer}
                               maxLength="15"
                        />
                        <p>
                            score: {score} <br/>
                            time: {Math.ceil(timeLeft * 10) / 10}
                        </p>

                    </div>
                    <div className="get-ready">GET READY...</div>

                    <script> isReady = true;</script>
                </>

            )}
            <div className="song-title"> Song: {levelData.songTitle}</div>

        </div>
    );
}

export default Gameplay;
