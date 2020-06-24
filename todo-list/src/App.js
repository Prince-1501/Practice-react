import React, { Component } from 'react';

export default class App extends Component{

  state={
    'todos':[
      {name:'walk the dog'}
    ]
  }


  render(){
    return(
      <div className="App">
      <h1>Hello World</h1>
      </div>
    );
  }
}
