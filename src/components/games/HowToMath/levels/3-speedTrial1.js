

import songChipZeal from '../assets/music/bgc-chipzeal.mp3';

const bpm = 170;

export const speedTrialI = {
    levelNumber: 3,
    song: songChipZeal,
    songTitle: 'BigGiantCircles - Chip Zeal',
    length: 99,
    offset: 1100,
    questions: [
        { question: '1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '10 + 10 = ?', answer: '20', time: (60 / bpm) * 4 },
        { question: '1 + 10 + 1 = ?', answer: '12', time: (60 / bpm) * 4 },
        { question: '10 + 1 + 10 = ?', answer: '21', time: (60 / bpm) * 4 },
        { question: '1 * 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1 * 1 + 1 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '1 + 1 * 1 + 1 = ?', answer: '3', time: (60 / bpm) * 4 },
        { question: '1 + 1 * 10 + 10 = ?', answer: '21', time: (60 / bpm) * 4 },
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
