import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './ui/Main';

import { Engine } from './game/engine';
import { World } from './game/entities';
import { DefaultEventManager } from './game/events';
import { EventManagerProvider } from './ui/context/EventManagerContext';

const eventManager = new DefaultEventManager();
const world = new World();
const engine = new Engine(eventManager, world);
engine.run();

ReactDOM.render(
  <EventManagerProvider eventManager={eventManager}>
    <Main />
  </EventManagerProvider>,
  document.getElementById('root'),
);
