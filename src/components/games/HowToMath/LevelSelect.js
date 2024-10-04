// src/components/games/HowToMath/LevelSelect.js

import React from 'react';
import './HowToMath.css';
function LevelSelect({ onLevelSelect }) {
    return (
        <div className="level-select">
            <h2>Select Level</h2>
            <button onClick={() => onLevelSelect(1)}>Level 1</button>
            <button onClick={() => onLevelSelect(2)}>Level 2</button>
            {/* More levels */}
        </div>
    );
}

export default LevelSelect;
