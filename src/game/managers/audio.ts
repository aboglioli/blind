import { Howl } from 'howler';

import config from '../config';

export interface IAudioManager {
  loadSound(name: string, file: string): void;
  playSound(name: string): void;
  stopSound(name: string): void;
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

  public loadSound(name: string, file: string) {
    if (this.sounds[name]) {
      throw new Error('Audio file already exists');
    }

    this.sounds[name] = new Howl({
      src: [`${config.assetsDir}/${file}`],
    });
  }

  public playSound(name: string) {
    if (this.sounds[name]) {
      this.sounds[name].play();
    }
  }

  public stopSound(name: string) {
    if (this.sounds[name]) {
      this.sounds[name].stop();
    }
  }
}
