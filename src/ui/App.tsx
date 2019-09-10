import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div id="game">
      <button id="left">LEFT</button>
      <button id="up">UP</button>
      <button id="right">RIGHT</button>
      <button id="down">DOWN</button>

      <button id="action">ACTION</button>
    </div>
  );
};

export default App;
