import React, { createContext } from 'react';
import { DefaultEventManager, IEventManager } from '../../game/managers';

export interface IContext {
  events: IEventManager;
}

export const EventManagerContext = createContext<IContext>({
  events: DefaultEventManager.getInstance(),
});

interface IProviderProps extends IContext {
  children: React.ReactNode;
}

export const EventManagerProvider = ({ events, children }: IProviderProps) => (
  <EventManagerContext.Provider value={{ events }}>
    {children}
  </EventManagerContext.Provider>
);
