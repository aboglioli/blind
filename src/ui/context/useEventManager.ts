// tslint:disable-next-line: ordered-imports
import { useContext, useEffect, useState } from 'react';
import { IAlternative, Listener } from '../../game/managers';
import { EventManagerContext, IContext } from './EventManagerContext';

export const useEventManager = () => {
  const { events } = useContext<IContext>(EventManagerContext);
  return events;
};

interface IEventState {
  data?: any;
  event?: string;
  loading: boolean;
}

export const useWaitEvent = (event: string) => {
  const events = useEventManager();
  const [listener, setListener] = useState<IEventState>({ loading: true });

  useEffect(() => {
    const callback: Listener = (evt: string, data: any) => {
      setListener({ loading: false, event: evt, data });
    };

    const eventId = events.subscribeOnce(event, callback);

    return () => {
      events.unsubscribe(eventId);
    };
  });

  return listener;
};

export const useAlternatives = () => {
  const events = useEventManager();
  const [alternatives, setAlternatives] = useState<IAlternative[]>([]);

  const selectAlternative = (alternative: IAlternative) => {
    events.emit('alternatives.select', alternative);
  };

  useEffect(() => {
    const alternativeEventId = events.subscribe(
      'alternatives.show',
      (_, data: any) => {
        setAlternatives(data);
      },
    );

    const clearAlternativesId = events.subscribe('alternatives.clear', () => {
      setAlternatives([]);
    });

    return () => {
      events.unsubscribe(alternativeEventId);
      events.unsubscribe(clearAlternativesId);
    };
  });

  return { alternatives, selectAlternative };
};
