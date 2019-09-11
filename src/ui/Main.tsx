import React from 'react';
import { useEvents } from './context';

import './Main.css';

const Main = () => {
  const events = useEvents();
  return (
    <div id="game">
      <button id="left" onClick={() => events.emit('left')}>
        Left
      </button>
      <button id="up" onClick={() => events.emit('up')}>
        Up
      </button>
      <button id="right" onClick={() => events.emit('right')}>
        Right
      </button>
      <button id="down" onClick={() => events.emit('down')}>
        Down
      </button>
      <button id="action" onClick={() => events.emit('action')}>
        Use
      </button>
    </div>
  );
};

export default Main;
