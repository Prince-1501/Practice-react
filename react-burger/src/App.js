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
    number : 0,
    showPerson : false
  };


// Handler in this files

  switchNameHandler = (name) =>{
    var num = Math.floor(4*(Math.random()));
    this.setState({
      number : num
    });
  }


  nameChangeHandler = (event) =>{
    this.setState({
        person:[
          {name : "prince" , age : "28"},
          {name : event.target.value , age : "40"},
          {name : "tarun" , age : "30"},
          {name : "kiran" , age : "90"}
        ]
      });
  }

  togglePersonHandler = () =>{
    const doesShow  = this.state.showPerson;
    this.setState({
      showPerson : !doesShow
    });
  }

// Handler are above this code


  render() {
    return (
      <div className="App">
        <h1>Hello Mr. Prince </h1>
        <button className="btn" onClick={()=>this.togglePersonHandler()}> Show Name </button>
        {
          this.state.showPerson === true ?
          <Person
              name = {this.state.person[this.state.number].name}
              age = {this.state.person[this.state.number].age}
              click = {()=>this.switchNameHandler()}
              changed = {this.nameChangeHandler}
          /> : null
        }

      </div>
    );
  }
}

export default App;
