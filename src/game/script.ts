import { DefaultAudioManager, selectAlternative } from './managers';

const sleep = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

const audio = DefaultAudioManager.getInstance();

const wakeUp = async () => {
  // Wake up
  await sleep(2000);
  await audio.play('voices', 'wakeUp', { pos: { x: -0.1, y: 1 } });

  let cont = 0;
  let alternatives = [
    { id: 0, text: 'Levantarse de la cama' },
    { id: 1, text: 'Permanecer en la cama' },
  ];

  while (true) {
    const alt = await selectAlternative(alternatives);

    if (alt.id === 0) {
      break;
    } else {
      if (cont % 2 === 0) {
        await audio.play('voices', 'pelotudo1');
      } else {
        await audio.play('voices', 'pelotudo2');
        alternatives = [alternatives[0]];
      }
    }

    cont++;
  }

  await audio.play('sounds', 'wakeUp', { volume: 0.6 });
};

const letsGo = async () => {
  // Let's go
  await audio.play('voices', 'letsGo', { pos: { x: 0, y: 0, z: 0 } });
  await selectAlternative([{ id: 0, text: 'Ir hacia la puerta' }]);
};

const guards = async () => {
  // Guards
  await audio.play('sounds', 'cat', { pos: { x: -1, y: 1 } });
  await audio.play('sounds', 'dog', { pos: { x: 1, y: 1 } });
  await audio.play('voices', 'guards', { pos: { x: 1, y: 0 } });

  await selectAlternative([{ id: 0, text: 'Matar a las bestias' }]);

  await audio.play('voices', 'guardsKilled');
};

const dragon = async () => {
  // Dragon
  await Promise.all([
    audio.play('sounds', 'dragon', { pos: { x: 0, y: 0 } }),
    audio.play('voices', 'dragon', { pos: { x: 1 } }),
  ]);

  await selectAlternative([{ id: 0, text: 'Acercarse al dragón' }]);
};

const jackson = async () => {
  // Jackson
  await audio.play('voices', 'jackson');

  for (let i = 0; i < 2 * Math.PI; i = i + (1 / 8) * Math.PI) {
    const x = Math.cos(i) * 2;
    const y = Math.sin(i) * 2;

    audio.play('sounds', 'jackson', { pos: { x, y } });
    await sleep(1000);
  }

  await selectAlternative([{ id: 0, text: 'Matar a Michael Jackson' }]);
};

const door = async () => {
  await audio.play('voices', 'door', { pos: { x: 1, y: 0 } });
  await selectAlternative([{ id: 0, text: 'Irse' }]);

  audio.play('sounds', 'steps', { pos: { x: 0, y: 0 } });
  await sleep(2000);
  await audio.play('voices', 'leave', { pos: { x: 1, y: 0 } });

  audio.play('sounds', 'door', { pos: { x: 0, y: 0 } });
};

export default async function() {
  // Environment sounds
  audio.play('environment', 'drips', { volume: 0.1, pos: { z: 1 } });
  audio.play('environment', 'thunders', { volume: 0.1, pos: { z: 1 } });

  await wakeUp();
  await letsGo();
  await guards();
  await dragon();
  await jackson();
  await door();
}
