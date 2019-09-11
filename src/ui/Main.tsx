import React from 'react';
import { useEventManager } from './context/useEventManager';
import './Main.css';

const Main = () => {
  const events = useEventManager();
  return (
    <div id="game">
      <button id="left" onClick={() => events.emitEvent('LEFT')}>Left</button>
      <button id="up" onClick={() => events.emitEvent('UP')}>Up</button>
      <button id="right" onClick={() => events.emitEvent('RIGHT')}>Right</button>
      <button id="down" onClick={() => events.emitEvent('DOWN')}>Down</button>
      <button id="action" onClick={() => events.emitEvent('ACTION')}>Use</button>
    </div>
  );
};

export default Main;
