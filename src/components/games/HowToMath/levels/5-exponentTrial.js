

import songShine from '../assets/music/creo-shine.mp3';

const bpm = 80;

export const exponentTrial = {
    levelNumber: 5,
    song: songShine,
    songTitle: 'Creo - Shine',
    length: 99,
    offset: 1100,
    questions: [
        { question: '1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
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
