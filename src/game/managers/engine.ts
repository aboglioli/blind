import { IAudioManager } from './audio';
import { IEventManager } from './event';

export class Engine {
  private lastTime = 0.0;

  constructor(
    private eventManager: IEventManager,
    private audioManager: IAudioManager,
  ) {
    this.audioManager.loadSound('steps', 'steps.mp3');
    this.audioManager.playSound('steps');

    // Pattern matching
    const id = this.eventManager.subscribe('ri*', event => {
      console.log('Event:', event);
    });

    // Full match
    this.eventManager.subscribe('left', () => {
      console.log('Player to left');
      this.eventManager.unsubscribe(id);
    });
  }

  public update(delta: number) {
    // TODO: Is it necessary?
  }

  public frame = (time: number) => {
    const delta = time - this.lastTime;
    this.update(delta);
    this.lastTime = time;
    requestAnimationFrame(this.frame);
  };

  public run() {
    requestAnimationFrame(this.frame);
  }
}
