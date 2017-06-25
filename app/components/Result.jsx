import React, { Component } from 'react';
import axios from 'axios';
import Name from './Name'
export default class Result extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
    this.loadDependencies = this.loadDependencies.bind(this);
  }
  loadDependencies(){
    if(this.props.gem.dependencies.length > 0){
      return this.props.gem.dependencies.map((dependency, idx) =>{
        return <Name key={idx} name={dependency.name} addFavorite={this.props.addFavorite} isFavorite={this.props.isFavorite}/>
      })
    }
    return <div>NONE</div>
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
            {this.loadDependencies()}
          </div>
        </div>
      </div>
    );
  }
}
