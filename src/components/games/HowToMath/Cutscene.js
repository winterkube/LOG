// src/components/games/HowToMath/Cutscene.js

import React, {useState, useEffect, useRef} from 'react';
import { Cutscenes } from './cutscenes/cutsceneData';
import './HowToMath.css';
import './styles/Cutscene.css';

import csTest from './assets/cs test.png';
import csTest2 from './assets/cs test2.png';


function Cutscene({ onCutsceneEnd, level }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const typingIntervalRef = useRef(null);

    const cutsceneSteps = Cutscenes[level];

    const [imagesLoaded, setImagesLoaded] = useState(false);

    function preloadCSImages(imageArray, callback) {
        let loadedCSImages = 0;
        const totalImages = imageArray.length;

        imageArray.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                loadedCSImages++;
                if (loadedCSImages === totalImages) {
                    callback();
                }
            };
            img.onerror = () => {
                loadedCSImages++;
                if (loadedCSImages === totalImages) {
                    callback();
                }
            };
        });
    }

    useEffect(() => {
        const imageSources = [
            csTest,
            csTest2,

            // Add any other images used in your game
        ];

        preloadCSImages(imageSources, () => {
            setTimeout(
                function () {
                    setImagesLoaded(true); }
                , 0)
        });
    }, []);

    useEffect(() => {
        if ( cutsceneSteps && cutsceneSteps.length > 0) {
            handleDialogue();
        }
        else {
            // No cutscenes; proceed to game
            onCutsceneEnd();
        }
    }, [currentStepIndex, currentDialogueIndex]);




        const handleDialogue = () => {
            const currentStep = cutsceneSteps[currentStepIndex];
            if (currentStep.dialogues && currentStep.dialogues.length > 0) {
                const dialogue = currentStep.dialogues[currentDialogueIndex];
                typeText(dialogue);
            } else {
                // Proceed to next step if no dialogues
                proceedToNextStep();
            }
        };
        const typeText = (text) => {
            setIsTyping(true);
            setDisplayedText(' ');

            if (typingIntervalRef.current) {
                clearTimeout(typingIntervalRef.current);
            }

            let index = -1;

            // Start typing after displayedText is reset
            setTimeout(() => {
                function typeNextChar() {
                    if (index < text.length) {

                        setDisplayedText((prev) => prev + text.charAt(index));

                        index++;


                        typingIntervalRef.current = setTimeout(typeNextChar, 100); // Adjust typing speed here


                    } else {
                        setIsTyping(false);
                        typingIntervalRef.current = null;
                    }
                }

                typeNextChar();
            }, 0);
        };

        const proceedToNextStep = () => {
            const currentStep = cutsceneSteps[currentStepIndex];


            if (
                currentStep.dialogues &&
                currentDialogueIndex + 1 < currentStep.dialogues.length
            ) {
                // Proceed to next dialogue
                setCurrentDialogueIndex((prevIndex) => prevIndex + 1);
            } else if (currentStepIndex + 1 < cutsceneSteps.length) {
                // Proceed to next cutscene step
                setCurrentStepIndex((prevIndex) => prevIndex + 1);
                setCurrentDialogueIndex(0);
            } else {
                // Cutscene over
                onCutsceneEnd();
            }
            setDisplayedText('');
        };

        const handleClick = () => {

            if (imagesLoaded) {
                if (isTyping) {
                    const currentStep = cutsceneSteps[currentStepIndex];
                    const dialogue =
                        currentStep.dialogues && currentStep.dialogues[currentDialogueIndex]
                            ? currentStep.dialogues[currentDialogueIndex]
                            : '';
                    setDisplayedText(dialogue);
                    setIsTyping(false);
                    if (typingIntervalRef.current) {
                        clearTimeout(typingIntervalRef.current);
                        typingIntervalRef.current = null;
                    }
                } else {
                    proceedToNextStep();
                }
            }
        };

        if (currentStepIndex === 0) {
            setTimeout(
                function () {
                    setCurrentStepIndex(1);
                }, 0);
        }


        if (!cutsceneSteps || cutsceneSteps.length === 0) {
            // No cutscene data; proceed to game
            onCutsceneEnd();
            return null;
        }


        const currentStep = cutsceneSteps[currentStepIndex];

        // if (currentStep === 0) {
        //     setTimeout(proceedToNextStep, 500);
        // }

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
            <div className="cutscene" onClick={handleClick}>



                    <>
                        {currentStep.type === 'image' && (
                            <img src={currentStep.src} alt="Cutscene" className="cutscene-image"/>
                        )}
                        {currentStep.type === 'video' && (
                            <video src={currentStep.src} autoPlay onEnded={proceedToNextStep}/>
                        )}
                        {currentStep.dialogues && (
                            <div className="dialogue-box">
                                <p>{displayedText}</p>
                            </div>
                        )}

                        {(!isTyping) && (
                            <div className="click-to-continue">Click anywhere to continue</div>
                        )}

                    </>





            </div>
        );
    }


}

export default Cutscene;
