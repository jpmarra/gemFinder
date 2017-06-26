import React, { Component } from 'react';
import Nav from '.././components/Nav';
import { browserHistory } from 'react-router';

export default class Main extends Component {
  navigateTo(path){
    browserHistory.push(path);
  }
  render(){
    return (
      <div>
        <Nav navigateTo={this.navigateTo.bind(this)}/>
        <div className="main-container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
