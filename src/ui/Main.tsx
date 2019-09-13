import React from 'react';

import Alternatives from './Alternatives';
import { useWaitEvent } from './context';

const Main = () => {
  const { loading } = useWaitEvent('engine.ready');

  if (loading) {
    return <b>Cargando...</b>;
  }

  return <Alternatives />;
};

export default Main;
