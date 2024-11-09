import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';


import { useState, useEffect, useRef } from 'react';
import { useTimer } from 'react-timer-hook';
import { evaluate, simplify, parse} from 'mathjs';

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
    const isPausedRef = useRef(false);
    const [_isPaused, _setIsPaused] = useState(false);

    let wait = true;
    const setUserAnswer = (answer) => {
        _setUserAnswer(answer);
        userAnswerRef.current = answer;
    };

    const setIsPaused = (paused) => {
        _setIsPaused(paused);
        isPausedRef.current = paused;
    };

    useEffect(() => {
        if (isPausedRef.current) {
            // Pause the timers
            if (timerRef.current) {
                clearInterval(timerRef.current);

            }
        } else {
            // Resume the timers
            if (!timerRef.current && isReady) {
                startQuestionTimer(currentQuestion);
            }
        }
    }, [isPausedRef.current]);


    useEffect(() => {
        // Start initial timer
        setIsReady(false);
        setUserAnswer('');
        setTimeLeft(startDelay);

    }, []);


    useEffect(() => {
        // Generate the current question
        let questionData = questions[currentQuestionIndex];

        if (!isReady) {
            setCurrentQuestion(questionData);
            setUserAnswer('');

            timerRef.current = setInterval(() => {

                setTimeLeft((prevTime) => {

                    if (prevTime <= 0) {
                        clearInterval(timerRef.current);

                        setIsReady(true);
                        startQuestionTimer(questionData); // Pass questionData here

                        return 0;
                    } else {
                        return prevTime - 0.01;
                    }

                });

            }, 10); // affects get ready timer
        } else {
            if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {
                let questionData = questions[currentQuestionIndex];
                setCurrentQuestion(questionData);
                _setUserAnswer('');
                userAnswerRef.current = '';
                startQuestionTimer(questionData);
            }
        }


        return () => {
            clearInterval(timerRef.current);
        };


    }, [currentQuestionIndex]);

    const startQuestionTimer = (questionData) => {

        let qTime = questionData.time;

        let testNum = 0;


        wait = false;
        setTimeout(()=>{
            wait = true;
        }, 100);

        const questionTime = qTime ||  4; // default to 4 seconds
        setTimeLeft(questionTime);

        timerRef.current = setInterval(() => {

            // if (!isPausedRef.current) {

                setTimeLeft((prevTime) => {

                    if (prevTime <= 0.01) {
                        clearInterval(timerRef.current);
                        // for some reason, everything in this if block runs twice
                        testNum += 3;

                        if (testNum === 3) { // segment ran once
                            evaluateAnswer(questionData, true); // Pass questionData here
                        } else {
                            evaluateAnswer(questionData, false); // Pass questionData here
                        }

                        return 0;
                    } else {
                        return prevTime - 0.01;
                    }

                });

        }, 10); // affects speed
    }

    // const evaluateAnswer = (questionData) => {
    //     console.log('Evaluating answer for question:', currentQuestionIndex);
    //
    //     let correctAnswer;
    //
    //     try {
    //
    //         // if (questionData.answer !== 'algebra') {
    //             // Default case, numerical expression like 1+1
    //             correctAnswer = evaluate(questionData.question.replace('= ?', ''));
    //         // }
    //
    //         // else if (questionData.type === 'hardcode') {
    //         //     // For hardcoded answers
    //         //     correctAnswer = questionData.answer;
    //         // // } else if (questionData.type === 'equation') {
    //         // //     // For algebraic equations, solve for x
    //         // //     const solutions = solve(questionData.question.replace(' = ?', ''), 'x');
    //         // //     // Assuming only one solution
    //         // //     correctAnswer = solutions[0];
    //         // }
    //         //  else {
    //         //     // Default case, numerical expression like 1+1
    //         //     correctAnswer = evaluate(questionData.question.replace('= ?', ''));
    //         //
    //         // }
    //
    //         correctAnswer = parseFloat(correctAnswer);
    //
    //         const userAnswer = userAnswerRef.current.trim();
    //
    //         // Convert fractional user answers to decimal
    //         let parsedUserAnswer;
    //         try {
    //             parsedUserAnswer = evaluate(userAnswer);
    //         } catch (e) {
    //             parsedUserAnswer = parseFloat(userAnswer);
    //         }
    //
    //         const isCorrect = Math.abs(parsedUserAnswer - correctAnswer) < 0.0001;
    //
    //         if (isCorrect) {
    //             if (currentQuestionIndex + 1 < questions.length) {
    //                 scoreRef.current += 0.5;
    //             }
    //
    //             setFeedbackMessage('Correct!');
    //         } else {
    //             setFeedbackMessage(
    //                 `Incorrect! (Answer: ${correctAnswer}), you answered ${userAnswerRef.current}`
    //             );
    //         }
    //
    //
    //         if (currentQuestionIndex + 2 < questions.length) {
    //             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    //         } else {
    //             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    //             setTimeout(() => {
    //                 onGameEnd({ score: scoreRef.current, total: questions.length - 1, levelNumber: levelData.levelNumber });
    //             }, 2000)
    //
    //         }
    //     } catch (error) {
    //         console.error('Error evaluating answer:', error);
    //         setFeedbackMessage('An error occurred while evaluating your answer.');
    //         // Move to next question or end game
    //         if (currentQuestionIndex + 2 < questions.length) {
    //             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    //         } else {
    //             setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    //             setTimeout(() => {
    //                 onGameEnd({ score: scoreRef.current, total: questions.length - 1, levelNumber: levelData.levelNumber });
    //             }, 2000)
    //
    //         }
    //     }
    // };

    const evaluateAnswer = (questionData, updateScore) => {

        let answer;

        if (questionData.question.includes('x')) {
            answer = questionData.answer;
        } else {
            answer = (Math.round(evaluate(questionData.question.replace(" = ?", "")) * 1000) / 1000).toString();

        }

         // convert the string to an equation the eval() function can understand, and solve (then round to nearest 0.01)


        const isCorrect = (userAnswerRef.current.trim() <= answer + 0.0001 && userAnswerRef.current.trim() >= answer - 0.0001) && userAnswerRef.current.trim() !== '';
        // answer will count as correct as long as its close enough to the answer

        if (isCorrect) {
            if (currentQuestionIndex + 1 < questions.length) {
                updateScore ? scoreRef.current += 1 : scoreRef.current += 0;

            }

            setFeedbackMessage('Correct!');
        } else {
            setFeedbackMessage(`Wrong... (Answer: ${answer})`);
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
        isPaused: _isPaused,
        setIsPaused,
    };
}
