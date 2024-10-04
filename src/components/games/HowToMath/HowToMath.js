// src/components/games/HowToMath.js

import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';
import Cutscene from './Cutscene';
import Results from './Results';
import { Levels } from './levels/levelData';

import './HowToMath.css';

function resizeCanvas(canvas, context) {
    // Get the size the canvas is displayed
    const { width, height } = canvas.getBoundingClientRect();

    // If the canvas size does not match the displayed size, update it
    if (canvas.width !== width || canvas.height !== height) {
        const oldWidth = canvas.width;
        const oldHeight = canvas.height;

        // Adjust the canvas size
        canvas.width = width;
        canvas.height = height;

        // Optionally adjust the drawing to the new size
        // If you're using scaling, you may need to adjust the context scale
        // context.scale(width / oldWidth, height / oldHeight);
    }

    // Redraw the canvas content if necessary
}

function HowToMath() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Handle window resize
        const handleResize = () => {
            resizeCanvas(canvas, context);
        };

        window.addEventListener('resize', handleResize);

        // Initial resize
        resizeCanvas(canvas, context);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [currentScene, setCurrentScene] = useState('menu');
    const [gameData, setGameData] = useState(null); // To pass data between scenes

    const renderScene = () => {
        switch (currentScene) {
            case 'menu':
                return <Menu onStart={() => setCurrentScene('levelSelect')} />;
            case 'levelSelect':
                return (
                    <LevelSelect
                        onLevelSelect={(levelNumber) => {
                            setGameData({ levelNumber });
                            setCurrentScene('cutscene');
                        }}
                    />
                );
            case 'cutscene':
                return (
                    <Cutscene
                        onCutsceneEnd={() => setCurrentScene('gameplay')}
                        level={gameData.levelNumber}
                    />
                );
            case 'gameplay':
                return (
                    <Gameplay
                        levelData={Levels[gameData.levelNumber]}
                        onGameEnd={(performanceData) => {
                            setGameData({ ...gameData, performanceData });
                            setCurrentScene('results');
                        }}
                    />
                );
            case 'results':
                return (
                    <Results
                        data={gameData.performanceData}
                        onRestart={() => setCurrentScene('menu')}
                    />
                );
            default:
                return <Menu onStart={() => setCurrentScene('levelSelect')} />;
        }
    };

    return (
        <div className="how-to-math">
            <h1>HOW TO MATH</h1>
            <h2>by WinterKube</h2>

            <div className="game-container">
                <canvas ref={canvasRef} id="gameCanvas"></canvas>
                {renderScene()}
            </div>
        </div>
    );
}



export default HowToMath;
