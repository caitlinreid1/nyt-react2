import React, { Component } from 'react';
import Results from './Results';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
    	<div>
	      <div className="Search">
	      	<p> Search for articles </p>
	      </div>



	      	<div> 
	      		<Results />
	      	</div>
	      
	    </div>
    );
  }
}

export default Search;