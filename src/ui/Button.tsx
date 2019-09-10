import React from 'react';

interface IButton {
  id: string;
  text: string;
  eventName: string;
  onClick(event: string): void;
}

const Button = ({ id, text, eventName, onClick }: IButton) => (
  <button id={id} onClick={() => onClick(eventName)}>
    {text}
  </button>
);

export default Button;
