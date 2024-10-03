// src/components/games/Snake.js

import React, { useRef, useEffect, useState } from 'react';
import SnakeLegendImg from '../images/snakelegend.png'; // Adjust the path as needed
import logoImage from "../images/log logo.png";

import '../../App.css';
import './Snake.css'; // Optional: Import CSS for styling

function Snake() {
    // Refs
    const canvasRef = useRef(null);

    // State variables
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [rank, setRank] = useState('');

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Game variables
        const grid = 16;
        const fps = 15;
        const frameDuration = 1000 / fps;
        let lastRender = 0;
        let requestId;

        const snake = {
            x: 160,
            y: 160,
            dx: grid,
            dy: 0,
            cells: [],
            maxCells: 4,
        };

        const fruit = {
            x: 320,
            y: 320,
        };

        let currentScore = 0;
        let currentHighScore = 0;
        let currentRank = '';
        let fruitnum = 0;
        let fruittype = '';

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // Game loop function
        function loop(timestamp) {
            requestId = requestAnimationFrame(loop);

            const delta = timestamp - lastRender;

            if (delta >= frameDuration) {
                lastRender = timestamp - (delta % frameDuration);

                update();
                draw();
            }
        }

        // Update function
        function update() {
            // Move snake
            snake.x += snake.dx;
            snake.y += snake.dy;

            // Wrap snake position
            if (snake.x < 0) {
                snake.x = canvas.width - grid;
            } else if (snake.x >= canvas.width) {
                snake.x = 0;
            }

            if (snake.y < 0) {
                snake.y = canvas.height - grid;
            } else if (snake.y >= canvas.height) {
                snake.y = 0;
            }

            // Keep track of where snake has been
            snake.cells.unshift({ x: snake.x, y: snake.y });

            // Remove cells as we move away from them
            if (snake.cells.length > snake.maxCells) {
                snake.cells.pop();
            }

            handleFruit();
            checkCollision();
        }

        // Draw function
        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw fruit
            drawFruit();

            // Draw snake
            context.fillStyle = 'green';
            snake.cells.forEach(function (cell) {
                context.fillRect(cell.x, cell.y, grid - 1, grid - 1);
            });

            // Update score and rank in state
            setScore(currentScore);
            setHighScore(currentHighScore);
            setRank(currentRank);
        }

        function handleFruit() {
            // Decide fruit type and set color
            if (fruitnum < 30) {
                fruittype = 'apple';
                context.fillStyle = 'red';
            } else if (fruitnum >= 30 && fruitnum < 60) {
                fruittype = 'grape';
                context.fillStyle = 'orchid';
            } else if (fruitnum >= 60 && fruitnum < 78) {
                if (snake.maxCells > 8) {
                    fruittype = 'orange';
                    context.fillStyle = 'orange';
                } else {
                    fruittype = 'kiwi';
                    context.fillStyle = 'greenyellow';
                }
            } else if (fruitnum >= 78 && fruitnum < 98) {
                fruittype = 'kiwi';
                context.fillStyle = 'greenyellow';
            } else if (fruitnum >= 98) {
                fruittype = 'acai';
                context.fillStyle = 'black';
            }

            // Check if snake ate the fruit
            if (snake.cells[0].x === fruit.x && snake.cells[0].y === fruit.y) {
                // Adjust snake length and score based on fruit type
                switch (fruittype) {
                    case 'apple':
                        snake.maxCells++;
                        break;
                    case 'grape':
                        snake.maxCells += 3;
                        break;
                    case 'orange':
                        snake.maxCells -= 5;
                        snake.cells.length = Math.max(snake.maxCells, 1);
                        break;
                    case 'kiwi':
                        snake.maxCells += 8;
                        break;
                    case 'acai':
                        snake.maxCells += 50;
                        break;
                    default:
                        break;
                }
                currentScore++;
                fruitnum = getRandomInt(0, 100);

                // Spawn new fruit
                fruit.x = getRandomInt(0, 25) * grid;
                fruit.y = getRandomInt(0, 25) * grid;
            }
        }

        function drawFruit() {
            context.fillRect(fruit.x, fruit.y, grid - 1, grid - 1);
        }

        function checkCollision() {
            for (let i = 1; i < snake.cells.length; i++) {
                if (
                    snake.cells[0].x === snake.cells[i].x &&
                    snake.cells[0].y === snake.cells[i].y
                ) {
                    resetGame();
                    break;
                }
            }
        }

        function resetGame() {
            // Update high score
            if (currentScore > currentHighScore) {
                currentHighScore = currentScore;
            }

            // Determine rank

            if (currentHighScore < 0) {
                currentRank = 'how tf did u get here';
            }

            if (currentHighScore === 0) {
                currentRank = '';
            } else if (currentHighScore < 10) {
                currentRank = 'you suck';
            } else if (currentHighScore < 20) {
                currentRank = 'you still suck';
            } else if (currentHighScore < 30) {
                currentRank = 'still kinda suck';
            } else if (currentHighScore < 45) {
                currentRank = '...yeah you still suck sorry';
            } else if (currentHighScore < 70) {
                currentRank = 'one day you wont suck';
            } else {
                currentRank = 'good job! you suck slightly less';
            }

            // Reset snake properties
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            currentScore = 0;

            // Reset fruit
            fruit.x = getRandomInt(0, 25) * grid;
            fruit.y = getRandomInt(0, 25) * grid;
        }

        // Keyboard event handlers
        function keydownHandler(e) {
            if (e.which === 37 && snake.dx === 0) {
                snake.dx = -grid;
                snake.dy = 0;
            } else if (e.which === 38 && snake.dy === 0) {
                snake.dy = -grid;
                snake.dx = 0;
            } else if (e.which === 39 && snake.dx === 0) {
                snake.dx = grid;
                snake.dy = 0;
            } else if (e.which === 40 && snake.dy === 0) {
                snake.dy = grid;
                snake.dx = 0;
            }

            // Prevent scrolling with arrow keys
            if (
                ['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].indexOf(
                    e.code
                ) > -1
            ) {
                e.preventDefault();
            }
        }

        // Add event listeners
        document.addEventListener('keydown', keydownHandler);

        // Start the game loop
        requestId = requestAnimationFrame(loop);

        // Cleanup function
        return () => {
            // Cancel animation frame
            cancelAnimationFrame(requestId);

            // Remove event listeners
            document.removeEventListener('keydown', keydownHandler);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (


        <div className = "snake" style={{textAlign: 'center'}}>

            <div id="logo" style={{textAlign: 'center'}}>
                <img src={logoImage} alt="Logo" height={250}/>
            </div>

            <h4> SNAKE (but harder) </h4>

            <canvas
                ref={canvasRef}
                width="400"
                height="400"
                id="game"
                style={{border: '1px solid black'}}
            ></canvas>
            <h1>Score = {score}</h1>
            <h1>High Score = {highScore}</h1>
            <div
                id="rank"
                style={{
                    fontFamily: "'Lexend', serif",
                    fontSize: '20px',
                    color: 'lightgray',
                    textAlign: 'center',
                }}
            >
                {rank}
            </div>
            <div style={{textAlign: 'center'}}>
                <img src={SnakeLegendImg} height="400" alt="Snake Legend"/>
            </div>
        </div>
    );
}

export default Snake;
