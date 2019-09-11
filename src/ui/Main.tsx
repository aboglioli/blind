import React from 'react';
import { useEventManager } from './context/useEventManager';
import './Main.css';

const Main = () => {
  const events = useEventManager();
  return (
    <div id="game">
      <button id="left" onClick={() => events.emitEvent('LEFT')} />
      <button id="up" onClick={() => events.emitEvent('UP')} />
      <button id="right" onClick={() => events.emitEvent('RIGHT')} />
      <button id="down" onClick={() => events.emitEvent('DOWN')} />
      <button id="action" onClick={() => events.emitEvent('ACTION')} />
    </div>
  );
};

export default Main;
