import React from 'react';


const Result = (props) => (
  <div className="result-container">
    <a className="name-header"
      target="_blank"
      href={`https://rubygems.org/gems/${props.gem.name}`}
    >
      {props.gem.name}
    </a>
    <div className="gem-info-container">
      <text className="info-header">INFORMATION</text>
      <p className="info-body">{props.gem.info}</p>
    </div>
    <div className="dependencies-container">
      <text className="dependencies-header">DEPENDENCIES</text>
      <div className="dependencies-list">
        {props.gem.dependencies.map(dependency =>{
          return (
            <div>
              <a className="name-header"
                target="_blank"
                href={`https://rubygems.org/gems/${dependency.name}`}
                >
                {dependency.name}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  </div>
)

export default Result;
