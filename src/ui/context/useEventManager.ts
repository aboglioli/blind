import { useContext } from 'react';
import { EventManagerContext, IContext } from './EventManagerContext';

export const useEvents = () => {
  const { events } = useContext<IContext>(EventManagerContext);
  return events;
};
