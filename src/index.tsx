import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './ui/Main';

import { Engine } from './game/engine';
import { World } from './game/entities';
import { EventListener } from './game/events';

const eventListener = new EventListener();
const world = new World();
const engine = new Engine(eventListener, world);
engine.run();

ReactDOM.render(<Main emitEvent={eventListener.emitEvent} />, document.getElementById('root'));
