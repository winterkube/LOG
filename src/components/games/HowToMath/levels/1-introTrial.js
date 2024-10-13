// src/components/games/HowToMath/levels/1-introTrial.js

import songWaterflameGlorious from '../assets/music/waterflame-glorious.mp3';

const bpm = 76.9;

function randomNum1 (what) {
    if (what === '') {
        return Math.floor(Math.random() * 10);
    } else if (what === 1) {
        return Math.floor(Math.random() * 10) + 5;
    } else if (what === 2) {
        return Math.floor(Math.random() * 10) + 1;
    }
    return Math.floor(Math.random() * 10);
}

export const introTrial = {
    levelNumber: 1,
    song: songWaterflameGlorious,
    songTitle: 'Waterflame - Glorious Morning',
    length: 112, // in seconds
    offset: 1000, // how long until the song actually starts in the mp3, in milliseconds
    questions: [
        { question: '1 + 1 = ?', answer: '2', time: (60 / bpm) * 3.4,},
        { question: '2 + 2 = ?', answer: '4', time: (60 / bpm) * 4,},
        { question: '3 + 3 = ?', answer: '6', time: (60 / bpm) * 4, },
        { question: '0 + 0 = ?', answer: '0', time: (60 / bpm) * 4,},
        { question: '2 - 1 = ?', answer: '1', time: (60 / bpm) * 4,}, // 2 beats},
        { question: '3 - 1 = ?', answer: '2', time: (60 / bpm) * 4,},
        { question: '5 - 2 = ?', answer: '3', time: (60 / bpm) * 4,},
        { question: '4 - 4 = ?', answer: '0', time: (60 / bpm) * 4,},

        { question: '1 * 1 = ?', answer: '1', time: (60 / bpm) * 4},
        { question: '2 * 2 = ?', answer: '4', time: (60 / bpm) * 4},
        { question: '4 / 2 = ?', answer: '2', time: (60 / bpm) * 4},
        { question: '100 / 100 = ?', answer: '1', time: (60 / bpm) * 4},

        { question: '1 + 1 + 1 = ?', answer: '3', time: (60 / bpm) * 2},
        { question: '1 + 1 + 1 + 1 = ?', answer: '4', time: (60 / bpm) * 2},
        { question: '1 + 1 + 1 + 1 + 1 = ?', answer: '5', time: (60 / bpm) * 2},
        { question: '1 + 1 + 1 + 1 + 1 - 1 = ?', answer: '4', time: (60 / bpm) * 2},
        { question: '1 + 1 + 1 + 2 = ?', answer: '5', time: (60 / bpm) * 2},
        { question: '1 + 2 + 1 + 2 = ?', answer: '6', time: (60 / bpm) * 2},
        { question: '1 + 1 - 1 - 1 = ?', answer: '0', time: (60 / bpm) * 2},
        { question: '2 + 1 - 1 + 2 = ?', answer: '4', time: (60 / bpm) * 2},

        { question: randomNum1().toString() + ' + ' + randomNum1().toString(), answer: 'idk', time: (60 / bpm) * 4,},
        { question: randomNum1().toString() + ' + ' + randomNum1().toString(), answer: 'idk', time: (60 / bpm) * 4,},
        { question: randomNum1(1).toString() + ' - ' + '5', answer: 'idk', time: (60 / bpm) * 4,},
        { question: (randomNum1(1) + 4).toString() + ' - ' + '7', answer: 'idk', time: (60 / bpm) * 4,},
        { question: (randomNum1()).toString() + ' * ' + '1', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1()).toString() + ' * ' + '2', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1()).toString() + ' * ' + '3', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1()).toString() + ' * ' + '4', answer: 'idk', time: (60 / bpm) * 2,},
        { question: '5' + ' * ' + (randomNum1()).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '6' + ' * ' + (randomNum1()).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '7' + ' * ' + (randomNum1()).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '1' + ' * ' + (randomNum1()).toString(), answer: 'idk', time: (60 / bpm) * 1,},
        { question: '1' + ' * ' + (randomNum1()).toString(), answer: 'idk', time: (60 / bpm) * 1,},

        { question: '1 + ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '1 + 1 + ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '1 + 1 + 1 + ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: '1 + 1 + 1 + 1 + ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1(2)).toString() + ' + 1 + 1 + 1 + 1', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1(2)).toString() + ' + 1 + 1 + 1', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1(2)).toString() + ' + 1 + 1', answer: 'idk', time: (60 / bpm) * 2,},
        { question: (randomNum1(2)).toString() + ' + 1', answer: 'idk', time: (60 / bpm) * 2,},

        { question: (randomNum1(2)).toString() + ' * ' + (randomNum1(2)).toString() + ' * ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 8,},
        { question: (randomNum1(2)).toString() + ' * ' + (randomNum1(2)).toString() + ' * ' + (randomNum1(2)).toString(), answer: 'idk', time: (60 / bpm) * 8,},

        { question: '6', answer: '6', time: (60 / bpm) * 2,},
        { question: '5', answer: '5', time: (60 / bpm) * 2,},
        { question: '4', answer: '4', time: (60 / bpm) * 1,},
        { question: '3', answer: '3', time: (60 / bpm) * 1,},
        { question: '2', answer: '2', time: (60 / bpm) * 1,},
        { question: '1', answer: '1', time: (60 / bpm) * 1,},

        {
            question: '...',
            answer: '.',
            time: 999,
        },
        // Add more questions...
    ],
};
