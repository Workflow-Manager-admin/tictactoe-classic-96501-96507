import React from 'react';
import Square from './Square';
import './Board.css';

// PUBLIC_INTERFACE
/**
 * Board component represents the 3x3 grid for TicTacToe
 * @param {object} props - Component props
 * @param {Array<string|null>} props.squares - Array of 9 items representing the board state
 * @param {function} props.onClick - Function called when a square is clicked, receives square index
 * @returns {JSX.Element} - A 3x3 grid of Square components
 */
function Board({ squares, onClick }) {
  // Render a single square at the given index
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
