import React from 'react';

import { IAlternative } from '../game/managers';
import './Alternative.css';

interface IAlternativeProps extends IAlternative {
  onSelect: () => void;
}

const Alternative = ({ text, onSelect }: IAlternativeProps) => {
  return (
    <button className="alternative" onClick={onSelect}>
      {text}
    </button>
  );
};

export default Alternative;
