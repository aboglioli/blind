import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { EventManagerProvider } from './ui/context';
import Main from './ui/Main';

import startGame from './game';
import { DefaultEventManager } from './game/managers';

async function bootstrap() {
  startGame();

  const eventManager = DefaultEventManager.getInstance();

  ReactDOM.render(
    <EventManagerProvider events={eventManager}>
      <Main />
    </EventManagerProvider>,
    document.getElementById('root'),
  );
}

bootstrap();
