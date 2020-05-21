import React, {Component} from 'react';
import './Calculator.css';

class Calculator extends Component{
  render(){
    return(
          <div className="main">
            <h1> Your friendly Calculator is here</h1>
            <h3> Enter Two Numbers </h3>
            <input placeholder="Number" type="number" name="a" />
            <select>
                 <option value="add">+</option>
                 <option value="multiply">*</option>
                 <option value="minus">-</option>
                 <option value="divide">/</option>
            </select>
            <input placeholder="Number" type="number" name="a" />
          </div>
    );
  }
}

export default Calculator;
