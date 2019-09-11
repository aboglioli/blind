import { IEntity } from './entities';
import { IEventManager } from './events';

import { Howl } from 'howler';

export class Engine implements IEntity {
  private lastTime = 0.0;
  private steps: Howl;

  constructor(private eventManager: IEventManager) {
    this.steps = new Howl({
      src: ['assets/steps.mp3'],
    });

    const id = this.eventManager.subscribeAll(event => {
      console.log('Event:', event);
    });

    this.eventManager.subscribe('left', () => {
      console.log('Player to left');
      this.eventManager.unsubscribe(id);
    });

  }

  public getEventManager(): IEventManager {
    return this.eventManager;
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
