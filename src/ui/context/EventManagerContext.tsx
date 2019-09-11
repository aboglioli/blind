import React, { createContext } from 'react';
import { DefaultEventManager, IEventManager } from '../../game/events';

export interface IContext {
  eventManager: IEventManager;
}

const EventManagerContext = createContext<IContext>({
  eventManager: new DefaultEventManager(),
});

interface IProviderProps extends IContext {
  children: React.ReactNode;
}

export const EventManagerProvider = ({ eventManager, children }: IProviderProps) => (
  <EventManagerContext.Provider value={{ eventManager }}>{children}</EventManagerContext.Provider>
);

export default EventManagerContext;
