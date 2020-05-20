import React, {Component} from 'react';
import './Form.css';

const form = () =>{
  return (
    <div className="form">
      <label className="label"> Enter Your Name</label>
      <input placeholder="name" className="input" type="text" name="name"></input>

      <label className="label"> Mobile Number</label>
      <input placeholder="name" className="input" type="number" name="number"></input>
      <br/><br/>
      <label className="label"> Aadhaar Number</label>
      <input placeholder="aadhar" className="input" type="number" name="aadhaar"></input>

    </div>
  );
};

export default form;
