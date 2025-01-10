

import songChipZeal from '../assets/music/bgc-chipzeal.mp3';
import {randomNum1} from "../hooks/useGameLogic";

const bpm = 171;

function randomNum2(what) {
    if (what === 0) {
        return Math.random() > 0.5 ? 1 : 10;
    }
    if (what === 1) {
        return Math.random() > 0.5 ? 1 : 100;
    }
    if (what === 2) {
        return Math.random() > 0.5 ? 1 : 0;
    }
    return Math.random() > 0.5 ? 1 : 10;
}

export const speedTrialI = {
    levelNumber: 3,
    song: songChipZeal,
    songTitle: 'BigGiantCircles - Chip Zeal',
    length: 99,
    offset: 1000,
    volume: 0.9,
    questions: [
        { question: '1' + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },

        { question: '1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '10 + 10 = ?', answer: '20', time: (60 / bpm) * 4 },
        { question: '1 + 10 + 1 = ?', answer: '12', time: (60 / bpm) * 4 },
        { question: '10 + 1 + 10 = ?', answer: '21', time: (60 / bpm) * 4 },
        { question: '1 * 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1 * 1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '1 + 1 * 1 + 1 = ?', answer: '3', time: (60 / bpm) * 4 },
        { question: '1 + 1 * 10 + 10 = ?', answer: '21', time: (60 / bpm) * 4 },

        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },


        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },

        { question: '11 + 11 = ?', answer: '22', time: (60 / bpm) * 4 },
        { question: '11 - 11 = ?', answer: '0', time: (60 / bpm) * 4 },
        { question: '11 * 11 = ?', answer: '121', time: (60 / bpm) * 4 },
        { question: '11 / 11 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1.1 + 1.1 = ?', answer: '2.2', time: (60 / bpm) * 4 },
        { question: '1.1 - 1.1 = ?', answer: '0', time: (60 / bpm) * 4 },
        { question: '1.1 * 1.1 = ?', answer: '1.21', time: (60 / bpm) * 4 },
        { question: '1.1 / 1.1 = ?', answer: '1', time: (60 / bpm) * 4 },

        { question: '1 * 2 * 3 = ?', answer: '6', time: (60 / bpm) * 8 },
        { question: '1 * 2 * 3 * 4 = ?', answer: '24', time: (60 / bpm) * 8 },
        { question: '1 * 2 * 3 * 4 * 5 = ?', answer: '120', time: (60 / bpm) * 8 },
        { question: '5! = ?', answer: '120', time: (60 / bpm) * 8 },

        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },


        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(0) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2(1) + ' + ' + randomNum2() + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },


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
        { question: '1' + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },

        { question: '1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '1 + 10 = ?', answer: '11', time: (60 / bpm) * 4 },
        { question: '1 + 1 + 1 = ?', answer: '3', time: (60 / bpm) * 4 },
        { question: '10 + 10 + 10 = ?', answer: '30', time: (60 / bpm) * 4 },
        { question: '1 * 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1 * 1 * 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '10 * 10 = ?', answer: '100', time: (60 / bpm) * 4 },
        { question: '1 + 10 + 1 = ?', answer: '12', time: (60 / bpm) * 4 },

        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },


        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2() + ' + ' + randomNum2() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },

        { question: '11 + 11 = ?', answer: '22', time: (60 / bpm) * 8 },
        { question: '11 - 11 = ?', answer: '0', time: (60 / bpm) * 8 },
        { question: '11 * 11 = ?', answer: '121', time: (60 / bpm) * 8 },
        { question: '11 / 11 = ?', answer: '1', time: (60 / bpm) * 8 },

        { question: '1 * 2 * 3 * 4 = ?', answer: '24', time: (60 / bpm) * 16 },
        { question: '1 * 2 * 3 * 4 * 5 = ?', answer: '120', time: (60 / bpm) * 16 },

        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: '1' + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + randomNum2(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8 },


        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(1) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2(0) + ' + ' + randomNum2(0) + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum2() + ' + ' + randomNum2(1) + ' + ' + randomNum2() + ' + ' + randomNum2(1) + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },


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
