import React from 'react';
import './App.css';
import Game from './components/Game';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KAVIA AI
            </div>
            <span className="nav-title">TicTacToe Classic</span>
          </div>
        </div>
      </nav>

      <main>
        <div className="container">
          <div className="game-container">
            <Game />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;