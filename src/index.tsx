import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './ui/Main';
import { EventManagerProvider } from './ui/context';

import startGame from './game';

const events = startGame();

ReactDOM.render(
  <EventManagerProvider events={events}>
    <Main />
  </EventManagerProvider>,
  document.getElementById('root'),
);
