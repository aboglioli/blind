import React, { useState } from 'react';
import './Card.css';

const Card = props => {
  const [ zoom, setZoom ] = useState(false);

  return(
      <div onClick={() => setZoom(!zoom)} className={'card card--' + (zoom?"zoomed-in ":"zoomed-out ") + 'card_' + props.theme} id={props.id}>
        {zoom?
          props.children:
          <h2>{props.title}</h2>}
      </div>
  )
};

export default Card;
