import React, { Component } from 'react';
import axios from 'axios';

export default class Name extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: ''
    }
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this);
  }

  handleFavoriteClick() {
    if(this.state.url === './assets/images/star-blue.png'){
      this.setState({url: './assets/images/star-gray.png'})
    } else {
      this.setState({url: './assets/images/star-blue.png'})
    }
    this.props.addFavorite(this.props.name);
  }

  componentDidMount(){
    let url = this.props.isFavorite(this.props.name)
    this.setState({ url })
  }

  render(){
    return (
      <div className="name-container">
        <a className="name-header"
          target="_blank"
          href={`https://rubygems.org/gems/${this.props.name}`}
          >
          {this.props.name}
        </a>
        <img className="star" src={this.state.url} onClick={this.handleFavoriteClick}/>
      </div>
    );
  }
}
