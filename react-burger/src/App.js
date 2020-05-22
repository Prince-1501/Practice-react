import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person : [
      {id: "auid", name : "Prince" , age : "28"},
      {id: "afud", name : "Rakesh" , age : "40"},
      {id: "weid", name : "tarun" , age : "30"},
      {id: "xiso", name : "kiran" , age : "90"}
    ],
    number : 0,
    showPerson : false
  };


// Handler in this files

  deletePersonHandler = (personIndex) =>{
    // const person = this.state.person.slice();
    const person = [...this.state.person];
    person.splice(personIndex ,1)
    this.setState({person : person});
  }


  togglePersonHandler = () =>{
    const doesShow  = this.state.showPerson;
    this.setState({
      showPerson : !doesShow
    });
  }

  nameChangeHandler = (event , id)=>{
    const personIndex = this.state.person.findIndex((p)=>{
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex];
    }

    person.name= event.target.value;

    const persons = [...this.state.person]
    persons[personIndex] = person;
    this.setState({person : persons});

  }

// Handler are above this code


  render() {

    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
            {this.state.person.map((person ,index)=>{
              return <Person
              name = {person.name}
              age = {person.age}
              click = {()=>this.deletePersonHandler(index)}
              key = {person.id}
              changed = {(event)=>this.nameChangeHandler(person.id)}
              />
            })}
        </div>
      );
    }


    return (
      <div className="App">
        <h1>Hello Mr. Prince </h1>
        <button className="btn" onClick={()=>this.togglePersonHandler()}> Show Name </button>
        {persons}

      </div>
    );
  }
}

export default App;



// learn for practice

/*
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
*/
