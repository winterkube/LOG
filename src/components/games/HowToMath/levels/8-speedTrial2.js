

import songWormhole from '../assets/music/f777-wormhole.mp3';
import {randomNum1} from "./1-introTrial";

const bpm = 84.35;

export const speedTrialII = {
    levelNumber: 6,
    song: songWormhole,
    songTitle: 'F-777 - Wormhole To Somewhere',
    length: 99,
    offset: 330,
    questions: [
        { question: '2 + 2 + 22 + 22 = ?', answer: '48', time: (60 / bpm) * 8 },
        { question: '2^2 + 2^2 + 22^2 + 22^2 = ?', answer: 'asdf', time: (60 / bpm) * 8 },

        { question: '2^x = 2', answer: '1', time: (60 / bpm) * 1 },
        { question: '2^x = 4', answer: '2', time: (60 / bpm) * 1 },
        { question: '2^x = 8', answer: '3', time: (60 / bpm) * 1 },
        { question: '2^x = 16', answer: '4', time: (60 / bpm) * 1 },
        { question: '2^x = 32', answer: '5', time: (60 / bpm) * 1 },
        { question: '2^x = 64', answer: '6', time: (60 / bpm) * 1 },
        { question: '2^x = 128', answer: '7', time: (60 / bpm) * 1 },
        { question: '2^x = 256', answer: '8', time: (60 / bpm) * 1 },
        { question: '2^x = 512', answer: '9', time: (60 / bpm) * 1 },
        { question: '2^x = 1024', answer: '10', time: (60 / bpm) * 1 },
        { question: '2^x = 2048', answer: '11', time: (60 / bpm) * 1 },
        { question: '2^x = 4096', answer: '12', time: (60 / bpm) * 1 },
        { question: '2^x = 8192', answer: '13', time: (60 / bpm) * 2 },
        { question: '2^x = 1', answer: '0', time: (60 / bpm) * 1 },
        { question: '2^x = 0.5', answer: '-1', time: (60 / bpm) * 1 },

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

        { question: '2^1 = ?', answer: '2', time: (60 / bpm) * 1 },
        { question: '2^2 = ?', answer: '4', time: (60 / bpm) * 1 },
        { question: '2^3 = ?', answer: '8', time: (60 / bpm) * 1 },
        { question: '2^4 = ?', answer: '16', time: (60 / bpm) * 1 },
        { question: '2^5 = ?', answer: '32', time: (60 / bpm) * 1 },
        { question: '2^6 = ?', answer: '64', time: (60 / bpm) * 1 },
        { question: '2^7 = ?', answer: '128', time: (60 / bpm) * 1 },
        { question: '2^8 = ?', answer: '256', time: (60 / bpm) * 1 },
        { question: '2^9 = ?', answer: '512', time: (60 / bpm) * 1 },
        { question: '2^10 = ?', answer: '1024', time: (60 / bpm) * 1 },
        { question: '2^11 = ?', answer: '2048', time: (60 / bpm) * 1 },
        { question: '2^12 = ?', answer: '4096', time: (60 / bpm) * 1 },
        { question: '2^13 = ?', answer: '8192', time: (60 / bpm) * 2 },
        { question: '2^0 = ?', answer: '1', time: (60 / bpm) * 1 },
        { question: '2^-1 = ?', answer: '0.5', time: (60 / bpm) * 1 },

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
