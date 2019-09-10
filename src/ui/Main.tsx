import React from 'react';
import Button from './Button';
import './Main.css';

interface IMainProps {
  emitEvent(event: string): void;
}

const Main = ({ emitEvent }: IMainProps) => {
  return (
    <div id="game">
      <Button id="left" text="LEFT" eventName="left" onClick={emitEvent} />
      <Button id="up" text="UP" eventName="up" onClick={emitEvent} />
      <Button id="right" text="RIGHT" eventName="right" onClick={emitEvent} />
      <Button id="down" text="DOWN" eventName="down" onClick={emitEvent} />
      <Button id="action" text="ACTION" eventName="action" onClick={emitEvent} />
    </div>
  );
};

export default Main;
