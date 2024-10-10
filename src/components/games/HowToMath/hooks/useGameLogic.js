

import { useState, useEffect, useRef } from 'react';

export function useGameLogic(questions, onGameEnd, startDelay) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [timeLeft, setTimeLeft] = useState(startDelay);
    const [score, setScore] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const scoreRef = useRef(0);
    const timerRef = useRef(4);
    const userAnswerRef = useRef('');
    const [_userAnswer, _setUserAnswer] = useState('');
    const setUserAnswer = (answer) => {
        _setUserAnswer(answer);
        userAnswerRef.current = answer;
    };


    useEffect(() => {
        // Start initial timer
        setIsReady(false);
        setUserAnswer('');
        setTimeLeft(startDelay);


    }, []);

    useEffect(() => {
        // Generate the current question
        let questionData = questions[currentQuestionIndex];
        setCurrentQuestion(questionData);


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

    // useEffect(() => {
    //     if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
    //         let questionData = questions[currentQuestionIndex];
    //         setCurrentQuestion(questionData);
    //         _setUserAnswer('');
    //         userAnswerRef.current = '';
    //         setFeedbackMessage('');
    //         startQuestionTimer(questionData);
    //     }
    // }, [currentQuestionIndex]);



    const startQuestionTimer = (questionData) => {

        let qTime = questionData.time;

        const questionTime = qTime ||  4; // default to 4 seconds
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
        }, 90);
    };

    const evaluateAnswer = (questionData) => {
        console.log('Evaluating answer for question:', currentQuestionIndex);
        const isCorrect = userAnswerRef.current.trim() === questionData.answer;
        if (isCorrect) {
            scoreRef.current += 1;
            setFeedbackMessage('Correct!');
        } else {
            setFeedbackMessage(
                `Incorrect! (Answer: ${questionData.answer}), you answered ${userAnswerRef.current}`
            );
        }


            if (currentQuestionIndex + 1 < questions.length) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {


                if (isCorrect) {
                    scoreRef.current += 1;
                    setFeedbackMessage('Correct!');
                } else {
                    setFeedbackMessage(
                        `Incorrect! (Answer: ${questionData.answer}), you answered ${userAnswerRef.current}`
                    );
                }

                onGameEnd({ score: scoreRef.current, total: questions.length });
            }

    };

    return {
        currentQuestion,
        timeLeft,
        score: scoreRef.current,
        isReady,
        userAnswer: _userAnswer,
        setUserAnswer,
        feedbackMessage,
    };
}
