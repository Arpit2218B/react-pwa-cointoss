import React, { useState } from 'react';
import './Game.css';

const Game = () => {
    const [ score, setScore ] = useState(1);
    const [ choice, setChoice ] = useState(null);
    const [ gameState, setGameState ] = useState('playing');
    const [ updateStatus, setUpdateStatus ] = useState('');

    const clickHandler = () => {
        if(choice == null || gameState == 'gameover')
            return;
        let t = Math.round(Math.random(1, 10) * 10);
        if(t%2 == 0)
            t = 'heads';
        else
            t = 'tails';
        if(t == choice) {
            setScore(score*2)
            setGameState(t);
        }
        else
            setGameState('gameover');
    }

    const restart = () => {
        setScore(1);
        setGameState('playing');
        setChoice(null);
        setUpdateStatus('');
    }

    const uploadScore = () => {
        setUpdateStatus('Uploading score ...')
        // if(score > 2)
        //     setUpdateStatus('No internet connection');
        // else
        //     setUpdateStatus('Score uploaded');
    }

    return (
        <div className="game">
            { gameState == 'gameover' ? (
                <div>
                    <h1>Game Over</h1>
                    <h4>Score : {score}</h4>
                    <input placeholder="Enter your username"></input>
                    <div>
                        <button onClick={uploadScore}>Upload score</button>
                        <button onClick={restart}>Restart</button>
                    </div>
                    <span>{updateStatus}</span>
                </div>
            ) 
            :
            (
                <div>
                    <div>
                        <h2>Score : {score}</h2>
                    </div>
                    <div className="choice">
                        <span className={choice == 'heads' ? 'selected' : ''} onClick={() => setChoice('heads')}>Heads</span>
                        <span className={choice == 'tails' ? 'selected' : ''} onClick={() => setChoice('tails')}>Tails</span>
                    </div>
                    <div className="result">
                        <span>{gameState}</span>
                    </div>
                    <button disabled={choice == null || gameState == 'gameover'} onClick={clickHandler}>Toss the coin</button>
                </div>
            )}
        </div>
    )
}

export default Game;