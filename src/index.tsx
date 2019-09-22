import React from 'react';
import { render } from 'react-dom';
import './index.css';
import LevelsCreator from './sagas/LevelsCreator.js';

render(
    <LevelsCreator />,
  document.getElementById('root'),
);
