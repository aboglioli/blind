import { isMatch } from 'micromatch';

export type Listener = (event: string) => void;

export interface IEventEmitter {
  emit: Listener;
}

export interface IEventManager extends IEventEmitter {
  subscribe(event: string, listener: Listener): number;
  unsubscribe(id: number): void;
}

interface IEventListener {
  id: number;
  event: string;
  listener: Listener;
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

  // Implementation
  private eventListeners: IEventListener[] = [];
  private id = 0;

  private constructor() {}

  public subscribe(event: string, listener: Listener): number {
    this.eventListeners.push({ id: this.id, event, listener });
    return this.id++;
  }

  public unsubscribe(id: number) {
    this.eventListeners = this.eventListeners.filter(
      eventListener => eventListener.id !== id,
    );
  }

  public emit(event: string) {
    event = event.toLowerCase();
    this.eventListeners.forEach(eventListener => {
      console.log('isMatch', event, eventListener.event);
      if (isMatch(event, eventListener.event)) {
        eventListener.listener(event);
      }
    });
  }
}
