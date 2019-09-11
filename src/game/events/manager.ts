import { Button, newButton } from './button';

export type Listener = (button: Button) => void;

export interface IEventManager {
  addListener(listener: Listener): void;
  emitEvent(event: string): void;
}

export class DefaultEventManager implements IEventManager {
  private listeners: Listener[] = [];
  private static instance: IEventManager;

  static getInstance(): IEventManager {
    if (!this.instance) {
      this.instance = new DefaultEventManager();
    }

    return this.instance;
  }

  public addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  public emitEvent = (event: string) => {
    const button = newButton(event);
    this.listeners.forEach(listener => listener(button));
  };
}
