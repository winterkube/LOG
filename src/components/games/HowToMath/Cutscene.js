// src/components/games/HowToMath/Cutscene.js

import React, { useState, useEffect, useRef } from 'react';
import './styles/Cutscene.css';

function Cutscene({ onCutsceneEnd, cutsceneSteps }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const typingIntervalRef = useRef(null);



    useEffect(() => {
        setImageLoaded(false);
        setDisplayedText('');
        startTyping();
    }, [currentStepIndex, currentDialogueIndex]);

    const startTyping = () => {
        const currentStep = cutsceneSteps[currentStepIndex];
        const dialogue =
            currentStep.dialogues && currentStep.dialogues[currentDialogueIndex]
                ? currentStep.dialogues[currentDialogueIndex]
                : '';
        let currentCharIndex = 0;
        setIsTyping(true);

        if (typingIntervalRef.current) {
            clearTimeout(typingIntervalRef.current);
        }

        const typeNextChar = () => {
            if (currentCharIndex < dialogue.length) {
                setDisplayedText((prevText) => prevText + dialogue[currentCharIndex]);
                currentCharIndex++;
                typingIntervalRef.current = setTimeout(typeNextChar, 30); // Adjust typing speed here
            } else {
                setIsTyping(false);
                typingIntervalRef.current = null;
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
    };

    if (!cutsceneSteps || cutsceneSteps.length === 0) {
        onCutsceneEnd();
        return null;
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
                        onLoad={() => setImageLoaded(true)}
                    />
                    {!imageLoaded && (
                        <div className="loading-screen">
                            <p>Loading...</p>
                        </div>
                    )}
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
