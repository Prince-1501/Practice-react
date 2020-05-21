import React, {Component} from 'react';
import './Person.css';

var person = (props) =>{
  return (
    <div className="person">
      <h3 onClick={props.click} >My name is {props.name}</h3>
      <h3>My Age is {props.age}</h3>
      <input onChange={props.changed} type="text"/>
    </div>
  );
};

export default person;
