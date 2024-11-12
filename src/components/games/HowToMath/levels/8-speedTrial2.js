

import songWormhole from '../assets/music/f777-wormhole.mp3';
import {randomNum1} from "./1-introTrial";

const bpm = 83.2;

export const speedTrialII = {
    levelNumber: 8,
    song: songWormhole,
    songTitle: 'F-777 - Wormhole To Somewhere',
    length: 99,
    offset: 0,
    volume: 0.55,
    questions: [
        { question: '2 + 22 + 2 = ?', answer: '26', time: (60 / bpm) * 8 },
        { question: '2^2 + 22^2 + 2^2 = ?', answer: 'asdf', time: (60 / bpm) * 8 },

        { question: '2^x = 2', answer: '1', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 4', answer: '2', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 8', answer: '3', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 16', answer: '4', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 32', answer: '5', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 64', answer: '6', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 128', answer: '7', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 256', answer: '8', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 512', answer: '9', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 1024', answer: '10', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 2048', answer: '11', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 4096', answer: '12', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 8192', answer: '13', variable: 'x', time: (60 / bpm) * 2 },
        { question: '2^x = 1', answer: '0', variable: 'x', time: (60 / bpm) * 1 },
        { question: '2^x = 0.5', answer: '-1', variable: 'x', time: (60 / bpm) * 1 },

        { question: '2 + 2 + 2 = ?', answer: 'idk', time: (60 / bpm) * 2 },
        { question: '2 - 2 - 2 = ?', answer: 'idk', time: (60 / bpm) * 1 },
        { question: '2 + 2 - 2 = ?', answer: 'idk', time: (60 / bpm) * 1 },

        { question: '22 + 22 + 22 = ?', answer: 'idk', time: (60 / bpm) * 2 },
        { question: '22 - 22 - 22 = ?', answer: 'idk', time: (60 / bpm) * 1 },
        { question: '22 + 22 - 22 = ?', answer: 'idk', time: (60 / bpm) * 1 },

        { question: '3^2 + 4^2 = ?', answer: 'idk', time: (60 / bpm) * 2 },
        { question: '3^2 = ?', answer: 'idk', time: (60 / bpm) * 1 },
        { question: '4^2 = ?', answer: 'idk', time: (60 / bpm) * 1 },

        { question: '6^2 + 8^2 = ?', answer: 'idk', time: (60 / bpm) * 2 },
        { question: '6^2 = ?', answer: 'idk', time: (60 / bpm) * 1 },
        { question: '8^2 = ?', answer: 'idk', time: (60 / bpm) * 1 },

        { question: '2 / 2 / 2 = ?', answer: '48', time: (60 / bpm) * 4 },
        { question: '2 / 2^2 / 2 = ?', answer: 'asdf', time: (60 / bpm) * 4 },
        { question: '22 / 2 / 2^0 = ?', answer: '48', time: (60 / bpm) * 4 },
        { question: '22 / 2 / 2^2 = ?', answer: 'asdf', time: (60 / bpm) * 4 },

        { question: 'log2(2) = ?', answer: '1', time: (60 / bpm) * 1 },
        { question: 'log2(4) = ?', answer: '2', time: (60 / bpm) * 1 },
        { question: 'log2(8) = ?', answer: '3', time: (60 / bpm) * 1 },
        { question: 'log2(16) = ?', answer: '4', time: (60 / bpm) * 1 },
        { question: 'log2(32) = ?', answer: '5', time: (60 / bpm) * 1 },
        { question: 'log2(64) = ?', answer: '6', time: (60 / bpm) * 1 },
        { question: 'log2(128) = ?', answer: '7', time: (60 / bpm) * 1 },
        { question: 'log2(256) = ?', answer: '8', time: (60 / bpm) * 1 },
        { question: 'log2(512) = ?', answer: '9', time: (60 / bpm) * 1 },
        { question: 'log2(1024) = ?', answer: '10', time: (60 / bpm) * 1 },
        { question: 'log2(2048) = ?', answer: '11', time: (60 / bpm) * 1 },
        { question: 'log2(4096) = ?', answer: '12', time: (60 / bpm) * 1 },
        { question: 'log2(8192) = ?', answer: '13', time: (60 / bpm) * 2 },
        { question: 'log2(1) = ?', answer: '0', time: (60 / bpm) * 1 },
        { question: 'log2(0.5) = ?', answer: '-1', time: (60 / bpm) * 1 },

        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '22 = ?', answer: '22', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '22 = ?', answer: '22', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '22 = ?', answer: '22', time: (60 / bpm) * 0.5 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.75 },
        { question: '2 = ?', answer: '2', time: (60 / bpm) * 0.5 },
        { question: '222 = ?', answer: '2', time: (60 / bpm) * 2 },

        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2020 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },

        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2020 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },

        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2' + randomNum1(5) + '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '2020 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },

        { question: '2 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '22 = ?', answer: 'idk', time: (60 / bpm) * 0.75 },
        { question: '222 = ?', answer: 'idk', time: (60 / bpm) * 0.5 },
        { question: '1234567890 = ?', answer: 'idk', time: (60 / bpm) * 2 },

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
