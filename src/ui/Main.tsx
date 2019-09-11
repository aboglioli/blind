import React from 'react';
import Button from './Button';
import { useEventListener } from './context/useEventListener';
import './Main.css';
import { EventEmitter } from 'events';

interface IMainProps {
  emitEvent(event: string): void;
}

const Main = ({ emitEvent }: IMainProps) => {
  const events = useEventListener();
  return (
    <div id="game">
      <button id="left" onClick={() => events.emitEvent("LEFT")} />
      <button id="up" onClick={() => events.emitEvent("UP")} />
      <button id="right" onClick={() => events.emitEvent("RIGHT")} />
      <button id="down" onClick={() => events.emitEvent("DOWN")} />
      <button id="action" onClick={() => events.emitEvent("ACTION")} />
    </div>
  );
};

export default Main;
