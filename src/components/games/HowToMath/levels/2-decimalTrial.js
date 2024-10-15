

import songFbHarmony from '../assets/music/fb-harmony.mp3';

const bpm = 66.1;

export const decimalTrial = {
    levelNumber: 2,
    song: songFbHarmony,
    songTitle: 'ForeverBound - Harmony of the Heart',
    length: 78, // 78 seconds
    offset: 300,
    questions: [
        { question: '1 / 1 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '2 / 2 = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '1 / 2 = ?', answer: '0.5', time: (60 / bpm) * 4 },
        { question: '2 / 4 = ?', answer: '0.5', time: (60 / bpm) * 4 },

        { question: '0.5 + 0.5 = ?', answer: '1', time: (60 / bpm) * 2 },
        { question: '0.75 + 0.75 = ?', answer: '1.5', time: (60 / bpm) * 2 },
        { question: '1.1 + 2.2 = ?', answer: '3.3', time: (60 / bpm) * 2 },
        { question: '1.1 + 2.2 + 3.3 = ?', answer: '6.6', time: (60 / bpm) * 2 },
        



        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' + ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},
        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' - ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 4,},

        { question: '2' + ' * ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: '3' + ' * ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: '1' + ' * ' + ((Math.floor(Math.random() * 10))/10).toString() + ' = ?', answer: 'idk', time: (60 / bpm) * 2,},

        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' / ' + '2' + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' / ' + '4' + ' = ?', answer: 'idk', time: (60 / bpm) * 3,},
        { question: ((Math.floor(Math.random() * 10))/10).toString() + ' / ' + '10' + ' = ?', answer: 'idk', time: (60 / bpm) * 2,},


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
