import React, { useState, useEffect, useRef } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import './HowToMath.css';
import './styles/Gameplay.css';

function Gameplay({ levelData, onGameEnd }) {
    // State for user input and component animations
    const [userAnswer, setUserAnswer] = useState('');
    const [isMounted, setIsMounted] = useState(false);
    const [isEnding, setIsEnding] = useState(false);

    // Function to handle the end of the game
    const handleGameEnd = (performanceData) => {
        setIsEnding(true);
        setTimeout(() => {
            onGameEnd(performanceData);
        }, 1000); // Duration of fade-out animation
    };

    // Destructure variables returned by useGameLogic
    const {
        currentQuestion,
        timeLeft,
        score,
        isReady,
        userSubmitted,
        handleSubmitAnswer,
    } = useGameLogic(levelData.questions, handleGameEnd, 1.5); // Start delay of 3 seconds

    // Mounting effect for animations
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Audio reference and effect to play level music
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(levelData.song);
        audioRef.current.loop = false;
        audioRef.current.volume = 0.5;
        audioRef.current.play();

        // return () => {
        //     if (audioRef.current) {
        //         audioRef.current.pause();
        //         audioRef.current = null;
        //     }
        // };
    }, [levelData.song]);

    return (
        <div className={`game-play ${isMounted ? 'fade-in' : ''} ${isEnding ? 'fade-out' : ''}`}>
            {isReady && currentQuestion ? (
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
                    <div className={`question-container ${isMounted ? 'slide-in' : ''}`}>
                        <h2>{currentQuestion.question}</h2>
                        <input
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    handleSubmitAnswer(userAnswer);
                                    // Don't clear the answer to allow the user to see what they submitted
                                }
                            }}
                            disabled={userSubmitted}
                        />
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
                    <div className="get-ready">Get Ready!</div>
                </>
            )}
        </div>
    );
}

export default Gameplay;
