// src/components/games/HowToMath/hooks/useGameLogic.js

import { useState, useEffect, useRef } from 'react';

export function useGameLogic(questions, onGameEnd) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(50);
    const [score, setScore] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        startTimer();

        return () => {
            clearInterval(timerRef.current);
        };
    }, [currentQuestionIndex]);

    const startTimer = () => {
        setTimeLeft(50);
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timerRef.current);
                    handleSubmitAnswer('');
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);
    };

    const handleSubmitAnswer = (userAnswer) => {
        const currentQuestion = questions[currentQuestionIndex];
        if (userAnswer.trim() === currentQuestion.answer) {
            setScore((prevScore) => prevScore + 1);
        }
        clearInterval(timerRef.current);

        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            onGameEnd({ score, total: questions.length });
        }
    };

    return {
        currentQuestion: questions[currentQuestionIndex],
        timeLeft,
        score,
        handleSubmitAnswer,
    };
}
