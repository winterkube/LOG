// src/components/games/HowToMath.js

import React, { useState } from 'react';
import Menu from './Menu';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';
import Cutscene from './Cutscene';
import Results from './Results';
import { Levels } from './levels/levelData';

import './HowToMath.css';

function HowToMath() {
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
            {renderScene()}
        </div>
    );
}

export default HowToMath;
