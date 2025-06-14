// src/components/games/HowToMath/HowToMath.js

import React, {createContext, useEffect, useRef, useState} from 'react';
import Menu from './Menu';
import LevelSelect from './LevelSelect';
import Gameplay from './Gameplay';
import Cutscene from './Cutscene';
import Results from './Results';
import { Levels } from './levels/levelData';

import lofiThing from './assets/music/lofi thing.mp3';
import birds from './assets/music/birds.mp3';
import './HowToMath.css';
import { useLocation } from 'react-router-dom';

// Import all images used in your game
import playButtonImage from './assets/play button.png';
import playButtonImageHover from './assets/play button hover.png';
import settingsButtonImage from './assets/settings button.png';
import settingsButtonImageHover from './assets/settings button hover.png';
import volumeButtonImage from './assets/volume button.png';
import volumeButtonImageHover from './assets/volume button hover.png';
import backButtonImage from './assets/back button.png';
import backButtonImageHover from './assets/back button hover.png';
import trialsButtonImage from './assets/trials button.png';
import trialsButtonImageHover from './assets/trials button hover.png';
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
import {Cutscenes} from "./cutscenes/cutsceneData";
import buttonClickSfx from './assets/music/buttonclick.mp3';  // adjust path
import SfxButton from './hooks/SfxButton';
export const ClickAudioContext = createContext(() => {});





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
    const [gameData, setGameData] = useState({
        levelNumber: null,
        performanceData: null,
    });
    const [imagesLoaded, setImagesLoaded] = useState(false); // New state variable

    const menuMusicRef = useRef(null);
    const [volume, setVolume] = useState(1); // Initial volume set to 0.5


    const clickAudioRef = useRef(new Audio(buttonClickSfx));

    // ensure the audio is ready
    useEffect(() => {
        const a = clickAudioRef.current;
        a.load();
    }, []);

    // function to play the SFX (resetting time so it can play repeatedly)
    const playClick = () => {
        const a = clickAudioRef.current;
        a.currentTime = 0;
        a.volume = 1;
        a.play();
    };

    const [difficulty, setDifficulty] = useState('normal'); // Default to 'normal' mode


    // On component mount, load difficulty from localStorage
    useEffect(() => {
        const savedDifficulty = localStorage.getItem('difficulty');
        if (savedDifficulty) {
            setDifficulty(savedDifficulty);
        }
    }, []);

    // Save difficulty to localStorage whenever it changes
        useEffect(() => {
            localStorage.setItem('difficulty', difficulty);
        }, [difficulty]);


    // Initialize the audio object
    useEffect(() => {
        menuMusicRef.current = new Audio(lofiThing);
        menuMusicRef.current.loop = true;
        menuMusicRef.current.volume = volume; // Set initial volume (0.0 to 1.0)
    }, []);

    // Update audio volume when volume state changes
    useEffect(() => {
        if (menuMusicRef.current) {
            menuMusicRef.current.volume = volume;
        }
    }, [volume]);

    const location = useLocation();

    // whenever the URL changes:
    useEffect(() => {
        if (location.pathname !== '/howtomath') {
            menuMusicRef.current.pause();
            menuMusicRef.current.load();
        }
    }, [location.pathname]);
    useEffect(() => {
        return () => {
            // on unmount, definitely stop playback
            menuMusicRef.current.pause();
            menuMusicRef.current.load();
        };
    }, []);
    // Start or stop music based on currentScene
    useEffect(() => {

        if (currentScene === 'start') {
            if (menuMusicRef.current) {
                menuMusicRef.current.pause();
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
                menuMusicRef.current.load();
            }
        }
        // restart
         else if (currentScene === 'results' ) {
            // Pause the music
            if (menuMusicRef.current) {
                menuMusicRef.current.pause();
                menuMusicRef.current.load();
            }
        }

         else {
            if (menuMusicRef.current) {
                menuMusicRef.current.pause();
                menuMusicRef.current.load();
            }
        }

        // Clean up when component unmounts
        return () => {
            if (menuMusicRef.current) {

            }
        };
    }, [currentScene]);

    // Preload images only once
    useEffect(() => {
        const imageSources = [
            playButtonImage,
            playButtonImageHover,
            settingsButtonImage,
            settingsButtonImageHover,
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

    const [allVideosPreloaded, setAllVideosPreloaded] = useState(false);

    // in HowToMath.js, alongside your image preload:
    useEffect(() => {
        const allVideoURLs = Object.values(Levels)
            .map(l => l.levelNumber.video && l.levelNumber.video.url)
            .filter(Boolean);

        let loaded = 0;
        allVideoURLs.forEach((src) => {
            const v = document.createElement('video');
            v.src = src;
            v.preload = 'auto';
            v.oncanplaythrough = () => {
                loaded++;
                if (loaded === allVideoURLs.length) {
                    setAllVideosPreloaded(true);
                }
            };
            v.onerror = () => {
                loaded++;
                if (loaded === allVideoURLs.length) {
                    setAllVideosPreloaded(true);
                }
            };
            v.load();
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

    const handleGameEnd = (data) => {
        if (data.action === 'retry') {
            // Restart the gameplay without precutscene

            setCurrentScene('loading');
            setTimeout(
                function () {

                    setCurrentScene('gameplay'); }
                , 150)

        } else if (data.action === 'menu') {
            // Go back to level select
            setCurrentScene('levelSelect');
        } else {
            // Regular game end with results
            setGameData({ ...gameData, performanceData: data });
            setCurrentScene('results');
        }
    };

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

    function isInGame() {
        return currentScene === 'gameplay';
    }

    // In HowToMath.js or a central location
    const highestUnlockedLevel = parseInt(localStorage.getItem('highestUnlockedLevel')) || 1;


    const renderScene = () => {
        if (!imagesLoaded) {
            return <LoadingScreen />;
        }

        switch (currentScene) {

            case 'loading':
                if (!imagesLoaded || !allVideosPreloaded) {
                    return <LoadingScreen />;
                }
                return <LoadingScreen />;
            case 'start':
                if (!imagesLoaded) {
                    return <LoadingScreen />;
                }
                return (
                    <>
                        <div className="startButton" onClick={startGame}>

                        </div>

                        <div className="buttonText"> Headphones recommended!</div>
                    </>


                );
            case 'menu':
                return (

                    <Menu
                        onStart={() => setCurrentScene('levelSelect')}
                        setVolume={setVolume}
                        setDifficulty={setDifficulty}
                        difficulty={difficulty}
                        key={currentScene}
                    />

                );
            case 'levelSelect':
                return (
                    <LevelSelect
                        onLevelSelect={(levelNumber) => {
                            if (levelNumber > 0) {
                                setGameData({ levelNumber, difficulty });

                                const hasPreCutscene = Cutscenes[levelNumber]?.pre;
                                if (hasPreCutscene) {
                                    setCurrentScene('cutscene');
                                } else {
                                    setCurrentScene('gameplay');
                                }
                            } else {
                                setCurrentScene('menu');
                            }
                        }}
                        data={gameData.performanceData}
                    />
                );
            case 'cutscene':
                return (
                    <Cutscene
                        onCutsceneEnd={() => setCurrentScene('gameplay')}
                        cutsceneSteps={Cutscenes[gameData.levelNumber]?.pre}
                    />
                );
            case 'postCutscene':
                return (
                    <Cutscene
                        onCutsceneEnd={() => setCurrentScene('levelSelect')}
                        cutsceneSteps={Cutscenes[gameData.levelNumber]?.post}
                    />
                );
            case 'gameplay':
                return (
                    <Gameplay
                        levelData={Levels[gameData.levelNumber]}
                        onGameEnd={handleGameEnd}
                        inGame={isInGame}
                        difficulty={gameData.difficulty}
                        volume = {volume}
                    />
                );
            case 'results':
                return (
                    <Results
                        data={gameData.performanceData}
                        onContinue={() => {
                            const hasPostCutscene = Cutscenes[gameData.levelNumber]?.post;
                            if (hasPostCutscene) {
                                setCurrentScene('postCutscene');
                            } else {
                                setCurrentScene('levelSelect');
                            }
                        }}
                        onRetry={() => setCurrentScene('gameplay')}
                        onMenu={() => setCurrentScene('levelSelect')}
                    />
                );
            default:
                return <Menu onStart={() => setCurrentScene('levelSelect')}/>;
        }
    };

    return (

        <div className="how-to-math">
            <h1>HOW TO MATH</h1><h5> (demo) </h5>
            <h2>by WinterKube</h2>
            <ClickAudioContext.Provider value={playClick}>
                <div className="game-container">
                    <canvas ref={canvasRef} id="gameCanvas"></canvas>
                    {renderScene()}
                </div>
            </ClickAudioContext.Provider>
        </div>
    );
}

export default HowToMath;
