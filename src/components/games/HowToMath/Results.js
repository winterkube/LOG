import React, {useEffect, useRef, useState} from 'react';
import './HowToMath.css';
import './styles/Results.css';

import resultsBox from './assets/results box.png';
import resultsBoxHover from './assets/results box hover.png';
import leviHead1 from './assets/dog_head1.png';
import leviHead2 from './assets/dog_head2.png';
import leviHead3 from './assets/dog_head3.png';
import leviHead4 from './assets/dog_head4.png';

import cheebaHead1 from './assets/cheebaHead1.png';
import cheebaHead2 from './assets/cheebaHead2.png';
import cheebaHead3 from './assets/cheebaHead3.png';
import cheebaHead4 from './assets/cheebaHead4.png';

import rankPaper from './assets/rankPaper.png'
import rankSSImage from './assets/rankSS.png';
import rankSImage from './assets/rankS.png';
import rankAImage from './assets/rankA.png';
import rankBImage from './assets/rankB.png';
import rankCImage from './assets/rankC.png';
import rankDImage from './assets/rankD.png';
import rankEImage from './assets/rankE.png';
import rankFImage from './assets/rankF.png';
import rankIdkImage from './assets/rankIdk.png'
import exit from "./assets/music/exit.mp3";
import {useLocation} from "react-router-dom";
import SfxButton from './hooks/SfxButton';


function Results({ data, onContinue, onRetry, onMenu }) {

    const [flash2Exit, setFlash2Exit] = useState(false);

    // const rawPercent = data.score / data.total;
    // const rank = '???';
    const percent = Math.ceil((data.score / data.total) * 1000) / 1000; // rounds to nearest tenth of percent
    const failed = percent < 0.5;
    const levelNumber = data.levelNumber; // We need to pass levelNumber to Results

    const levelKey = `level_${data.levelNumber}`;

    const sfxRef = useRef(null);

    const location = useLocation();




    useEffect(() => {
        if (location.pathname !== '/howtomath') {
            // sfxRef.current.pause();
            // sfxRef.current.load();
        }
    }, [location.pathname]);



    useEffect(() => {
        if (!failed) {
            // Player passed the level
            const highestUnlockedLevel = parseInt(localStorage.getItem('highestUnlockedLevel')) || 1;
            if (levelNumber + 1 > highestUnlockedLevel) {
                localStorage.setItem('highestUnlockedLevel', levelNumber + 1);
            }
        }
    }, [failed, levelNumber]);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    function preloadRImages(imageArray, callback) {
        let loadedRImages = 0;
        const totalImages = imageArray.length;

        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedRImages++;
                if (loadedRImages === totalImages) {
                    callback();
                }
            };
            img.onerror = () => {
                loadedRImages++;
                if (loadedRImages === totalImages) {
                    callback();
                }
            };
        });
    }

    const rankImages = {
        SS: rankSSImage,
        S: rankSImage,
        A: rankAImage,
        B: rankBImage,
        C: rankCImage,
        D: rankDImage,
        E: rankEImage,
        F: rankFImage,
        Idk: rankIdkImage,
    };


    useEffect(() => {
        const imageSources = [
            leviHead1,
            leviHead2,
            leviHead3,
            leviHead4,
            cheebaHead1,
            cheebaHead2,
            cheebaHead3,
            cheebaHead4,
            rankPaper,
            rankSSImage,
            rankSImage,
            rankAImage,
            rankBImage,
            rankCImage,
            rankDImage,
            rankEImage,
            rankFImage,
            rankIdkImage,
            resultsBox,
            resultsBoxHover,

            // Add any other images used in your game
        ];

        preloadRImages(imageSources, () => {
            setImagesLoaded(true);
        });
    }, []);


    useEffect(() => {
        sfxRef.current = new Audio(exit);
        sfxRef.current.loop = false;
        sfxRef.current.volume = 0.7; // Set initial volume (0.0 to 1.0)

    }, []);
    useEffect(() => {
        if (sfxRef.current && imagesLoaded) {
            sfxRef.current.play();
        }
    }, [sfxRef.current, imagesLoaded]);

    function getRank(percent) {
        if (percent === 1 && (data.score !== data.total)) {
            percent = 0.999;
        }

        if (percent === 0) return 'SS';
        if (percent > 0 && percent < 0.5) return 'S';
        if (percent >= 0.5 && percent < 0.6) return 'A';
        if (percent >= 0.6 && percent < 0.7) return 'B';
        if (percent >= 0.7 && percent < 0.8) return 'C';
        if (percent >= 0.8 && percent < 0.9) return 'D';
        if (percent >= 0.9 && percent < 1) return 'E';
        if (percent === 1) return 'F';

        return 'Idk'
    }

    const resultsButton = (x) =>  {
        setFlash2Exit(true);
        setTimeout(() => {
            if (x === 0){
                onContinue();
            }
            if (x === 1) {
                onRetry();
            }
            if (x === 2) {
                onMenu();
            }
        }, 500);
    }

    const rank = getRank(percent);
    const rankImage = rankImages[rank] || rankIdkImage;


    useEffect(() => {
        // Read existing high score (default to -Infinity so any real score is higher)
        const prevHigh = parseInt(localStorage.getItem(`${levelKey}_highscore`), 10);
        // If we have no previous high (NaN) or our current is better, update it
        if (isNaN(prevHigh) || percent > prevHigh) {
            localStorage.setItem(`${levelKey}_highscore`, percent);
            localStorage.setItem(`${levelKey}_rank`, rank);
        }
        // Also update unlocked level as before
        if (percent >= 0.5) {
            const unlocked = parseInt(localStorage.getItem('highestUnlockedLevel'), 10) || 1;
            if (data.levelNumber + 1 > unlocked) {
                localStorage.setItem('highestUnlockedLevel', data.levelNumber + 1);
            }
        }
    }, [data.score, data.levelNumber, percent, rank, levelKey]);
    // useEffect(() => {
    //     // After computing percent and rank:
    //     localStorage.setItem(`${levelKey}_highscore`, (percent*100).toString() + '%');
    //     localStorage.setItem(`${levelKey}_rank`, rank);
    // }, [data.score, rank, levelKey]);

    if (!imagesLoaded) {
        return (
            <>
                {!imagesLoaded && (
                    <div className="loading-screen">
                        <p>Loading...</p>
                    </div>
                )}
            </>
        );
    } else {
        return (

            <div className="results">

                <div className="dog-heads">
                    <div className="carousel-container">
                        {/* First Carousel Row (Moving Right) */}
                        <div className="carousel-row move-right">
                            <div className="carousel">
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                                {/* Repeat images to create seamless animation */}
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                            </div>
                        </div>

                        {/* Second Carousel Row (Moving Left) */}
                        <div className="carousel-row move-left">
                            <div className="carousel">
                                {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                    <img key={index} src={src} alt={`Cheeba Head ${index + 1}`}/>
                                ))}
                                {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                    <img key={index + 4} src={src} alt={`Cheeba Head ${index + 1}`}/>
                                ))}
                            </div>
                        </div>

                        {/* Third Carousel Row (Moving Right, Offset) */}
                        <div className="carousel-row move-right offset">
                            <div className="carousel">
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                            </div>
                        </div>

                        {/* Fourth Carousel Row (Moving Left, Offset) */}
                        <div className="carousel-row move-left offset">
                            <div className="carousel">
                                {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                    <img key={index} src={src} alt={`Cheeba Head ${index + 1}`}/>
                                ))}
                                {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                    <img key={index + 4} src={src} alt={`Cheeba Head ${index + 1}`}/>
                                ))}
                            </div>
                        </div>

                        {/* Fifth Carousel Row (Moving Right) */}
                        <div className="carousel-row move-right">
                            <div className="carousel">
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                                {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                    <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <h2>RESULTS</h2>
                <div className={`flash2 ${flash2Exit ? 'exit' : ''}`}></div>

                <div className="p1"> YOUR RANK:
                    {/*{getRank(percent)}*/}
                    <div className="rank-paper"></div>
                    <div className={`rank rank${rank}`}></div>


                </div>

                {failed ? (
                    <div className="p2"> YOU FAILED... </div>
                ) : (
                    <div className="p2"> YOU PASSED! </div>
                )}

                <p>
                    You scored {data.score} out of {data.total}, or {Math.round(percent * 1000) / 10}%.

                </p>


                {!failed ? (
                    <SfxButton className="continue-btn" onClick={() => resultsButton(0)}>CONTINUE</SfxButton>


                ) : (
                    <SfxButton className="continue-btn" onClick={() => resultsButton(2)}>MENU</SfxButton>

                )}

                <SfxButton className="retry-btn" onClick={() => resultsButton(1)}>RETRY</SfxButton>


            </div>

        );
    }
}

export default Results;