import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './ui/Main';

import { Engine } from './game/engine';
import { DefaultEventManager } from './game/events';
import { EventManagerProvider } from './ui/context/EventManagerContext';

const eventManager = DefaultEventManager.getInstance();
const engine = new Engine(eventManager);
engine.run();

ReactDOM.render(
  <EventManagerProvider eventManager={eventManager}>
    <Main />
  </EventManagerProvider>,
  document.getElementById('root'),
);
