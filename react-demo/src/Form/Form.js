import React, {Component} from 'react';
import './Form.css';

// const form = () =>{
//   return (
//     <div className="form">
//       <label className="label"> Enter Your Name</label>
//       <input placeholder="name" className="input" type="text" name="name"></input>
//
//       <label className="label"> Mobile Number</label>
//       <input placeholder="name" className="input" type="number" name="number"></input>
//       <br/><br/>
//       <label className="label"> Aadhaar Number</label>
//       <input placeholder="aadhar" className="input" type="number" name="aadhaar"></input>
//
//     </div>
//   );
// };

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({value: event.target.value});  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


export default Form;
