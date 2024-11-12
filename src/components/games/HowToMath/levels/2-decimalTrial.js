

import songFbHarmony from '../assets/music/fb-harmony.mp3';
import {randomNum1} from "../hooks/useGameLogic";

const bpm = 65.1;

export const decimalTrial = {
    levelNumber: 2,
    song: songFbHarmony,
    songTitle: 'ForeverBound - Harmony of the Heart',
    length: 78, // 78 seconds
    offset: 50,
    volume: 0.6,
    questions: [
        { question: '1 / 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '2 / 2 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1 / 2 = ?', answer: '0.5', time: (60 / bpm) * 4 },
        { question: '2 / 4 = ?', answer: '0.5', time: (60 / bpm) * 4 },

        { question: '0.5 + 0.5 = ?', answer: '1', time: (60 / bpm) * 2 },
        { question: '0.75 + 0.75 = ?', answer: '1.5', time: (60 / bpm) * 2 },
        { question: '1.1 + 2.2 = ?', answer: '3.3', time: (60 / bpm) * 2 },
        { question: '1.1 + 2.2 + 3.3 = ?', answer: '6.6', time: (60 / bpm) * 2 },

        { question: '1.5 * 1 = ?', answer: '1.5', time: (60 / bpm) * 2 },
        { question: '1.5 * 2 = ?', answer: '3', time: (60 / bpm) * 2 },
        { question: '0.5 * 2 = ?', answer: '1', time: (60 / bpm) * 2 },
        { question: '0.5 * 0.5 = ?', answer: '0.25', time: (60 / bpm) * 2 },



        { question: randomNum1(4).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: randomNum1(4).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: randomNum1(4).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: randomNum1(4).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},

        { question: '2' + ' * ' + ((Math.floor((Math.random()+1) * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: '3' + ' * ' + ((Math.floor((Math.random()+1) * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: '2' + ' * ' + ((Math.floor((Math.random()+2) * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 2,},

        { question: ((Math.floor((Math.random()+2.5) * 10))/10).toString() + ' / ' + '2' + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: ((Math.floor((Math.random()+5) * 10))/10).toString() + ' / ' + '4' + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: ((Math.floor((Math.random()+10) * 10))/10).toString() + ' / ' + '10' + ' = ?', answer: 'idk', time: (60 / bpm) * 2,},

        { question: randomNum1(3).toString() + ' + ' + randomNum1(3).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8,},
        { question: randomNum1(3).toString() + ' * ' + randomNum1(4).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 8,},

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
