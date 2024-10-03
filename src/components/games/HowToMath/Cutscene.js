// src/components/games/HowToMath/Cutscene.js

import React, { useState, useEffect } from 'react';
import { Cutscenes } from './cutscenes/cutsceneData';

function Cutscene({ onCutsceneEnd, levelNumber }) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const cutsceneSteps = Cutscenes[levelNumber];

    useEffect(() => {
        if (cutsceneSteps && cutsceneSteps.length > 0) {
            handleDialogue();
        } else {
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
        let index = 0;
        setDisplayedText('');

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text[index]);
                index++;
            } else {
                clearInterval(typingInterval);
                setIsTyping(false);
            }
        }, 50); // Adjust typing speed here
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
        if (isTyping) {
            // Finish typing immediately
            const currentStep = cutsceneSteps[currentStepIndex];
            const dialogue = currentStep.dialogues[currentDialogueIndex];
            setDisplayedText(dialogue);
            setIsTyping(false);
        } else {
            proceedToNextStep();
        }
    };

    const currentStep = cutsceneSteps[currentStepIndex];

    return (
        <div className="cutscene" onClick={handleClick}>
            {currentStep.type === 'image' && (
                <img src={currentStep.src} alt="Cutscene" className="cutscene-image" />
            )}
            {currentStep.type === 'video' && (
                <video src={currentStep.src} autoPlay onEnded={proceedToNextStep} />
            )}
            {currentStep.dialogues && (
                <div className="dialogue-box">
                    <p>{displayedText}</p>
                </div>
            )}
            {!currentStep.dialogues && currentStep.type === 'image' && (
                <div className="click-to-continue">Click anywhere to continue</div>
            )}
        </div>
    );
}

export default Cutscene;
