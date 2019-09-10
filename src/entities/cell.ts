export interface IPoint {
  x: number;
  y: number;
}

export class Cell implements IPoint {
  constructor(public x: number, public y: number) {}

  public set(point: Partial<IPoint>) {
    if (point.x) {
      this.x = point.x;
    }

    if (point.y) {
      this.y = point.y;
    }
  }

  public get(): IPoint {
    return { x: this.x, y: this.y };
  }

  public move(point: Partial<IPoint>) {
    if (point.x) {
      this.x += point.x;
    }

    if (point.y) {
      this.y += point.y;
    }
  }
}
