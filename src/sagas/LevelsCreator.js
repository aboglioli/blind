import React, { useState } from 'react';
import './LevelsCreator.css';

import AddButton from '../core/AddButton';
import Moment from './Moment';

const LevelsCreator = () => {
  const [ moments, setMoments ] = useState([]);

  const addMoment = moment => {
    setMoments([...moments, moment])
  };
  
  return(
    <>
      <h1 className="base_title">GENERADOR DINAMICO DE HISTORIAS INTERACTIVAS</h1>
      <div className="base">
        {moments.map(m => (
          <div className="base_moments">
            <h2>M {moments.length}</h2>
            {m}
          </div>
        ))}
        <AddButton onClick={() => addMoment(<Moment/>)}/>
      </div>
    </>
  )
}

export default LevelsCreator;