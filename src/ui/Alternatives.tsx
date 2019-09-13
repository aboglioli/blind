import React from 'react';
import './Alternatives.css';

import Alternative from './Alternative';

import { useAlternatives } from './context';

const Alternatives = () => {
  const { alternatives, selectAlternative } = useAlternatives();

  return alternatives && alternatives.length > 0 ? (
    <div id="alternatives">
      {alternatives.map(alternative => (
        <Alternative
          id={alternative.id}
          key={alternative.id}
          text={alternative.text}
          onSelect={() => selectAlternative(alternative)}
        />
      ))}
    </div>
  ) : (
    <div id="alternatives">Sin opciones</div>
  );
};

export default Alternatives;
