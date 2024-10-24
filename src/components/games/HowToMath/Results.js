import React, {useEffect, useState} from 'react';
import './HowToMath.css';
import './styles/Results.css';

import leviHead1 from './assets/dog_head1.png';
import leviHead2 from './assets/dog_head2.png';
import leviHead3 from './assets/dog_head3.png';
import leviHead4 from './assets/dog_head4.png';

import cheebaHead1 from './assets/cheebaHead1.png';
import cheebaHead2 from './assets/cheebaHead2.png';
import cheebaHead3 from './assets/cheebaHead3.png';
import cheebaHead4 from './assets/cheebaHead4.png';

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
            if (x === 2) {
                onMenu();
            }
        }, 500);
    }

    return (

        <div className="results">

            <div className="dog-heads">
                <div className="carousel-container">
                    {/* First Carousel Row (Moving Right) */}
                    <div className="carousel-row move-right">
                        <div className="carousel">
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                            {/* Repeat images to create seamless animation */}
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                        </div>
                    </div>

                    {/* Second Carousel Row (Moving Left) */}
                    <div className="carousel-row move-left">
                        <div className="carousel">
                            {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                <img key={index} src={src} alt={`Cheeba Head ${index + 1}`}/>
                            ))}
                            {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                <img key={index + 4} src={src} alt={`Cheeba Head ${index + 1}`}/>
                            ))}
                        </div>
                    </div>

                    {/* Third Carousel Row (Moving Right, Offset) */}
                    <div className="carousel-row move-right offset">
                        <div className="carousel">
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                        </div>
                    </div>

                    {/* Fourth Carousel Row (Moving Left, Offset) */}
                    <div className="carousel-row move-left offset">
                        <div className="carousel">
                            {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                <img key={index} src={src} alt={`Cheeba Head ${index + 1}`}/>
                            ))}
                            {[cheebaHead1, cheebaHead2, cheebaHead3, cheebaHead4].map((src, index) => (
                                <img key={index + 4} src={src} alt={`Cheeba Head ${index + 1}`}/>
                            ))}
                        </div>
                    </div>

                    {/* Fifth Carousel Row (Moving Right) */}
                    <div className="carousel-row move-right">
                        <div className="carousel">
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                            {[leviHead1, leviHead2, leviHead3, leviHead4].map((src, index) => (
                                <img key={index + 4} src={src} alt={`Levi Head ${index + 1}`}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <h2>RESULTS</h2>
            <div className={`flash2 ${flash2Exit ? 'exit' : ''}`}></div>

            <div className = "p1"> YOUR RANK:
                {/*{getRank(percent)}*/}
            </div>

            {failed ? (
                <div className="p2"> YOU FAILED... </div>
            ) : (
                <div className="p2"> YOU PASSED! </div>
            )}

            <p>
                You scored {data.score} out of {data.total}, or {Math.round(percent * 1000) / 10}%.

            </p>


            {!failed ? (
                <button className="continue-btn" onClick={() => resultsButton(0)}>CONTINUE</button>


            ) : (
                <button className="continue-btn" onClick={() => resultsButton(2)}>MENU</button>

            )}

            <button className="retry-btn" onClick={() => resultsButton(1)}>RETRY</button>


        </div>
    );
}

export default Results;