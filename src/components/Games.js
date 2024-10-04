
import '../App.css';
import './styles/Games.css';

import React from 'react';
import logoImage from "./images/log logo.png";
import constructImage from './images/construct.png';

function Games() {
    return (
        <div className="games">


            <h4> GAMES </h4>

            <div className="link">
                <a href="/LOG/games/snake">SNAKE (but harder)</a>
            </div>

            <div className="link">
                <a href="/LOG/games/howtomath">HOW TO MATH</a>
            </div>

            <div id="construct" style={{textAlign: 'center'}}>
                <img src={constructImage} alt="Under Construction" height={220}/>
            </div>

            <h6><b> UNDER <br/> CONSTRUCTION </b></h6>

        </div>

    );
}

export default Games;