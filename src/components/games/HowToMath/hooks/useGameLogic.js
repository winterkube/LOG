import 'katex/dist/katex.min.css';


import {useEffect, useRef, useState} from 'react';
import {evaluate} from 'mathjs';
import 'algebra.js';
import {Equation} from "algebra.js";
import Fraction from 'fraction.js';

let Algebrite = require('algebrite')


let algebra = require('algebra.js');

Algebrite = require('algebrite')

// Algebrite.run('x + x') // => "2 x"
//
// Algebrite.factor('10!').toString() // => "2^8 3^4 5^2 7"
//
// Algebrite.eval('integral(x^2)').toString() // => "1/3 x^3"
export function useGameLogic(levelData, questions, onGameEnd, startDelay) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState('...');
    const [currentVar, setCurrentVar] = useState('x');
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

    const [randomNum, setRandomNum] = useState(0);

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
                timerRef.current = null; // Add this line
            }
        } else {
            // Resume the timers
            if (!timerRef.current && isReady) {
                startQuestionTimer(currentQuestion, true); // Pass true to indicate resume
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

    const startQuestionTimer = (questionData, resume = false) => {

        let qTime = questionData.time;

        let testNum = 0;


        wait = false;
        setTimeout(()=>{
            wait = true;
        }, 100);
        if (!resume) {
            const questionTime = qTime || 4; // default to 4 seconds
            setTimeLeft(questionTime);
        }

        timerRef.current = setInterval(() => {

            if (!isPausedRef.current) {

                setTimeLeft((prevTime) => {

                    if (prevTime <= 0.01) {
                        clearInterval(timerRef.current);
                        // for some reason, everything in this if block runs twice
                        testNum += 3;
                        timerRef.current = null; // Important to set to null
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
            }

        }, 10); // affects speed
    }

    const evaluateAnswer = (questionData, updateScore) => {

        let answer;

        if (!questionData.question.includes('?') && questionData.question.includes('^')) { // e.g. 2^x = 2
           answer = questionData.answer;
        } else if (!questionData.question.includes('?') && !questionData.question.includes('^')) {

            setCurrentVar(questionData.variable);

            // Solve the algebraic equation
            const equationStrWithFractions = convertDecimalsToFractions(questionData.question);

            const solutionStr = Algebrite.run(`roots(${equationStrWithFractions}, ${questionData.variable})`);
            // Parse the solution string into an array
            const solutions = parseAlgebriteSolutions(solutionStr);

            if (!solutions || solutions.length === 0) {
                throw new Error('Could not solve the equation.');
            }

            // Take the first solution (you can handle multiple solutions if needed)
            const answerValue = Algebrite.run(`float(${solutions[0]})`);
            answer = (Math.round(parseFloat(answerValue) * 1000) / 1000).toString();
        } else {
            answer = (Math.round(evaluate(questionData.question.replace(" = ?", "")) * 1000) / 1000).toString();

        }

         // convert the string to an equation the eval() function can understand, and solve (then round to nearest 0.01)


        const userAnswer = userAnswerRef.current.trim();
        const isCorrect =
            Math.abs(parseFloat(userAnswer) - parseFloat(answer)) < 0.0001 &&
            userAnswer !== '';// answer will count as correct as long as its close enough to the answer

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

    function splitQuestion(question) {
        const parts = question.split('=');

        if (parts.length !== 2) {
            throw new Error('Invalid equation format');
        }

        const lhs = algebra.parse(parts[0].trim());
        const rhs = algebra.parse(parts[1].trim());

        return new Equation(lhs, rhs);
    }

    function parseAlgebriteSolutions(solutionStr) {
        // Remove braces and split by commas
        const cleanedStr = solutionStr.replace(/[\{\}]/g, '');
        const solutionsArray = cleanedStr.split(',');

        return solutionsArray.map((sol) => sol.trim());
    }

    function convertDecimalsToFractions(equationStr) {
        // Regular expression to match decimal numbers
        const decimalRegex = /(\d+\.\d+)/g;

        // Replace each decimal number with its fraction equivalent
        return equationStr.replace(decimalRegex, (match) => {
            const frac = new Fraction(match);
            return frac.toFraction();
        });
    }

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
        currentVar,
    };
}
