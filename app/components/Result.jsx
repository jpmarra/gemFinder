import React, { Component } from 'react';

export default class Result extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div className="result-container">
        <div className="name-container">
          <a className="name-header"
            target="_blank"
            href={`https://rubygems.org/gems/${this.props.gem.name}`}
            >
            {this.props.gem.name}
          </a>
          <i className="fa fa-star" onClick={() => this.props.addFavorite(this.props.gem.name)}/>
        </div>
        <div className="gem-info-container">
          <text className="info-header">INFORMATION</text>
          <p className="info-body">{this.props.gem.info}</p>
        </div>
        <div className="dependencies-container">
          <text className="dependencies-header">DEPENDENCIES</text>
          <div className="dependencies-list">
            {this.props.gem.dependencies.map((dependency, idx) =>{
              return (
                <div className="name-container" key={idx}>
                  <a className="name-header"
                    target="_blank"
                    href={`https://rubygems.org/gems/${dependency.name}`}
                    >
                    {dependency.name}
                  </a>
                  <i className="fa fa-star" onClick={() => this.props.addFavorite(dependency.name)}/>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
