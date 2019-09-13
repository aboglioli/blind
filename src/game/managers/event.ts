import { isMatch } from 'micromatch';

export type Listener = (event: string, data?: any) => void;

export interface IEventManager {
  emit(event: string, data?: any): void;
  subscribe(event: string, listener: Listener): number;
  subscribeOnce(event: string, listener: Listener): number;
  subscribeAsync(event: string): Promise<any>;
  unsubscribe(id: number): void;
}

interface IEventListener {
  id: number;
  event: string;
  listener: {
    persist: boolean;
    callback: Listener;
  };
}

interface IAsyncListener {
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
  private listeners: IEventListener[] = [];
  private asyncListeners: IAsyncListener[] = [];
  private id = 0;

  private constructor() {}

  public emit(event: string, data?: any) {
    for (const eventListener of this.listeners) {
      if (isMatch(event, eventListener.event)) {
        eventListener.listener.callback(event, data);
        if (!eventListener.listener.persist) {
          this.unsubscribe(eventListener.id);
        }
      }
    }
  }

  public subscribe(event: string, listener: Listener): number {
    const id = this.genId();

    this.listeners.push({
      event,
      id,
      listener: { persist: true, callback: listener },
    });

    return id;
  }

  public subscribeOnce(event: string, listener: Listener): number {
    const id = this.genId();

    this.listeners.push({
      event,
      id,
      listener: { persist: false, callback: listener },
    });

    return id;
  }

  public subscribeAsync(event: string) {
    const id = this.genId();

    return new Promise(resolve => {
      this.listeners.push({
        event,
        id,
        listener: {
          callback: (evt, data) => resolve({ event: evt, data }),
          persist: false,
        },
      });
    });
  }

  public unsubscribe(id: number) {
    this.listeners = this.listeners.filter(
      eventListener => eventListener.id !== id,
    );
  }

  private genId(): number {
    return this.id++;
  }
}
