// src/components/games/HowToMath/levels/1-introTrial.js

import songWaterflameGlorious from '../assets/music/waterflame-glorious.mp3';

const bpm = 76;
export const introTrial = {
    levelNumber: 1,
    song: songWaterflameGlorious,
    songTitle: 'Waterflame - Glorious Morning',
    bpm: 76,
    length: 112, // in seconds
    offset: 1100, // how long until the song actually starts in the mp3, in milliseconds
    questions: [
        {
            question: '1 + 1 = ?',
            answer: '2',
            time: (60 / bpm) * 2, // 2 beats
        },
        {
            question: '2 + 2 = ?',
            answer: '4',
            time: (60 / bpm) * 2,
        },
        {
            question: '3 + 3 = ?',
            answer: '6',
            time: (60 / bpm) * 2,
        },
        {
            question: '0 + 0 = ?',
            answer: '0',
            time: (60 / bpm) * 2,
        },
        {
            question: '2 - 1 = ?',
            answer: '1',
            time: (60 / bpm) * 2, // 2 beats
        },
        {
            question: '3 - 1 = ?',
            answer: '2',
            time: (60 / bpm) * 2,
        },
        {
            question: '5 - 2 = ?',
            answer: '3',
            time: (60 / bpm) * 2,
        },
        {
            question: '4 - 4 = ?',
            answer: '0',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 + 1 = ?',
            answer: '3',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 + 1 + 1 = ?',
            answer: '4',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 + 1 + 1 + 1 = ?',
            answer: '5',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 + 1 + 1 + 1 - 1 = ?',
            answer: '4',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 + 1 + 2 = ?',
            answer: '5',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 2 + 1 + 2 = ?',
            answer: '6',
            time: (60 / bpm) * 2,
        },
        {
            question: '1 + 1 - 1 - 1 = ?',
            answer: '0',
            time: (60 / bpm) * 2,
        },
        {
            question: '2 + 1 - 1 + 2 = ?',
            answer: '4',
            time: (60 / bpm) * 2,
        },
        {
            question: '...',
            answer: '.',
            time: 999,
        },
        // Add more questions...
    ],
};
