import { useContext } from 'react';
import EventManagerContext, { IContext } from './EventManagerContext';

export const useEventManager = () => {
  const { eventManager } = useContext<IContext>(EventManagerContext);
  return eventManager;
};
