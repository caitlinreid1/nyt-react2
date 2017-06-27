import React, { Component } from 'react';
import Results from './Results';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
      <div>
      	<p> Search for articles </p>
      	<div> 
      		Results: <Results />
      	</div>
      </div>
    );
  }
}

export default Search;