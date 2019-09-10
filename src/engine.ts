import { IEntity, World } from './entities';
import { Button, EventListener } from './events';

export class Engine implements IEntity {
  private lastTime = 0.0;

  constructor(private eventListener: EventListener, private world: IEntity) {
    this.eventListener.addListener((button: Button) => {
      // console.log(button);
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
