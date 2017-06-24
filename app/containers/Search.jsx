import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e){
    this.setState({input: e.target.value})
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(`initiating request for ${this.state.input}`)
    axios.get(`/api/gems/${this.state.input}`)
    .then(results => console.log(results))
  }
  render() {
    return (
      <div className='Search'>
        <form>
          <input
            type="text" className="gem-input"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
};
