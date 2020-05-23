import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import Form from './Form/Form';
import Calculator from './Calculator/Calculator';

class App extends Component {
  state={
    person : [
        { name : "prince" , age : "29" },
        { name : "krishna" , age : "81" },
        { name : "sumit" , age : "100" }
    ],
    number : 0
  };


  switchNameHandler = () => {
    var num = Math.floor(3*(Math.random()));
    console.log('name is changed', num);

    this.setState({
      number : num
    });
  }


  render() {
    return (
      <div className={classes.Header}>
        <h1>Hello There It's Prince Here.</h1>
        <p className={classes.p}> So by colonel hearted ferrars. Draw from upon here gone add one. He in sportsman household otherwise it perceived instantly. Is inquiry no he several excited am. Called though excuse length ye needed it he having. Whatever throwing we on resolved entrance together graceful. Mrs assured add private married removed believe did she.
Mr do raising article general norland my hastily. Its companions say uncommonly pianoforte favourable. Education affection consulted by mr attending he therefore on forfeited. High way more far feet kind evil play led. Sometimes furnished collected add for resources attention. Norland an by minuter enquire it general on towards forming. Adapted mrs totally company two yet conduct men.
Excited him now natural saw passage offices you minuter. At by asked being court hopes. Farther so friends am to detract. Forbade concern do private be. Offending residence but men engrossed shy. Pretend am earnest offered arrived company so on. Felicity informed yet had admitted strictly how you.
Living valley had silent eat merits or expression dissimilar so sufficient. Its party every heard and event gay. Advice he indeed things adieus in number so uneasy. To many four fact in he fail. My hung it quit next do of. It fifteen charmed by private savings it mr. Favourable cultivated alteration entreaties yet met sympathize. Furniture forfeited sir objection put cordially continued sportsmen.
Consider now provided laughter boy landlord dashwood. Often voice and the spoke. No shewing fertile village equally prepare up females as an. That do an case an what plan hour of paid. Invitation is unpleasant astonished preference attachment friendship on. Did sentiments increasing particular nay. Mr he recurred received prospect in. Wishing cheered parlors adapted am at amongst matters.
</p>

      <Person name={this.state.person[this.state.number].name} age={this.state.person[this.state.number].age}/>
      <button className={classes.btn} onClick={this.switchNameHandler}> Switch Name </button>

      <Form />

      </div>


    );
  }
}

export default App;
