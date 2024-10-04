// src/components/games/HowToMath/Menu.js

import React from 'react';

function Menu({ onStart }) {
    return (
        <div className="menu">

            <button onClick={onStart}>Start Game</button>
            {/* You can add more buttons here for settings, instructions, etc. */}
        </div>
    );
}

export default Menu;
