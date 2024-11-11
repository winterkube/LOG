

import songShine from '../assets/music/creo-shine.mp3';

const bpm = 90;

export const exponentTrial = {
    levelNumber: 5,
    song: songShine,
    songTitle: 'Creo - Shine',
    length: 99,
    offset: 150,
    volume: 0.6,
    questions: [
        { question: '2^2 = ?', answer: '4', time: (60 / bpm) * 4 },
        { question: '3^2 = ?', answer: '9', time: (60 / bpm) * 4 },
        { question: '1^1 + 2^1 + 3^1 = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1^2 + 2^2 + 3^2 = ?', answer: 'idk', time: (60 / bpm) * 4 },
        { question: '1^2 + 1^20 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '2^2 + 1^20 = ?', answer: '5', time: (60 / bpm) * 4 },
        { question: '3^2 + 4^2 + 5^2 = ?', answer: 'idk', time: (60 / bpm) * 8 },

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
