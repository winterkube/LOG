

import { useState, useEffect, useRef } from 'react';

export function useGameLogic(levelData, questions, onGameEnd, startDelay) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState('...');
    const [timeLeft, setTimeLeft] = useState(startDelay);
    const [score, setScore] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const scoreRef = useRef(0);
    const timerRef = useRef(4);
    const userAnswerRef = useRef('');
    const [_userAnswer, _setUserAnswer] = useState('');
    let wait = true;
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
        setUserAnswer('');

        timerRef.current = setInterval(() => {

            setTimeLeft((prevTime) => {
                if (prevTime <= 0.01) {
                    clearInterval(timerRef.current);

                    setIsReady(true);
                    startQuestionTimer(questionData); // Pass questionData here
                    return 0;
                }
                return prevTime - 0.01;
            });

        }, 10); // affects get ready timer


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

        wait = false;
        setTimeout(()=>{
            wait = true;
        }, 100);

        const questionTime = qTime ||  4; // default to 4 seconds
        setTimeLeft(questionTime);
        timerRef.current = setInterval(() => {


            setTimeLeft((prevTime) => {
                if (prevTime <= 0.01) {

                    clearInterval(timerRef.current);
                    evaluateAnswer(questionData); // Pass questionData here
                    return 0;
                }
                return prevTime - 0.01;
            });
        }, 10); // affects speed
    }

    const evaluateAnswer = (questionData) => {
        console.log('Evaluating answer for question:', currentQuestionIndex);

        let answer = questionData.answer;

        if (questionData.answer === 'idk') {
            answer = (Math.round(eval(questionData.question.replace(" = ?", "")) * 1000) / 1000).toString();
        }

        const isCorrect = userAnswerRef.current.trim() <= answer + 0.001 && userAnswerRef.current.trim() >= answer - 0.001;

        if (isCorrect) {
            if (currentQuestionIndex + 1 < questions.length) {
                scoreRef.current += 0.5;
            }

            setFeedbackMessage('Correct!');
        } else {
            setFeedbackMessage(
                `Incorrect! (Answer: ${answer}), you answered ${userAnswerRef.current}`
            );
        }


            if (currentQuestionIndex + 2 < questions.length) {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
            } else {
                setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
                setTimeout(() => {
                    onGameEnd({ score: scoreRef.current, total: questions.length - 1, levelNumber: levelData.levelNumber });
                }, 2000)

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
        wait,
    };
}
