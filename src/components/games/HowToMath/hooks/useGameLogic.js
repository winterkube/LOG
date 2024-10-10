import { useState, useEffect, useRef } from 'react';

export function useGameLogic(questions, onGameEnd, startDelay) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [timeLeft, setTimeLeft] = useState(startDelay);
    const [score, setScore] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [userSubmitted, setUserSubmitted] = useState(false);
    const [userAnswer, setUserAnswer] = useState('');

    const timerRef = useRef(null);

    useEffect(() => {
        // Generate the current question
        let questionData = questions[currentQuestionIndex];
        setCurrentQuestion(questionData);
        setUserSubmitted(false);
        setUserAnswer('');

        // Start initial timer
        setIsReady(false);
        setTimeLeft(startDelay);

        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0.1) {
                    clearInterval(timerRef.current);
                    setIsReady(true);
                    startQuestionTimer(questionData); // Pass questionData here
                    return 0;
                }
                return prevTime - 0.1;
            });
        }, 100);

        return () => {
            clearInterval(timerRef.current);
        };
    }, [currentQuestionIndex]);

    const startQuestionTimer = (questionData) => {
        const questionTime = questionData.time || 4; // default to 4 seconds
        setTimeLeft(questionTime);
        timerRef.current = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0.1) {
                    clearInterval(timerRef.current);
                    evaluateAnswer(questionData); // Pass questionData here
                    return 0;
                }
                return prevTime - 0.1;
            });
        }, 100);
    };

    const handleSubmitAnswer = (answer) => {
        if (!userSubmitted) {
            setUserAnswer(answer);
            setUserSubmitted(true);
        }
        // Do not proceed to next question until timer runs out
    };

    const evaluateAnswer = (questionData) => {
        const isCorrect = userAnswer.trim() === questionData.answer;
        if (isCorrect) {
            setScore((prevScore) => prevScore + 1);
        }
        if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            const finalScore = isCorrect ? score + 1 : score;
            onGameEnd({ score: finalScore, total: questions.length });
        }
    };

    return {
        currentQuestion,
        timeLeft,
        score,
        isReady,
        userSubmitted,
        handleSubmitAnswer,
    };
}
