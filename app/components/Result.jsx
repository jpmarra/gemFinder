import React, { Component } from 'react';
import axios from 'axios';
import Name from './Name'
export default class Result extends Component {
  constructor(props){
    super(props);
    this.loadDependencies = this.loadDependencies.bind(this);
  }
  loadDependencies(){
    if(this.props.gem.dependencies.length > 0){
      return this.props.gem.dependencies.map((dependency, idx) =>{
        return <Name key={idx} name={dependency.name} addFavorite={this.props.addFavorite} isFavorite={this.props.isFavorite}/>
      })
    }
    return <div className="info-body">None</div>
  }
  render(){
    return (
      <div className="result-container">
        <Name name={this.props.gem.name} addFavorite={this.props.addFavorite} isFavorite={this.props.isFavorite}/>
        <div className="gem-info-container">
          <p className="info-header">INFORMATION</p>
          <p className="info-body">{this.props.gem.info}</p>
        </div>
        <div className="dependencies-container">
          <p className="info-header">DEPENDENCIES</p>
          <div className="dependencies-list">
            {this.loadDependencies()}
          </div>
        </div>
      </div>
    );
  }
}
