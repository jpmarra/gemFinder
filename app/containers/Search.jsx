import React, { Component } from 'react';
import axios from 'axios';
import Result from '.././components/Result';
import Nav from '.././components/Nav';

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
    this.isFavorite = this.isFavorite.bind(this);
  }

  renderResult(){
    if(this.state.resultFound) {
      return <Result gem={this.state.result} isFavorite={this.isFavorite} addFavorite={this.addFavorite} />
    }
  }

  addFavorite(name){
    if(localStorage.getItem(name)){
      localStorage.removeItem(name);
    } else {
      localStorage.setItem(name, name);
    }
  }

  isFavorite (name){
    if(localStorage.getItem(name)){
      return './assets/images/star-blue.png';
    }
    return './assets/images/star-gray.png';
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
      <div className="page-container">
        <div className="search-container">
          <h1 className="search-header">Search Gems</h1>
          <form>
            <input
              type="text" className="gem-input"
              placeholder="Search"
              value={this.state.input}
              onChange={this.handleChange}
            />
          <button className="search-button" type="submit" onClick={this.handleSubmit}>
              <img src="./assets/images/magnifying-glass.png"/>
            </button>
          </form>
        </div>
        <div>{this.renderResult()}</div>
      </div>
    );
  }
};
