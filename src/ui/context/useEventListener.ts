import { useContext } from 'react';
import EventListenerContext, { IContext } from './EventListenerContext';

export const useEventListener = () => { 
    const { eventListener } = useContext<IContext>(EventListenerContext) 
    return eventListener;
};
