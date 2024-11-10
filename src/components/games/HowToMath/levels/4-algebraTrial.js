

import songVindicateMe from '../assets/music/bgc-vindicateme.mp3';
import {randomNum1} from "./1-introTrial";

const bpm = 101;

export const algebraTrial = {
    levelNumber: 4,
    song: songVindicateMe,
    songTitle: 'BigGiantCircles - Vindicate Me',
    length: 99,
    offset: 1100,
    questions: [
        { question: randomNum1().toString() + ' + ' + randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1().toString() + ' + ' +  randomNum1().toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(1).toString() + ' + ' + randomNum1(2).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '3 + 7 = ?', answer: '10', time: (60 / bpm) * 4 },

        { question: '3 + x = 7', variable: 'x', answer: '4', time: (60 / bpm) * 3 },
        { question: '5 + x = 10', variable: 'x', answer: '5', time: (60 / bpm) * 4 },
        { question: '4 - x = 5', variable: 'x', answer: '-1', time: (60 / bpm) * 4 },
        { question: 'x * 5 = 15', variable: 'x', answer: '3', time: (60 / bpm) * 4 },
        { question: 'x + x = 2', variable: 'x', answer: '1', time: (60 / bpm) * 4 },
        { question: 'x * 10 = 100', variable: 'x', answer: '10', time: (60 / bpm) * 4 },
        { question: '3x = 15', variable: 'x', answer: '5', time: (60 / bpm) * 4 },
        { question: 'x / 2 = 4', variable: 'x', answer: '8', time: (60 / bpm) * 5 },

        { question: '2x + x + x = 40', variable: 'x', answer: '10', time: (60 / bpm) * 8 },
        { question: 'x / x + 12 - x = 4', variable: 'x', answer: '9', time: (60 / bpm) * 8 },

        { question: '3x - 3 = 3', variable: 'x', answer: '2', time: (60 / bpm) * 8 },
        { question: '2x + x - x + 2x = 4', variable: 'x', answer: '1', time: (60 / bpm) * 8 },

        { question: 'x + x = 24', variable: 'x', answer: '12', time: (60 / bpm) * 3 },
        { question: 'x + x + x = 24', variable: 'x', answer: '8', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x = 24', variable: 'x', answer: '6', time: (60 / bpm) * 4 },
        { question: 'x + x + x + x + x = 24', variable: 'x', answer: '4.8', time: (60 / bpm) * 5 },

        { question: randomNum1(2) + ' + 2x = ' + randomNum1(2), variable: 'x',  answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1(2) + 'x - 1 = ' + randomNum1(2), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },

        { question: randomNum1(4) + ' - x = ' + randomNum1(2), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },
        { question: randomNum1(4) + 'x = ' + randomNum1(), variable: 'x', answer: 'idk', time: (60 / bpm) * 8 },

        { question: randomNum1(2) + ' + ' + randomNum1(2) + ' + ' + randomNum1(2) + ' = x' , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: ' -' + randomNum1(2) + ' - ' + randomNum1(2) + ' - ' + randomNum1(2) + ' = x' , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(6) + 'x + ' + randomNum1(2) + ' = ' + randomNum1(7) + 'x' , variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(6) + 'x + ' + randomNum1(2) + ' = ' + randomNum1(7) + 'x' , variable: 'x', answer: 'idk', time: (60 / bpm) * 3 },
        { question: randomNum1(6) + 'y + ' + randomNum1(2) + ' = ' + randomNum1(7) + 'y' , variable: 'y', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(2) + ' + ' + randomNum1(6) + 'y = ' + randomNum1(7) + 'y' , variable: 'y', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(2) + ' + ' + randomNum1(6) + 'z' + ' = ' + randomNum1(7) + 'z' , variable: 'z', answer: 'idk', time: (60 / bpm) * 4 },
        { question: randomNum1(6) + 'z + ' + randomNum1(7) + 'z = ' + randomNum1(2) , variable: 'z', answer: 'idk', time: (60 / bpm) * 5 },

        { question: randomNum1(4) + ' = x + ' + randomNum1(4), variable: 'x', answer: 'idk', time: (60 / bpm) * 6 },
        { question: randomNum1(4) + ' = -a + ' + randomNum1(4), variable: 'a', answer: 'idk', time: (60 / bpm) * 6 },
        { question: randomNum1(4) + ' = b + ' + randomNum1(4) + 'b', variable: 'x', answer: 'idk', time: (60 / bpm) * 4 }, // 16

        { question: randomNum1() + ' = v / ' + randomNum1(), variable: 'v', answer: 'idk', time: (60 / bpm) * 3 },
        { question: randomNum1() + ' = 2M - M + ' + randomNum1(1), variable: 'M', answer: 'idk', time: (60 / bpm) * 5 }, // 16

        { question: 'p = ' + randomNum1(), variable: 'p', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 'i = ' + randomNum1(), variable: 'i', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 's = ' + randomNum1(1), variable: 's', answer: 'idk', time: (60 / bpm) * 1 }, // 8
        { question: 's = ' + randomNum1(1), variable: 's', answer: 'idk', time: (60 / bpm) * 1 },
        { question: 'x * x = 4', variable: 'x', answer: 'idk', time: (60 / bpm) * 4 },

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
