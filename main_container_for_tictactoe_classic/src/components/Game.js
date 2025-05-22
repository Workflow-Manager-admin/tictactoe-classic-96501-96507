import React, { useState } from 'react';
import Board from './Board';
import './Game.css';

// Helper function to calculate the winner
const calculateWinner = (squares) => {
  // All possible winning lines (rows, columns, diagonals)
  const lines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6]  // diagonal top-right to bottom-left
  ];

  // Check each winning line
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    // If all three squares in a line have the same non-null value
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        winningLine: lines[i]
      };
    }
  }

  // Check if the game is a draw (all squares filled, no winner)
  if (squares.every(square => square !== null)) {
    return { winner: 'Draw' };
  }

  // No winner yet
  return null;
};

// PUBLIC_INTERFACE
/**
 * Game component is the main container for the TicTacToe game
 * Manages game state, player turns, and win conditions
 * @returns {JSX.Element} The complete TicTacToe game
 */
function Game() {
  // State for the board squares (9 squares, initially null)
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  // State for tracking if X is next (X goes first)
  const [xIsNext, setXIsNext] = useState(true);
  
  // Get current player
  const currentPlayer = xIsNext ? 'X' : 'O';
  
  // Calculate game status
  const gameStatus = calculateWinner(squares);

  /**
   * Handle a click on a square
   * @param {number} i - Index of the clicked square
   */
  const handleClick = (i) => {
    // If there's a winner or the square is already filled, ignore the click
    if (gameStatus?.winner || squares[i]) {
      return;
    }

    // Create a copy of the squares array
    const newSquares = [...squares];
    
    // Mark the square with the current player's symbol
    newSquares[i] = currentPlayer;
    
    // Update state
    setSquares(newSquares);
    setXIsNext(!xIsNext); // Toggle player
  };

  /**
   * Reset the game to its initial state
   */
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  // Determine the status message to display
  let statusMessage;
  if (gameStatus?.winner === 'Draw') {
    statusMessage = "Game ended in a draw!";
  } else if (gameStatus?.winner) {
    statusMessage = `Winner: ${gameStatus.winner}`;
  } else {
    statusMessage = `Next player: ${currentPlayer}`;
  }

  return (
    <div className="game">
      <h1 className="game-title">TicTacToe Classic</h1>
      
      <div className="game-status">
        {statusMessage}
      </div>
      
      <Board 
        squares={squares}
        onClick={handleClick}
      />
      
      <button 
        className="btn btn-large reset-button" 
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}

export default Game;
