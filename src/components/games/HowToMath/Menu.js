// src/components/games/HowToMath/Menu.js

import React from 'react';

function Menu({ onStart }) {
    return (
        <div className="menu">
            <h1>HOW TO MATH</h1>
            <h2> by WinterKube </h2>
            <button onClick={onStart}>Start Game</button>
            {/* You can add more buttons here for settings, instructions, etc. */}
        </div>
    );
}

export default Menu;
