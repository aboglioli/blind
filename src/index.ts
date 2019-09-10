import { Engine } from './engine';
import { World } from './entities';
import { EventListener } from './events';

export function run() {
  const eventListener = new EventListener();
  const world = new World();
  const engine = new Engine(eventListener, world);
  engine.run();
}
