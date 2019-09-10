import { IEntity } from './entities';
import { Button, EventListener } from './events';

import { Howl } from 'howler';

export class Engine implements IEntity {
  private lastTime = 0.0;
  private steps: Howl;

  constructor(private eventListener: EventListener, private world: IEntity) {
    this.steps = new Howl({
      src: ['assets/steps.mp3'],
    });

    this.eventListener.addListener((button: Button) => {
      this.steps.stop();
      const id = this.steps.play();

      if (button === Button.Left) {
        this.steps.pos(-2, 0, 0, id);
      } else if (button === Button.Up) {
        this.steps.pos(0, 2, 0, id);
      } else if (button === Button.Right) {
        this.steps.pos(2, 0, 0, id);
      } else if (button === Button.Down) {
        this.steps.pos(0, -2, 0, id);
      }

    });
  }

  public update(delta: number) {
    this.world.update(delta);
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
