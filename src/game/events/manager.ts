import { Button, newButton } from './button';

export type Listener = (button: Button) => void;

export interface IEventEmitter {
  emit(event: string): void;
}

export interface IEventManager extends IEventEmitter {
  addListener(listener: Listener): void;
}

export class DefaultEventManager implements IEventManager {
  // Singleton
  public static getInstance(): IEventManager {
    if (!this.instance) {
      this.instance = new DefaultEventManager();
    }

    return this.instance;
  }
  private static instance: IEventManager;

  private listeners: Listener[] = [];
  private constructor() {}

  public addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  public emit(event: string) {
    const button = newButton(event);
    this.listeners.forEach(listener => listener(button));
  }
}
