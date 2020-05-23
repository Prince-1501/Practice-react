import React, {Component} from 'react';
import classes from './App.module.css';
import Logo from './bg-image.svg';


class App extends Component {

  state= {
    showTime : false
  }



  render(){
    return (
      <div className={classes.App}>
          <h1 className={classes.h1}>Your Time is here </h1>
          <img  src={Logo} width="500" height="600"/>

          <button>Detail View </button>

      </div>
    );
  }
}

export default App;
