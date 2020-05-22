import React, {Component} from 'react';
import classes from './Person.css';

var person = (props) =>{
  return (
    <div className={classes.Person}>
      <h3 onClick={props.click} >My name is {props.name}</h3>
      <h3>My Age is {props.age}</h3>
      <input type="text" onChange= {props.changed}/>
    </div>
  );
};

export default person;
