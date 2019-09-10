import { IEntity } from './entity';

export class World implements IEntity {
  public update(delta: number) {
    // console.log(`Updating World at ${delta}ms`);
  }
}
