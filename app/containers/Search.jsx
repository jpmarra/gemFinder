import React, { Component } from 'react';
import axios from 'axios';
import Result from '.././components/Result';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      resultFound: false,
      result: {}
    }
    this.renderResult = this.renderResult.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderResult(){
    if(this.state.resultFound) {
      return <Result gem={this.state.result} addFavorite={this.addFavorite} />
    }
  }

  addFavorite(name){
    let fav = { name }
    axios.post('/api/create', fav)
    .then(result => console.log(result))
    .catch(err => console.error(err))
  }

  handleChange(e){
    this.setState({input: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault();
    axios.get(`/api/gems/${this.state.input}`)
    .then(results => {
      this.setState({result: results.data, resultFound: true})
    })
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
        <div>{this.renderResult()}</div>
      </div>
    );
  }
};
