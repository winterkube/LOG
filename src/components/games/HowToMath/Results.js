import React from 'react';
import './HowToMath.css';
import './styles/Results.css';
function Results({ data, onContinue, onRetry, onMenu }) {

    const percent = data.score / data.total;
    const failed = percent < 0.5;

    return (
        <div className="results">
            <h2>Results</h2>
            <p>
                You scored {data.score} out of {data.total}, or {percent * 100}%.

            </p>

            {failed ? (
                <p> (u failed xd)</p>
            ) : (
                <p> u passed !</p>
            )}


            <button onClick={onContinue}>Continue</button>
            <button onClick={onRetry}>Retry</button>
            <button onClick={onMenu}>Menu</button>
        </div>
    );
}

export default Results;