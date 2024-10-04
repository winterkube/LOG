import React from 'react';
import './HowToMath.css';
function Results({ data, onRestart }) {
    return (
        <div className="results">
            <h2>Results</h2>
            <p>
                You scored {data.score} out of {data.total}
            </p>
            <button onClick={onRestart}>Back to Menu</button>
        </div>
    );
}

export default Results;