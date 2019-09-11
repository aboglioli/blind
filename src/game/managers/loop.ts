export type Runner = (delta: number) => void;

export interface ILoopManager {
  run(cb: Runner): void;
  stop(): void;
}

export class LoopManager {
  // Singleton
  public static getInstance(): ILoopManager {
    if (!this.instance) {
      this.instance = new LoopManager();
    }
    return this.instance;
  }
  private static instance: ILoopManager;

  // Implementation
  private running = false;
  private lastTime = 0.0;

  private constructor() {}

  public run(cb: Runner) {
    const mainLoop = (time: number) => {
      const delta = time - this.lastTime;
      cb(delta);
      this.lastTime = time;

      if (this.running) {
        requestAnimationFrame(mainLoop);
      }
    };

    this.running = true;

    requestAnimationFrame(mainLoop);
  }

  public stop() {
    this.running = false;
    this.lastTime = 0.0;
  }
}
