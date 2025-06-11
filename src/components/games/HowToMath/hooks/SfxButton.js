// src/components/games/HowToMath/common/SfxButton.js
import React, { useContext } from 'react';
import { ClickAudioContext } from '../HowToMath';

export default function SfxButton({ onClick, children, ...props }) {
    const playClick = useContext(ClickAudioContext);
    const handle = (e) => {
        playClick();
        if (onClick) onClick(e);
    };
    return (
        <button {...props} onClick={handle}>
            {children}
        </button>
    );
}
