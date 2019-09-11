import React, { createContext } from 'react';
import { DefaultEventManager, IEventEmitter } from '../../game/events';

export interface IContext {
  events: IEventEmitter;
}

const EventManagerContext = createContext<IContext>({
  events: DefaultEventManager.getInstance(),
});

interface IProviderProps extends IContext {
  children: React.ReactNode;
}

export const EventManagerProvider = ({ events, children }: IProviderProps) => (
  <EventManagerContext.Provider value={{ events }}>{children}</EventManagerContext.Provider>
);

export default EventManagerContext;
