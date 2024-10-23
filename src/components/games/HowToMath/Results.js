import React, {useEffect, useState} from 'react';
import './HowToMath.css';
import './styles/Results.css';
function Results({ data, onContinue, onRetry, onMenu }) {

    const [flash2Exit, setFlash2Exit] = useState(false);

    // const rawPercent = data.score / data.total;
    // const rank = '???';
    const percent = Math.ceil((data.score / data.total) * 1000) / 1000; // rounds to nearest tenth of percent
    const failed = percent < 0.5;
    const levelNumber = data.levelNumber; // We need to pass levelNumber to Results

    useEffect(() => {
        if (!failed) {
            // Player passed the level
            const highestUnlockedLevel = parseInt(localStorage.getItem('highestUnlockedLevel')) || 1;
            if (levelNumber + 1 > highestUnlockedLevel) {
                localStorage.setItem('highestUnlockedLevel', levelNumber + 1);
            }
        }
    }, [failed, levelNumber]);

    function getRank(percent) {
            if (percent === 0) return 'SS (Severe Stupidity)';
            if (0 < percent && percent < 0.5) return 'S (Squirrelbrain)';
            if (0.5 <= percent && percent< 0.6) return 'A (Awful)';
            if (0.6 <= percent && percent< 0.7) return 'B (Bad)';
            if (0.7 <= percent && percent< 0.8) return 'C (Competent)';
            if (0.8 <= percent && percent < 0.9) return 'D (Dazzling)';
            if (0.9 <= percent && percent < 1) return 'E (Exceptional)';
            if (percent === 1 && (data.score !== data.total))  return 'F (FLAWLESS (but not really))';
            if (percent === 1 && (data.score === data.total))  return 'F (FLAWLESS)';
            return '???'
    }

    const resultsButton = (x) =>  {
        setFlash2Exit(true);
        setTimeout(() => {
            if (x === 0){
                onContinue();
            }
            if (x === 1) {
                onRetry();
            }
        }, 500);
    }

    return (

        <div className="results">


            <h2>RESULTS</h2>
            <div className={`flash2 ${flash2Exit ? 'exit' : ''}`}></div>


            <p>
                You scored {data.score} out of {data.total}, or {Math.round(percent * 1000) / 10}%.

            </p>

            {failed ? (
                <p> (u failed xd)</p>
            ) : (
                <p> u passed !</p>
            )}
            <p> Rank = {getRank(percent)}</p>

            <button className="continue-btn" onClick={() => resultsButton(0)}>CONTINUE</button>
            <button className="retry-btn" onClick={() => resultsButton(1)}>RETRY</button>
        </div>
    );
}

export default Results;