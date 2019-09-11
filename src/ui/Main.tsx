import React from 'react';
import { useEvents } from './context/useEventManager';
import './Main.css';

const Main = () => {
  const events = useEvents();
  return (
    <div id="game">
      <button id="left" onClick={() => events.emit('LEFT')}>
        Left
      </button>
      <button id="up" onClick={() => events.emit('UP')}>
        Up
      </button>
      <button id="right" onClick={() => events.emit('RIGHT')}>
        Right
      </button>
      <button id="down" onClick={() => events.emit('DOWN')}>
        Down
      </button>
      <button id="action" onClick={() => events.emit('ACTION')}>
        Use
      </button>
    </div>
  );
};

export default Main;
