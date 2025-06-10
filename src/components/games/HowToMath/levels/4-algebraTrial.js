

import songVindicateMe from '../assets/music/bgc-vindicateme.mp3';
import {randomNum1} from "../hooks/useGameLogic";

const bpm = 101.025;

function randomEq1(huh, vari) {
    if (huh === 1) {
        const variable = vari.toString();
        // Step 1: Choose a random integer solution x between 1 and 9
        const x = Math.floor(Math.random() * 9) + 1; // x ∈ [1, 9]
        // Step 2: Choose a random integer coefficient a between 1 and 5
        const a = Math.floor(Math.random() * 5) + 1; // a ∈ [1, 5]
        // Randomly decide if 'a' should be negative
        const aSign = Math.random() < 0.5 ? 1 : -1;
        const aCoeff = a * aSign;
        // Step 3: Choose a random integer constant b between -5 and 5
        let b = Math.floor(Math.random() * 11) - 5; // b ∈ [-5, 5]
        if (b === 0) {
            b++;
        }
        // Step 4: Calculate c = a * x + b
        const c = aCoeff * x + b;
        // Step 5: Construct the equation string
        let equation = '';
        // Handle coefficient 'aCoeff'
        if (aCoeff === 1) {
            equation += variable;
        } else if (aCoeff === -1) {
            equation += '-' + variable;
        } else {
            equation += aCoeff + variable;
        }
        // Handle constant 'b'
        if (b > 0) {
            equation += ' + ' + b;
        } else if (b < 0) {
            equation += ' - ' + Math.abs(b);
        }
        // If b === 0, do nothing
        // Add the equals sign and 'c'
        equation += ' = ' + c;
        return equation;
    } else if (huh === 2) {
        const variable = vari.toString();

        // Step 1: Choose a random integer solution x between 1 and 9
        const x = Math.floor(Math.random() * 6) + 1; // x ∈ [1, 6]

        // Step 2: Choose a random integer coefficient a between 1 and 4
        const a = Math.floor(Math.random() * 4) + 1; // a ∈ [1, 4]

        // Randomly decide if 'a' should be negative
        const aSign = Math.random() < 0.5 ? 1 : -1;
        const aCoeff = a * aSign;

        // Step 3: Choose a random integer constant b between -5 and 5
        let b = Math.floor(Math.random() * 9) - 4; // b ∈ [-4, 4]
        if (b === 0) {
            b++;
        }
        if (b === aCoeff) {
            b++;
        }
        // Step 4: Calculate c = a * x + b * x
        const c = aCoeff * x + b * x;

        // Step 5: Construct the equation string
        let equation = '';

        // Handle coefficient 'aCoeff'
        if (aCoeff === 1) {
            equation += variable;
        } else if (aCoeff === -1) {
            equation += '-' + variable;
        } else {
            equation += aCoeff + variable;
        }

        // Handle constant 'b'
        if (b > 0) {
            equation += ' + ' + b + variable;
        } else if (b < 0) {
            equation += ' - ' + Math.abs(b) + variable;
        }
        // If b === 0, do nothing

        // Add the equals sign and 'c'
        equation += ' = ' + c;

        return equation.toString();
    }

    return '1 + 1 = ?'; // default
}

export const algebraTrial = {
    levelNumber: 4,
    song: songVindicateMe,
    songTitle: 'BigGiantCircles - Vindicate Me',
    length: 99,
    offset: 1170,
    volume: 0.72,
    video: {
        url: require('../assets/vids/algebraTrialVid.mp4'),
        offset: 1390, // Offset in milliseconds (e.g., 1000ms = 1s)
        volume: 1
    },
    questions: [
        { question: (Math.round(Math.random() * 10)).toString() + ' + ' + (Math.round(Math.random() * 10)).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + ' + ' +  randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(1).toString() + ' + ' + randomNum1(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '3 + 7 = ?', answer: '10', time: (60 / bpm) * 3 },

        { question: '3 + x = 7', variable: 'x', answer: '4', time: (60 / bpm) * 4 },
        { question: '5 + x = 10', variable: 'x', answer: '5', time: (60 / bpm) * 4 },
        { question: '4 - x = 5', variable: 'x', answer: '-1', time: (60 / bpm) * 4 },
        { question: 'x + x = 2', variable: 'x', answer: '1', time: (60 / bpm) * 4 },
        { question: 'x * 10 = 100', variable: 'x', answer: '10', time: (60 / bpm) * 4 },
        { question: 'x * 5 = 15', variable: 'x', answer: '3', time: (60 / bpm) * 4 },
        { question: '3x = 15', variable: 'x', answer: '5', time: (60 / bpm) * 4 },
        { question: 'x / 2 = 4', variable: 'x', answer: '8', time: (60 / bpm) * 5 },

        { question: '2x + x + x = 40', variable: 'x', answer: '10', time: (60 / bpm) * 8 },
        { question: 'x / x + 2 - x = 4', variable: 'x', answer: '9', time: (60 / bpm) * 8 },

        { question: '3x - 3 = 3', variable: 'x', answer: '2', time: (60 / bpm) * 8 },
        { question: '2x + x - x + 2x = 4', variable: 'x', answer: '1', time: (60 / bpm) * 8 },

        { question: 'x + x = 24', variable: 'x', answer: '12', time: (60 / bpm) * 3 },
        { question: 'x + x + x = 24', variable: 'x', answer: '8', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x = 24', variable: 'x', answer: '6', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x + x = 24', variable: 'x', answer: '4.8', time: (60 / bpm) * 5 },

        { question: randomNum1(2) + ' + 2x = ' + randomNum1(2), variable: 'x',  answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1(2) + ' - x - 1 = ' + randomNum1(2), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },

        { question: randomNum1(4) + ' - x = ' + randomNum1(2), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1(4) + ' + x = ' + randomNum1(), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },

        { question: randomEq1(1,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomEq1(1,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomEq1(2,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 7 },
        { question: '5y - y = 2' , variable: 'y', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomEq1(2,'z'), variable: 'z', answer: 'idk', time: (60 / bpm) * 9 },

        { question: randomEq1(2,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 6 },
        { question: randomEq1(1,'a'), variable: 'a', answer: 'idk', time: (60 / bpm) * 5 },
        { question: randomEq1(1,'b'), variable: 'b', answer: 'idk', time: (60 / bpm) * 5 }, // 16

        { question: randomEq1(1,'v'), variable: 'v', answer: 'idk', time: (60 / bpm) * 3 },
        { question: randomEq1(2,'M'), variable: 'M', answer: 'idk', time: (60 / bpm) * 5 }, // 8

        { question: 'p = ' + randomNum1(), variable: 'p', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 'i = ' + randomNum1(), variable: 'i', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 's = ' + randomNum1(1), variable: 's', answer: 'idk', time: (60 / bpm) * 1 }, // 8
        { question: 's = ' + randomNum1(1), variable: 's', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 'x * x = 4', variable: '|x|', answer: '2', time: (60 / bpm) * 4 },

        { question: '(2z - 15y/z + x/x/x * 0.915) * 0 = x', variable: 'x', answer: '0', time: (60 / bpm) * 14 },


        {
            question: '...',
            answer: '.',
            time: 999,
        },
        // generateQuestion: () => {
        //     const num1 = Math.floor(Math.random() * 10);
        //     const num2 = Math.floor(Math.random() * 10);
        //     return {
        //         question: `${num1} + ${num2} = ?`,
        //         answer: (num1 + num2).toString(),
        //         time: 4, // Time in seconds
        //     };
        // },
        // Add more questions...
    ],
    easyQuestions: [
        { question: (Math.round(Math.random() * 10)).toString() + ' + ' + (Math.round(Math.random() * 10)).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + ' + ' +  randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(1).toString() + ' + ' + randomNum1(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '3 + 7 = ?', answer: '10', time: (60 / bpm) * 3 },

        { question: '3 + x = 7', variable: 'x', answer: '4', time: (60 / bpm) * 8 },
        { question: '5 + x = 10', variable: 'x', answer: '5', time: (60 / bpm) * 8 },
        { question: '4 - x = 5', variable: 'x', answer: '-1', time: (60 / bpm) * 8 },
        { question: 'x + x = 2', variable: 'x', answer: '1', time: (60 / bpm) * 8 },

        { question: '2x + x + x = 40', variable: 'x', answer: '10', time: (60 / bpm) * 16 },
        { question: '2x + x - x + 2x = 4', variable: 'x', answer: '1', time: (60 / bpm) * 16 },

        { question: 'x + x = 2', variable: 'x', answer: '1', time: (60 / bpm) * 3 },
        { question: 'x + x + x = 3', variable: 'x', answer: '1', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x = 2', variable: 'x', answer: '0.5', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x + x = 10', variable: 'x', answer: '2', time: (60 / bpm) * 5 },

        { question: randomNum1(2) + ' + 2x = ' + randomNum1(2), variable: 'x',  answer: 'idk', time: (60 / bpm) * 16 },
        { question: randomNum1(2) + ' - x - 1 = ' + randomNum1(2), variable: 'x', answer: 'idk', time: (60 / bpm) * 16 },

        { question: randomEq1(1,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomEq1(1,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomEq1(2,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 7 },
        { question: '5y - y = 2' , variable: 'y', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomEq1(2,'z'), variable: 'z', answer: 'idk', time: (60 / bpm) * 9 },

        { question: randomEq1(2,'x') , variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomEq1(1,'a'), variable: 'a', answer: 'idk', time: (60 / bpm) * 8 },

        { question: randomEq1(1,'v'), variable: 'v', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomEq1(2,'M'), variable: 'M', answer: 'idk', time: (60 / bpm) * 8 }, // 8

        { question: '(2z - 15y/z + x/x/x * 0.915) * 0 = x', variable: 'x', answer: '0', time: (60 / bpm) * 14 },


        {
            question: '...',
            answer: '.',
            time: 999,
        },
        // generateQuestion: () => {
        //     const num1 = Math.floor(Math.random() * 10);
        //     const num2 = Math.floor(Math.random() * 10);
        //     return {
        //         question: `${num1} + ${num2} = ?`,
        //         answer: (num1 + num2).toString(),
        //         time: 4, // Time in seconds
        //     };
        // },
        // Add more questions...
    ],
};
