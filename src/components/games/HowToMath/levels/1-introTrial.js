// src/components/games/HowToMath/levels/1-introTrial.js

import songWaterflameGlorious from '../assets/music/waterflame-glorious.mp3';



export const introTrial = {
    levelNumber: 1,
    song: songWaterflameGlorious,
    bpm: 120,
    questions: [
        { question: '1 + 1 = ?', answer: '2', time: 4 },
        { question: '2 + 2 = ?', answer: '4', time: 6 }
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
