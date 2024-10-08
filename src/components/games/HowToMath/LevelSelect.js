// src/components/games/HowToMath/LevelSelect.js

import React, {useState} from 'react';
import './HowToMath.css';
import './styles/LevelSelect.css';


function LevelSelect({ onLevelSelect }) {

    const [flash2Exit, setFlash2Exit] = useState(false);

    const goBack = () => {
        setFlash2Exit(true);
        setTimeout(() => {
            onLevelSelect(0);
        }, 500);
    };

    return (

        <div className="level-select">


            <h2>TRIAL SELECT</h2>

            <div className={`flash2 ${flash2Exit ? 'exit' : ''}`}></div>


            <button onClick={goBack}>BACK</button>
            <button onClick={() => onLevelSelect(1)}>Intro Trial</button>
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
