// src/components/games/HowToMath.js

import React, {useEffect, useRef, useState} from 'react';
import Menu from './Menu';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';
import Cutscene from './Cutscene';
import Results from './Results';
import { Levels } from './levels/levelData';

import './HowToMath.css';

// Inside HowToMath.js or in a separate utility file

function resizeCanvas(canvas, context) {
    const { width, height } = canvas.getBoundingClientRect();

    // Adjust the canvas size
    canvas.width = width;
    canvas.height = height;

    // Scale the drawing context to match the new size
    context.scale(width / canvas.width, height / canvas.height);

    // Redraw the canvas content if necessary
    // drawContent(context);
}



function HowToMath() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Set up initial drawing (optional)
        // ...

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
            // ...in renderScene
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
                        onCutsceneEnd={() => setCurrentScene('gamePlay')}
                        level={gameData.level}
                    />
                );
            case 'gameplay':
                return (
                    <Gameplay
                        levelData={Levels[gameData.levelNumber]}
                        onGameEnd={(performanceData) => {
                            setGameData({ ...gameData, performanceData });
                            setCurrentScene('performanceOverview');
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
            <h2> by WinterKube </h2>

            <div className="game-container">
                <canvas
                    ref={canvasRef}
                    style={{border: '2px solid black'}}
                    id="gameCanvas">

                </canvas>
                {renderScene()}
            </div>


        </div>
    );
}

export default HowToMath;
