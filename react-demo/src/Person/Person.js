import React, {Component} from 'react';
import './Person.css';

const person = (props) =>{
  return (
    <div className="person">
      <p>This is <span>{props.name}</span>. Your age is <span>{props.age}</span></p>
      <p>{props.children}</p>
    </div>
  );
};

export default person;
