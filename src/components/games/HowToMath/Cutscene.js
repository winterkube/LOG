// src/components/games/HowToMath/Cutscene.js

import React, { useState, useEffect, useRef } from 'react';
import './styles/Cutscene.css';

function Cutscene({ onCutsceneEnd, cutsceneSteps }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    const typingIntervalRef = useRef(null);
    const preloadedImagesRef = useRef({});

    // Preload images when the component mounts
    useEffect(() => {
        preloadAssets();
    }, []);

    const preloadAssets = () => {
        const imageSources = cutsceneSteps
            .filter((step) => step.type === 'image')
            .map((step) => step.src);

        let loadedImagesCount = 0;
        const totalImages = imageSources.length;

        if (totalImages === 0) {
            setAssetsLoaded(true);
            return;
        }

        imageSources.forEach((src) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
                preloadedImagesRef.current[src] = img;
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    setAssetsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${src}`);
                loadedImagesCount++;
                if (loadedImagesCount === totalImages) {
                    setAssetsLoaded(true);
                }
            };
        });
    };



    useEffect(() => {
        if (assetsLoaded) {
            startTyping();
        }
    }, [assetsLoaded, currentStepIndex, currentDialogueIndex]);

    const startTyping = () => {
        const currentStep = cutsceneSteps[currentStepIndex];
        let dialogue = '';

        if (
            currentStep.dialogues &&
            currentDialogueIndex < currentStep.dialogues.length
        ) {
            dialogue = currentStep.dialogues[currentDialogueIndex];
        }

        // If dialogue is undefined or null, set it to an empty string
        if (!dialogue) {
            dialogue = '';
        }

        let currentCharIndex = -1;
        setIsTyping(true);
        setDisplayedText('');

        if (typingIntervalRef.current) {
            clearTimeout(typingIntervalRef.current);
        }

        const typeNextChar = () => {
            if (currentCharIndex < dialogue.length - 1) {
                setDisplayedText((prevText) => prevText + dialogue[currentCharIndex]);
                currentCharIndex++;
                typingIntervalRef.current = setTimeout(typeNextChar, 50); // Adjust typing speed here
            } else {
                setIsTyping(false);
                typingIntervalRef.current = false;
            }
        };

        typeNextChar();
    };

    const proceedToNextStep = () => {
        if (typingIntervalRef.current) {
            clearTimeout(typingIntervalRef.current);
            typingIntervalRef.current = null;
        }
        const currentStep = cutsceneSteps[currentStepIndex];
        if (
            currentStep.dialogues &&
            currentDialogueIndex + 1 < currentStep.dialogues.length
        ) {
            setCurrentDialogueIndex((prevIndex) => prevIndex + 1);
        } else if (currentStepIndex + 1 < cutsceneSteps.length) {
            setCurrentStepIndex((prevIndex) => prevIndex + 1);
            setCurrentDialogueIndex(0);
        } else {
            onCutsceneEnd();
        }
        setDisplayedText('');
    };

    const handleClick = () => {
        if (!assetsLoaded) {
            // Do nothing while assets are loading
            return;
        }

        if (isTyping) {
            const currentStep = cutsceneSteps[currentStepIndex];
            let dialogue = '';

            if (
                currentStep.dialogues &&
                currentDialogueIndex < currentStep.dialogues.length
            ) {
                dialogue = currentStep.dialogues[currentDialogueIndex];
            }

            if (!dialogue) {
                dialogue = '';
            }

            setDisplayedText(dialogue);
            setIsTyping(false);
            if (typingIntervalRef.current) {
                clearTimeout(typingIntervalRef.current);
                typingIntervalRef.current = null;
            }
        } else {
            proceedToNextStep();
        }
    };

    if (!cutsceneSteps || cutsceneSteps.length === 0) {
        onCutsceneEnd();
        return null;
    }

    if (!assetsLoaded) {
        return (
            <div className="loading">
                <p>Loading...</p>
            </div>
        );
    }

    const currentStep = cutsceneSteps[currentStepIndex];

    return (
        <div className="cutscene" onClick={handleClick}>
            {currentStep.type === 'image' && (
                <>
                    <img
                        src={currentStep.src}
                        alt="Cutscene"
                        className="cutscene-image"
                    />
                </>
            )}
            {currentStep.type === 'video' && (
                <video src={currentStep.src} autoPlay onEnded={proceedToNextStep} />
            )}
            {currentStep.dialogues && (
                <div className="dialogue-box">
                    <p>{displayedText}</p>
                </div>
            )}
            {!isTyping && (
                <div className="click-to-continue">Click anywhere to continue</div>
            )}
        </div>
    );
}

export default Cutscene;
