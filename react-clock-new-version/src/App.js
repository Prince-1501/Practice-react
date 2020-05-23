import React, {Component} from 'react';
import classes from './App.module.css';
import Logo from './bg-image.svg';


class App extends Component {

  state= {
    showDay : false
  }

  showDayHandler = () =>{
    const day = this.state.showDay;
    this.setState({
      showDay: !day
    });
  }


  render(){
    let date = new Date();
    let time = date.toLocaleTimeString();

    let showDetail = false;
    if(this.state.showDay){
      const day = date.toLocaleDateString();
      showDetail = (day);
    }

    return (
      <div className={classes.App}>
          <h1 className={classes.h1}>Your Time is here </h1>
          <img  src={Logo} width="500" height="600"/>

          <button onClick={this.showDayHandler}>Detail View </button>
          <div className={classes.time}>
            <div>{time}</div>
            <div>{showDetail}</div>
          </div>
      </div>
    );
  }
}

export default App;
