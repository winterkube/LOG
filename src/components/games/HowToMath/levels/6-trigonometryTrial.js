

import songThirtyThree from '../assets/music/schtiffles-33.mp3';

const bpm = 80;

export const trigonometryTrial = {
    levelNumber: 6,
    song: songThirtyThree,
    songTitle: 'Schtiffles - 33',
    length: 99,
    offset: 1100,
    volume: 0.6,
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
