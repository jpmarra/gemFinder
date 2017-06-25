import React, { Component } from 'react';
import axios from 'axios';
import Name from './Name'
export default class Result extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="result-container">
        <Name name={this.props.gem.name} addFavorite={this.props.addFavorite} isFavorite={this.props.isFavorite}/>
        <div className="gem-info-container">
          <text className="info-header">INFORMATION</text>
          <p className="info-body">{this.props.gem.info}</p>
        </div>
        <div className="dependencies-container">
          <text className="dependencies-header">DEPENDENCIES</text>
          <div className="dependencies-list">
            {this.props.gem.dependencies.map((dependency, idx) =>{
              return <Name name={dependency.name} addFavorite={this.props.addFavorite} isFavorite={this.props.isFavorite}/>
            })}
          </div>
        </div>
      </div>
    );
  }
}
