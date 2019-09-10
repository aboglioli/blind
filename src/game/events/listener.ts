import { Button, newButton } from './button';

export type Listener = (button: Button) => void;

export class EventListener {
  private listeners: Listener[] = [];

  constructor(...listeners: Listener[]) {
    if (Array.isArray(listeners) && listeners.length > 0) {
      this.listeners = listeners;
    }

    this.startListeners();
  }

  public addListener(listener: Listener) {
    this.listeners.push(listener);
  }

  private startListeners() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(element => {
      element.addEventListener('click', () => {
        this.listeners.forEach(listener => {
          listener(newButton(element.id));
        });
      });
    });
  }
}
