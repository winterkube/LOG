// src/components/games/HowToMath/levels/1-introTrial.js

import songFbHarmony from '../assets/music/fb-harmony.mp3';

const bpm = 68;

export const decimalTrial = {
    levelNumber: 2,
    song: songFbHarmony,
    songTitle: 'ForeverBound - Harmony of the Heart',
    length: 78, // 78 seconds
    offset: 1000,
    questions: [
        { question: '1 / 1 = ?', answer: '1', time: 4 },
        { question: '2 / 2 = ?', answer: '1', time: 4 },
        { question: '1 / 2 = ?', answer: '0.5', time: 4 },
        { question: '2 / 4 = ?', answer: '0.5', time: 4 },
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
