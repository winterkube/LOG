import React from 'react';
import './HowToMath.css';
import './styles/Results.css';
function Results({ data, onContinue, onRetry, onMenu }) {
    return (
        <div className="results">
            <h2>Results</h2>
            <p>
                You scored {data.score} out of {data.total}
            </p>
            <button onClick={onContinue}>Continue</button>
            <button onClick={onRetry}>Retry</button>
            <button onClick={onMenu}>Menu</button>
        </div>
    );
}

export default Results;