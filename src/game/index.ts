import {
  DefaultAudioManager,
  DefaultEventManager,
  selectAlternative,
} from './managers';
import startStory from './script';

export default async function bootstrap() {
  const event = DefaultEventManager.getInstance();
  const audio = DefaultAudioManager.getInstance();

  // Load sounds
  await audio.load('voices', 'voices.mp3', {
    sprite: {
      wakeUp: [0, 14245],
      letsGo: [14245, 11078],
      guards: [25325, 6354],
      guardsKilled: [31677, 6112],
      dragon: [37789, 6404],
      jackson: [44193, 4632],
      door: [48825, 7019],
      pelotudo1: [55844, 3186],
      pelotudo2: [59030, 3452],
      leave: [62482, 3856],
    },
  });
  await audio.load('sounds', 'sounds.mp3', {
    sprite: {
      cat: [4900, 1791],
      dog: [6691, 6472],
      door: [48509, 2711],
      dragon: [13164, 16558],
      jackson: [29791, 1515],
      steps: [31263, 17272],
      wakeUp: [0, 4900],
    },
  });
  await audio.load('environment', 'environment.mp3', {
    loop: true,
    sprite: {
      drips: [0, 18000],
      thunders: [18573, 32875],
    },
  });

  event.emit('engine.ready');
  await event.subscribeAsync('ui.ready');

  // Main scripts using events for communication
  await selectAlternative([{ id: 0, text: 'Comenzar' }]);
  startStory();
}
