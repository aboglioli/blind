import React from 'react';
import './AddButton.css';
import addIcon from '../img/add.svg';

const AddButton = props => (
  <button className="add" onClick={props.onClick}>
    <img src={addIcon}/>
  </button>
);

export default AddButton;
