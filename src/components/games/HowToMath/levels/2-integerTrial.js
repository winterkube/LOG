// src/components/games/HowToMath/levels/1-introTrial.js

import songFbHarmony from '../assets/music/fb-harmony.mp3';



export const integerTrial = {
    levelNumber: 2,
    song: songFbHarmony,
    bpm: 65,
    length: 78, // 78 seconds
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
