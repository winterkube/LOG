import 'katex/dist/katex.min.css';


import {useEffect, useRef, useState} from 'react';
import {evaluate} from 'mathjs';
import 'algebra.js';
import {Equation} from "algebra.js";
import Fraction from 'fraction.js';
import cloneDeep from 'lodash/cloneDeep';

let Algebrite = require('algebrite')


let algebra = require('algebra.js');

Algebrite = require('algebrite')

// Algebrite.run('x + x') // => "2 x"
//
// Algebrite.factor('10!').toString() // => "2^8 3^4 5^2 7"
//
// Algebrite.eval('integral(x^2)').toString() // => "1/3 x^3"

let randomNumCounter = 0;

export const randomNum1 = (what) => {
    randomNumCounter += 1;
    return `__RANDOM_NUM1_${what || 'default'}_${randomNumCounter}__`;
};

export function useGameLogic(levelData, questions, onGameEnd, startDelay, assetsLoaded, canStart) {

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


    let wait = true;
    const setUserAnswer = (answer) => {
        _setUserAnswer(answer);
        userAnswerRef.current = answer;
    };

    const setIsPaused = (paused) => {
        _setIsPaused(paused);
        isPausedRef.current = paused;
    };

    const [processedQuestions, setProcessedQuestions] = useState([]);
    const [levelRestartCount, setLevelRestartCount] = useState(0);

    // Function to restart the level
    const restartLevel = () => {
        // Reset necessary state variables
        setCurrentQuestionIndex(0);
        scoreRef.current = 0;
        setFeedbackMessage('');
        // Increment level restart count to trigger re-randomization
        setLevelRestartCount((prevCount) => prevCount + 1);
    };

    useEffect(() => {
        // Reset randomNumCounter before processing
        randomNumCounter = 0;

        // Clone the questions to avoid mutating the original data
        const clonedQuestions = cloneDeep(questions);

        // Process each question to replace placeholders with random numbers
        const newQuestions = clonedQuestions.map((questionData) => {
            const newQuestionData = { ...questionData };
            newQuestionData.question = replacePlaceholdersWithRandomNumbers(questionData.question);
            return newQuestionData;
        });

        setProcessedQuestions(newQuestions);
    }, [levelRestartCount]);

    function replacePlaceholdersWithRandomNumbers(questionString) {
        // Replace placeholders for 'what' === '' (default)
        questionString = questionString.replace(/__RANDOM_NUM1_default_\d+__/g, () => {
            return Math.round(Math.random() * 8 + 0.5).toString(); // num between 1-9
        });

        // Replace placeholders for 'what' === 1
        questionString = questionString.replace(/__RANDOM_NUM1_1_\d+__/g, () => {
            return (Math.round(Math.random() * 10) + 5).toString(); // num between 5-14
        });

        // Replace placeholders for 'what' === 2
        questionString = questionString.replace(/__RANDOM_NUM1_2_\d+__/g, () => {
            return (Math.round(Math.random() * 7) + 2).toString(); // num between 2-8
        });

        // Replace placeholders for 'what' === 3
        questionString = questionString.replace(/__RANDOM_NUM1_3_\d+__/g, () => {
            return (Math.round((Math.random() + 0.10) * 100) / 100).toString(); // num between 0.10-1.00
        });

        // Replace placeholders for 'what' === 4
        questionString = questionString.replace(/__RANDOM_NUM1_4_\d+__/g, () => {
            return (Math.round((Math.random() + 0.10) * 10) / 10).toString(); // num between 0.1-1.0
        });

        // Replace placeholders for 'what' === 5
        questionString = questionString.replace(/__RANDOM_NUM1_5_\d+__/g, () => {
            return (Math.round(Math.random() * 2) + 7).toString(); // num between 7-9
        });

        // Replace placeholders for 'what' === 6
        questionString = questionString.replace(/__RANDOM_NUM1_6_\d+__/g, () => {
            return ((Math.round(Math.random() * 5) + 1) * 2 + 1).toString(); // odd num between 3-11
        });

        // Replace placeholders for 'what' === 7
        questionString = questionString.replace(/__RANDOM_NUM1_7_\d+__/g, () => {
            return ((Math.round(Math.random() * 5) + 1) * 2).toString(); // even num between 2-10
        });

        // Handle any remaining default placeholders
        questionString = questionString.replace(/__RANDOM_NUM1_\d+__/g, () => {
            return Math.round(Math.random() * 8 + 0.5).toString(); // num between 1-9
        });

        return questionString;
    }




    useEffect(() => {
        if (isPausedRef.current || !assetsLoaded) {
            // Pause the timers
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null; // Add this line
            }
        } else {
            // Resume the timers
            if (!timerRef.current && isReady && assetsLoaded ) {
                startQuestionTimer(currentQuestion, true); // Pass true to indicate resume
            }
        }
    }, [isPausedRef.current]);

    // const [randomNum, setRandomNum] = useState(0);
    useEffect(() => {
        if (!assetsLoaded) return;    // wait for the video to be ready

        if (assetsLoaded) {

            setIsPaused(false);

            setIsReady(false);
            setUserAnswer('');
            setTimeLeft(startDelay);
        }
        // If you start your get-ready countdown here, do so now.
    }, [assetsLoaded]);



    useEffect(() => {
        let questionData = questions[currentQuestionIndex];
        if (processedQuestions.length === 0) {
            // processedQuestions is not yet populated, wait until it is
            return;
        } else {
            questionData = processedQuestions[currentQuestionIndex];
        }
        // Generate the current question

        if (!isReady) {

            setCurrentQuestion(questionData);
            setUserAnswer('');

            if (!isPausedRef.current && assetsLoaded) {
                setTimeLeft(startDelay);
            }

            timerRef.current = setInterval(() => {
                if (!isPausedRef.current && assetsLoaded ) {
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
                }

            }, 10); // affects get ready timer
        } else {
            if (currentQuestionIndex >= 0 && currentQuestionIndex < questions.length) {


                let questionData = processedQuestions[currentQuestionIndex];
                setCurrentQuestion(questionData);
                _setUserAnswer('');
                userAnswerRef.current = '';

                if (!questionData.question.includes('?')) {
                    setCurrentVar(questionData.variable);
                }

                startQuestionTimer(questionData);
            }
        }


        return () => {
            clearInterval(timerRef.current);
        };


    }, [currentQuestionIndex, processedQuestions]);

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

            if (!isPausedRef.current && assetsLoaded) {

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
        } else if (questionData.question.includes('log')) {
            answer = questionData.answer;
        } else if (!questionData.question.includes('?') && !questionData.question.includes('^')) {



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
            if (answer === 'NaN') {
                answer = questionData.answer;
            }
        } else {
            answer = (Math.round(evaluate(questionData.question.replace(" = ?", "")) * 1000) / 1000).toString();

        }

         // convert the string to an equation the eval() function can understand, and solve (then round to nearest 0.01)
        if (answer === 'NaN') {
            answer = questionData.answer;
        }

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
        setIsReady,
        isReady,
        userAnswer: _userAnswer,
        setUserAnswer,
        feedbackMessage,
        wait,
        isPaused: _isPaused,
        setIsPaused,
        currentVar,
        restartLevel,
        setCurrentQuestionIndex, // Expose the setter
    };
}
