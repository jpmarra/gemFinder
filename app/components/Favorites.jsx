import React, { Component } from 'react';
import axios from 'axios';
import Nav from '.././components/Nav';

export default class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
      favorites: []
    }
    this.updateFavorites = this.updateFavorites.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateFavorites(){
    let favorites = Object.keys(localStorage);
    this.setState({ favorites })
  }

  handleClick(favorite){
    localStorage.removeItem(favorite)
    this.updateFavorites()
  }

  componentDidMount(){
    this.updateFavorites()
  }

  render(){
    return (
      <div className="favorites-container">
        <h1 className="header">Your Favorite Gems</h1>
        <div className="favorites-list">
          {this.state.favorites.map((favorite, idx) => {
            return (
              <div key={idx} className="favorite">
                <img className="favorite-star" src={'./assets/images/star-blue.png'} onClick={() => this.handleClick(favorite)}/>
                <a className="favorite-header"
                  target="_blank"
                  href={`https://rubygems.org/gems/${favorite}`}
                  >
                  {favorite}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
