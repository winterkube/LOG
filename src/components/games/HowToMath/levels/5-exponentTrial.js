

import songShine from '../assets/music/creo-shine.mp3';

const bpm = 90.27;

function logN(base, val) {
    return Math.log(val) / Math.log(base);
}

export const exponentTrial = {
    levelNumber: 5,
    song: songShine,
    songTitle: 'Creo - Shine',
    length: 99,
    offset: 350,
    volume: 0.6,
    questions: [

        // { question: 'log100(100) = ?', answer: '1', time: (60 / bpm) * 4 },
        { question: '2^2 = ?', answer: '4', time: (60 / bpm) * 4 },
        { question: '3^2 = ?', answer: '9', time: (60 / bpm) * 4 },
        { question: '1^2 + 2^2 + 3^2 = ?', answer: 'idk', time: (60 / bpm) * 8 },
        { question: '1^2 + 1^20 = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: '2^2 + 1^20 = ?', answer: '5', time: (60 / bpm) * 4 },
        { question: '3^2 + 4^2 + 5^2 = ?', answer: 'idk', time: (60 / bpm) * 8 },

        { question: 'x^2 = 4', answer: '2', variable: 'x', time: (60 / bpm) * 4 },
        { question: 'x^3 = 27', answer: '3', variable: 'x',time: (60 / bpm) * 4 },
        { question: 'sqrt(16) = ?', answer: '4', time: (60 / bpm) * 4 },
        { question: '-sqrt(36) = ?', answer: '-6', time: (60 / bpm) * 4 },
        { question: 'x^0.5 = 4', answer: '16', variable: 'x', time: (60 / bpm) * 4 },
        { question: 'x^-1 = 4', answer: '0.25', variable: 'x', time: (60 / bpm) * 4 },
        { question: 'log10(100) = ?', answer: '2', time: (60 / bpm) * 4 },
        { question: 'log100(100) = ?', answer: '1', time: (60 / bpm) * 4 },


        { question: '123^x = 122 + 123^0 ', answer: '1', variable: 'x', time: (60 / bpm) * 6 },
        { question: '3x^2 = 48', answer: '4', variable: 'x', time: (60 / bpm) * 6 },
        { question: 'x^2 * x^3 = 32', answer: '2', variable: 'x', time: (60 / bpm) * 6 },
        { question: 'x^2 / x^3 = 5', answer: '0.2', variable: 'x', time: (60 / bpm) * 6 },

        { question: 'x * x * x^-1 = 4', answer: '4', variable: 'x', time: (60 / bpm) * 6 },
        { question: 'x^2 + (x+1)^2 = 5^2', answer: '3', variable: 'x', time: (60 / bpm) * 6 },
        { question: '(x^2)^2 = 16', answer: '2', variable: 'x', time: (60 / bpm) * 3 },
        { question: '(x^3)^-1 = 1/27' , answer: '3', variable: 'x', time: (60 / bpm) * 3 },
        { question: 'sqrt(x) = 81', answer: '9', variable: 'x', time: (60 / bpm) * 4.5 },
        { question: '0^2 = ?', answer: '0', time: (60 / bpm) * 1.5 },

        { question: '8^2 - log2(64) + 9^0.5 = ?', answer: '61', time: (60 / bpm) * 12 },
        { question: '(3^2)^2 + (2^2)^3 = ?', answer: 'idk', time: (60 / bpm) * 12 },
        { question: 'log5(125) - x = 10^2', answer: '-97', variable: 'x', time: (60 / bpm) * 12 },
        { question: '5^x + x = 2^7', answer: '3', variable: 'x', time: (60 / bpm) * 12 },

        { question: '1 = ?', answer: 'idk', time: (60 / bpm) * 3 },
        { question: '0.5^2 = ?', answer: '0.25', time: (60 / bpm) * 6 },
        { question: '1.5^2 = ?', answer: '2.25', time: (60 / bpm) * 6 },
        { question: 'sqrt(0.49) = ?', answer: '0.7', time: (60 / bpm) * 6 },
        { question: 'sqrt(-1) = ?', answer: 'i', time: (60 / bpm) * 6 },




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
