import React from 'react';
import './HowToMath.css';
import './styles/Results.css';
function Results({ data, onContinue, onRetry, onMenu }) {

    // const rawPercent = data.score / data.total;
    // const rank = '???';
    const percent = Math.ceil((data.score / data.total) * 1000) / 1000; // rounds to nearest tenth of percent
    const failed = percent < 0.5;
    //

    function getRank(percent) {
            if (percent === 0) return 'MEGA F';
            if (0 < percent && percent < 0.5) return 'F';
            if (0.5 <= percent && percent< 0.6) return 'D';
            if (0.6 <= percent && percent< 0.7) return 'C';
            if (0.7 <= percent && percent< 0.8) return 'B';
            if (0.8 <= percent && percent < 0.9) return 'A';
            if (0.9 <= percent && percent < 1) return 'A+';
            if (percent === 1 && (data.score !== data.total))  return 'FLAWLESS (but not really)';
            if (percent === 1 && (data.score === data.total))  return 'FLAWLESS';
            return '???'
    }

    return (

        <div className="results">
            <h2>Results</h2>
            <p>
                You scored {data.score} out of {data.total}, or {Math.round(percent * 1000)/10}%.

            </p>

            {failed ? (
                <p> (u failed xd)</p>
            ) : (
                <p> u passed !</p>
            )}
            <p> Rank = {getRank(percent)}</p>

            <button onClick={onContinue}>Continue</button>
            <button onClick={onRetry}>Retry</button>
            <button onClick={onMenu}>Menu</button>
        </div>
    );
}

export default Results;