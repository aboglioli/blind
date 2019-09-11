import { IEntity } from '../entities';
import { IEventManager } from './event';
import { IAudioManager } from './audio';

export class Engine implements IEntity {
  private lastTime = 0.0;

  constructor(
    private eventManager: IEventManager,
    private audioManager: IAudioManager,
  ) {
    this.audioManager.addSound('steps', 'steps.mp3');
    this.audioManager.playSound('steps');

    const id = this.eventManager.subscribeAll(event => {
      console.log('Event:', event);
    });

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
