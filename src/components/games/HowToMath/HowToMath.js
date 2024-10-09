// src/components/games/HowToMath/HowToMath.js

import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';
import Cutscene from './Cutscene';
import Results from './Results';
import { Levels } from './levels/levelData';

import lofiThing from './assets/music/lofi thing.mp3';
import './HowToMath.css';


// Import all images used in your game
import playButtonImage from './assets/play button.png';
import settingsButtonImage from './assets/settings button.png';
import volumeButtonImage from './assets/volume button.png';
import backButtonImage from './assets/back button.png';
import trialsButtonImage from './assets/trials button.png';
import cheeba1Image from './assets/cheeba1.png';
import cheeba2Image from './assets/cheeba2.png';
import leyvi1Image from './assets/leyvi1.png';
import leyvi2Image from './assets/leyvi2.png';
import classroomImage from './assets/classroom.png';
import classroomImage2 from './assets/classroom2.png';
import classroomImage3 from './assets/classroom3.png';
import classroomImage4 from './assets/classroom4.png';
import blackboardImage from './assets/blackboard.png';
import startButton1 from './assets/startbtn1.png';
import startButton2 from './assets/startbtn2.png';
import {wait} from "@testing-library/user-event/dist/utils";
import levelSelect from "./LevelSelect";



function LoadingScreen() {

    return (

        <div className="loading-screen">
            <p>Loading...</p>
            {/* You can add a spinner or any loading animation here */}
        </div>
    );
}

function HowToMath() {
    const canvasRef = useRef(null);
    const [currentScene, setCurrentScene] = useState('loading');
    const [gameData, setGameData] = useState(null); // To pass data between scenes
    const [imagesLoaded, setImagesLoaded] = useState(false); // New state variable

    const menuMusicRef = useRef(null);

    // Initialize the audio object
    useEffect(() => {
        menuMusicRef.current = new Audio(lofiThing);
        menuMusicRef.current.loop = true;
        menuMusicRef.current.volume = 0.75; // Set initial volume (0.0 to 1.0)
    }, []);

    // Start or stop music based on currentScene
    useEffect(() => {

        if (currentScene === 'start') {
            if (menuMusicRef.current) {
                menuMusicRef.current.load();
            }
        }
        else if ( (currentScene === 'menu' || currentScene === 'levelSelect')) {
            // Start playing if not already playing
            if (menuMusicRef.current && menuMusicRef.current.paused) {
                menuMusicRef.current.play();
            }
        }
        else if (currentScene === 'cutscene' || currentScene === 'gameplay') {
            // Pause the music
            if (menuMusicRef.current && !menuMusicRef.current.paused) {
                menuMusicRef.current.pause();
            }
        }
        // restart
         else if (currentScene === 'results' ) {
            // Pause the music
            if (menuMusicRef.current) {
                menuMusicRef.current.load();
            }
        }

        // Clean up when component unmounts
        return () => {
            if (menuMusicRef.current) {
                menuMusicRef.current.pause();
            }
        };
    }, [currentScene]);

    // Preload images only once
    useEffect(() => {
        const imageSources = [
            playButtonImage,
            settingsButtonImage,
            volumeButtonImage,
            backButtonImage,
            trialsButtonImage,
            cheeba1Image,
            cheeba2Image,
            leyvi1Image,
            leyvi2Image,
            classroomImage,
            classroomImage2,
            classroomImage3,
            classroomImage4,
            blackboardImage,
            startButton1,
            startButton2,

            // Add any other images used in your game
        ];

        preloadImages(imageSources, () => {
            setTimeout(
                function () {
                    setImagesLoaded(true);
                    setCurrentScene('start'); }
                , 1500)

        });
    }, []);

    // Handle window resize
    useEffect(() => {
        const canvas = canvasRef.current;
        const handleResize = () => {
            resizeCanvas(canvas);
        };

        window.addEventListener('resize', handleResize);
        resizeCanvas(canvas); // Initial resize

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function resizeCanvas(canvas) {
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        // Redraw canvas content if necessary
    }

    function preloadImages(imageArray, callback) {
        let loadedImages = 0;
        const totalImages = imageArray.length;

        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    callback();
                }
            };
            img.onerror = () => {
                loadedImages++;
                if (loadedImages === totalImages) {
                    callback();
                }
            };
        });
    }


    function startGame() {
        setCurrentScene('menu');
    }

    const renderScene = () => {
        if (!imagesLoaded) {
            return <LoadingScreen />;
        }

        switch (currentScene) {

            case 'loading':
                if (!imagesLoaded) {
                    return <LoadingScreen />;
                }
                return <LoadingScreen />;
            case 'start':
                if (!imagesLoaded) {
                    return <LoadingScreen />;
                }
                return (
                    <div className="startButton" onClick={startGame}> </div>
                );
            case 'menu':
                return (
                    <Menu
                        onStart={() => setCurrentScene('levelSelect')}
                        key={currentScene} // Force re-mounting the component
                    />
                );
            case 'levelSelect':
                return (
                    <LevelSelect
                        onLevelSelect={(levelNumber) => {
                            if (levelNumber > 0) {
                                setGameData({ levelNumber });
                                setCurrentScene('cutscene');
                            } else {
                                setCurrentScene('menu');
                            }
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
                        onContinue={() => setCurrentScene('levelSelect')}
                        onRetry={() => setCurrentScene('gameplay')}
                        onMenu={() => setCurrentScene('menu')}
                    />
                );
            default:
                return <Menu onStart={() => setCurrentScene('levelSelect')}/>;
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
