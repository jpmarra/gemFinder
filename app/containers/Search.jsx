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
    this.navigateTo = this.navigateTo.bind(this);
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
    localStorage.setItem(name, name);
  }

  isFavorite (name){
    if(localStorage.getItem(name)){
      return './assets/images/star-blue.png';
    }
    return './assets/images/star-gray.png';
    // return new Promise((resolve, reject) => {
    //   axios.get(`/api/favorite/${name}`)
    //   .then(result => {
    //     console.log(`${name} is a favorite: `, result.data);
    //     if(result.data){
    //       resolve('./assets/images/star-blue.png')
    //     }
    //     resolve('./assets/images/star-gray.png')
    //   })
    // })
  }

  navigateTo(e){
    e.preventDefault();
    this.props.history.push('/favorites');
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
        <button onClick={this.navigateTo}>Go to Favorites</button>
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
