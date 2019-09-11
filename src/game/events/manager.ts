export type Listener = (event: string) => void;

export interface IEventEmitter {
  emit: Listener;
}

export interface IEventManager extends IEventEmitter {
  subscribe(event: string, listener: Listener): number;
  subscribeAll(listener: Listener): number;
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

  private eventListeners: IEventListener[] = [];
  private id = 0;
  private constructor() {}

  public subscribe(event: string, listener: Listener): number {
    event = event.toLowerCase();
    this.eventListeners.push({ id: this.id, event, listener });
    return this.id++;
  }

  public subscribeAll(listener: Listener): number {
    return this.subscribe('*', listener);
  }

  public unsubscribe(id: number) {
    this.eventListeners = this.eventListeners.filter(
      eventListener => eventListener.id !== id,
    );
  }

  public emit(event: string) {
    event = event.toLowerCase();
    this.eventListeners.forEach(eventListener => {
      if (eventListener.event === '*' || eventListener.event === event) {
        eventListener.listener(event);
      }
    });
  }
}
