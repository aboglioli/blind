import React, { createContext } from 'react';
import { IEventListener, DefaultEventListener } from '../../game/events';

export interface IContext {
  eventListener: IEventListener;
}

const EventListenerContext = createContext<IContext>({
  eventListener: new DefaultEventListener(),
});

interface IProviderProps extends IContext {
  children: React.ReactNode;
}

export const EventListenerProvider = ({ eventListener, children }: IProviderProps) => (
  <EventListenerContext.Provider value={{ eventListener }}>{children}</EventListenerContext.Provider>
);

export default EventListenerContext;
