import { Button, newButton } from './button';

export type Listener = (button: Button) => void;

export interface IEventListener {
  addListener(listener: Listener): void;
  emitEvent(event: string): void;
}

export class DefaultEventListener implements IEventListener {
  private listeners: Listener[] = [];

  constructor(...listeners: Listener[]) {
    if (Array.isArray(listeners) && listeners.length > 0) {
      this.listeners = listeners;
    }
  }

  public addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  public emitEvent = (eventName: string) => {
    const button = newButton(eventName);
    this.listeners.forEach(listener => listener(button));
  };
}
