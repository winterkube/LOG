// src/components/games/HowToMath/LevelSelect.js

import React, {useEffect, useState} from 'react';
import './HowToMath.css';
import './styles/LevelSelect.css';
import csTest from "./assets/cs test.png";
import csTest2 from "./assets/cs test2.png";
import trialBox from "./assets/trial box.png";
import crumpledPaper from "./assets/crumpled paper.png";


function LevelSelect({ onLevelSelect }) {



    const [imagesLoaded, setImagesLoaded] = useState(false);

    function preloadLSImages(imageArray, callback) {
        let loadedLSImages = 0;
        const totalImages = imageArray.length;

        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedLSImages++;
                if (loadedLSImages === totalImages) {
                    callback();
                }
            };
            img.onerror = () => {
                loadedLSImages++;
                if (loadedLSImages === totalImages) {
                    callback();
                }
            };
        });
    }

    useEffect(() => {
        const imageSources = [
            trialBox,
            crumpledPaper,

            // Add any other images used in your game
        ];

        preloadLSImages(imageSources, () => {
            setImagesLoaded(true);
        });
    }, []);




    const [flash2Exit, setFlash2Exit] = useState(false);

    const goBack = () => {
        setFlash2Exit(true);
        setTimeout(() => {
            onLevelSelect(0);
        }, 500);
    };

    const goLv1 = () => {
        setFlash2Exit(true);
        setTimeout(() => {
            onLevelSelect(1);
        }, 500);
    };

    return (

        <div className="level-select">

            <>
                {!imagesLoaded && (
                    <div className="loading-screen">
                        <p>Loading...</p>
                    </div>
                )}
            </>

            <div className="trialsBG"></div>
            <div className="trialsBG2"></div>
            <div className="trialsBG3"></div>

            <div className="back-shapes">

                <span className="floating circle"
                      style={{top: "80.5%", left: "0%", animationDelay: "-0.0s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "10%", animationDelay: "-0.2s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "20%", animationDelay: "-0.4s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "30%", animationDelay: "-0.6s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "40%", animationDelay: "-0.8s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "50%", animationDelay: "-1.0s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "60%", animationDelay: "-1.2s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "70%", animationDelay: "-1.4s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "80%", animationDelay: "-1.6s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "90%", animationDelay: "-1.8s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "100%", animationDelay: "-2.0s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "110%", animationDelay: "-2.2s"}}></span>
                <span className="floating circle"
                      style={{top: "80.5%", left: "120%", animationDelay: "-2.4s"}}></span>

                <span className="floating cross"
                      style={{top: "-16.5%", left: "-5%", animationDelay: "0.1s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "5%", animationDelay: "-0.1s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "15%", animationDelay: "-0.3s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "25%", animationDelay: "-0.5s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "35%", animationDelay: "-0.7s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "45%", animationDelay: "-0.9s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "55%", animationDelay: "-1.1s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "65%", animationDelay: "-1.3s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "75%", animationDelay: "-1.5s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "85%", animationDelay: "-1.7s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "95%", animationDelay: "-1.9s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "105%", animationDelay: "-2.1s"}}></span>
                <span className="floating cross"
                      style={{top: "-16.5%", left: "115%", animationDelay: "-2.3s"}}></span>

                {/*<span className="floating square"*/}
                {/*      style={{top: "16.5%", left: "83.2%", animationDelay: "-2.9s"}}></span>*/}
                {/*<span className="floating cross"*/}
                {/*      style={{top: "86.5%", left: "63.2%", animationDelay: "-3.9s"}}></span>*/}


            </div>

            <h2>TRIAL SELECT</h2>

            <div className={`flash2 ${flash2Exit ? 'exit' : ''}`}></div>


            {/* Position the back button */}
            <button className="back-button2" onClick={goBack}>
                BACK
            </button>

            {/* Wrap level buttons in a scrollable container */}
            <div className="level-buttons-container">
                <button onClick={goLv1}>Intro Trial</button>
                <button onClick={() => onLevelSelect(2)}>Integer Trial</button>
                <button onClick={() => onLevelSelect(3)}>Speed Trial I</button>
                <button onClick={() => onLevelSelect(4)}>Algebra Trial</button>
                <button onClick={() => onLevelSelect(5)}>Exponent Trial</button>
                {/* Uncomment and add more levels as needed */}
            </div>

            {/*<button onClick={() => onLevelSelect(1)}>Intro Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(2)}>Integer Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(3)}>Speed Trial I</button>*/}
            {/*<button onClick={() => onLevelSelect(4)}>Algebra Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(5)}>Exponent Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(6)}>Trigonometry Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(7)}>Endurance Trial I</button>*/}
            {/*<button onClick={() => onLevelSelect(8)}>Speed Trial II</button>*/}
            {/*<button onClick={() => onLevelSelect(9)}>Quadratic Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(10)}>Variables Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(11)}>Logarithm Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(12)}>Endurance Trial II</button>*/}
            {/*<button onClick={() => onLevelSelect(13)}>Limits Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(14)}>Derivative Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(15)}>Speed Trial III</button>*/}
            {/*<button onClick={() => onLevelSelect(16)}>Integral Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(17)}>Complex Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(18)}>Differential Trial</button>*/}
            {/*<button onClick={() => onLevelSelect(19)}>Speed Trial IV</button>*/}
            {/*<button onClick={() => onLevelSelect(20)}>Judgement Trial</button>*/}
            {/* More levels */}


        </div>
    );
}

export default LevelSelect;
