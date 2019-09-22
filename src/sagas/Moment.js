import React, { useState } from 'react';
import './LevelsCreator.css';

import AddButton from '../core/AddButton';
import Card from '../core/Card';

const Moment = () => {
  const [ blocks, setBlocks ] = useState([]);

  const addBlock = block => {
    setBlocks([...blocks, block])
  };

  return(
    <div className="moment">
      {blocks.map(b => (
        <Card title={b.title}>
          {b.children}
        </Card>
      ))}
      <AddButton onClick={() => addBlock({title: "1", children: <h2>Block</h2>})}/>
    </div>
  )
}

export default Moment;
