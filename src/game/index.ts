import {
  Engine,
  IEventEmitter,
  DefaultEventManager,
  DefaultAudioManager,
} from './managers';

export default function bootstrap(): IEventEmitter {
  const eventManager = DefaultEventManager.getInstance();
  const audioManager = DefaultAudioManager.getInstance();

  const engine = new Engine(eventManager, audioManager);
  engine.run();

  return eventManager;
}
