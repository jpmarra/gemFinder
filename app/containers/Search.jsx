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
    if(this.state.result === "error" ) {
      return <p className="error">Oh no! Looks like that gem can't be found.</p>
    }
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
    let input = e.target.value.toLowerCase();
    this.setState({ input });
  }

  handleSubmit(e){
    e.preventDefault();
    axios.get(`/api/gems/${this.state.input}`)
    .then(results => {
      if(results.data === "not found"){
        this.setState({result: "error"})
      } else {
        this.setState({result: results.data, resultFound: true})
      }
    })
  }

  render() {
    return (
      <div className="page-container">
        <div className="search-container">
          <h1 className="search-header">Search Gems</h1>
          <form>
            <input
              type="text" className={this.state.result === "error" ? "error-input gem-input" : "gem-input"}
              placeholder="Search"
              value={this.state.input}
              onChange={this.handleChange}
            />
          <button className={this.state.result === "error" ? "red search-button" : "search-button"} type="submit" onClick={this.handleSubmit}>
              <img className={this.state.result === "error" ? "red-search-logo" : "search-logo"} src="./assets/images/magnifying-glass.png"/>
            </button>
          </form>
        </div>
        <div>{this.renderResult()}</div>
      </div>
    );
  }
};
