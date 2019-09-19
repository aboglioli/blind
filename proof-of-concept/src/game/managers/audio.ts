import { Howl } from 'howler';

import config from '../config';

export interface IProperties extends Partial<IHowlProperties> {}

export interface IPlayOptions {
  pos?: {
    x?: number;
    y?: number;
    z?: number;
  };
  volume?: number;
}

export interface IAudioManager {
  load(name: string, file: string, properties?: IProperties): void;
  play(name: string, sprite?: string, options?: IPlayOptions): void;
  stop(name: string): void;
}

export class DefaultAudioManager implements IAudioManager {
  // Singleton
  public static getInstance(): IAudioManager {
    if (!this.instance) {
      this.instance = new DefaultAudioManager();
    }

    return this.instance;
  }
  private static instance: IAudioManager;

  // Implementation
  private sounds: { [name: string]: Howl } = {};

  private constructor() {}

  public async load(name: string, file: string, properties?: IProperties) {
    return new Promise((resolve, reject) => {
      if (this.sounds[name]) {
        return reject(new Error('Audio file already exists'));
      }

      this.sounds[name] = new Howl({
        ...properties,
        src: [`${config.assetsDir}/${file}`],
      });

      this.sounds[name].on('load', () => {
        resolve();
      });
    });
  }

  public async play(name: string, sprite?: string, options?: IPlayOptions) {
    const { pos, volume }: IPlayOptions = options || {};

    return new Promise((resolve, reject) => {
      const sound = this.sounds[name];

      if (sound) {
        if (pos) {
          sound.pos(pos.x || 0, pos.y || 0, pos.z || 0);
        }

        if (volume) {
          sound.volume(volume);
        }

        sound.loop();

        if (sprite) {
          sound.play(sprite);
        } else {
          sound.play();
        }

        sound.on('end', () => {
          resolve();
        });
      }
    });
  }

  public stop(name: string) {
    if (this.sounds[name]) {
      this.sounds[name].stop();
    }
  }
}
