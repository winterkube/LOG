// src/components/games/HowToMath/GamePlay.js

import React, { useState } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import './HowToMath.css';
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateArithmeticQuestion = (difficulty) => {
    const operations = ['+', '-', '*', '/'];
    const num1 = getRandomInt(1, 10 * difficulty);
    const num2 = getRandomInt(1, 10 * difficulty);
    const operation = operations[getRandomInt(0, operations.length)];

    let question = `${num1} ${operation} ${num2} = ?`;
    let answer;

    switch (operation) {
        case '+':
            answer = (num1 + num2).toString();
            break;
        case '-':
            answer = (num1 - num2).toString();
            break;
        case '*':
            answer = (num1 * num2).toString();
            break;
        case '/':
            answer = (num1 / num2).toFixed(2);
            break;
        default:
            break;
    }

    return { question, answer };
};

function Gameplay({ levelData, onGameEnd }) {
    const [userAnswer, setUserAnswer] = useState('');

    const {
        currentQuestion,
        timeLeft,
        score,
        handleSubmitAnswer,
    } = useGameLogic(levelData.questions, onGameEnd);

    return (
        <div className="game-play">
            <h2>{currentQuestion.question}</h2>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmitAnswer(userAnswer);
                        setUserAnswer('');
                    }
                }}
            />
            <div>Time Left: {timeLeft}s</div>
            <div>Score: {score}</div>
        </div>
    );
}

export default Gameplay;
