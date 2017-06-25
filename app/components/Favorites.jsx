import React, { Component } from 'react';
import axios from 'axios';

export default class Favorites extends Component {
  constructor(props){
    super(props)
    this.state = {
      favorites: []
    }
  }

  componentDidMount(){
    axios.get('/api/favorites')
    .then(results => {
      let favorites = [...this.state.favorites, ...results.data];
      console.log('Favorites in state ', favorites)
      this.setState({ favorites });
    })
  }

  render(){
    return (
      <div>
        <h1>Your Favorite Gems</h1>
        {this.state.favorites.map(favorite => {
          console.log(favorite.length);
          return (
            <div className="name-container">
              <a className="name-header"
                target="_blank"
                href={`https://rubygems.org/gems/${favorite.name}`}
                >
                {favorite.name}
              </a>
              <img src={'./assets/images/star-blue.png'}/>
            </div>
          )
        })}
      </div>
    );
  }
}
