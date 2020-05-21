import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person : [
      {name : "Prince" , age : "28"},
      {name : "Rakesh" , age : "40"},
      {name : "tarun" , age : "30"},
      {name : "kiran" , age : "90"}
    ],
    number : 0
  };

  switchNameHandler = (name) =>{
    var num = Math.floor(4*(Math.random()));
    this.setState({
      number : num,
      person[0].name : name
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello Mr. Prince </h1>
        <Person
            name = {this.state.person[this.state.number].name}
            age = {this.state.person[this.state.number].age}
            click = {()=>this.switchNameHandler("max")}
        />
      </div>
    );
  }
}

export default App;
