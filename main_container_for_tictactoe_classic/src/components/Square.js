import React from 'react';

// PUBLIC_INTERFACE
/**
 * Square component represents an individual cell in the TicTacToe grid
 * @param {object} props - Component props
 * @param {string|null} props.value - The value to display in the square (X, O, or null)
 * @param {function} props.onClick - Function to call when the square is clicked
 * @returns {JSX.Element} - A button element representing a square
 */
function Square({ value, onClick }) {
  return (
    <button 
      className="square" 
      onClick={onClick}
      aria-label={value ? `Square marked with ${value}` : "Empty square"}
    >
      {value}
    </button>
  );
}

export default Square;
