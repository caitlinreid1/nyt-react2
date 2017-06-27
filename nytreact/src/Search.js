import React, { Component } from 'react';
import Results from './Results';
import './Search.css';

class Search extends React.Component {
  render() {
    return (
    	<div>
	      <div className="Search">

	      	<h3> Search for articles </h3>
	      	<form action="" method="get">
		      	<p>Topic</p> <input type="text" className="searchText" />

		      	<p>Start Year</p><input type="text" className="year" />
			    <p>End Year</p><input type="text" className="year" />
			    <input type="submit" value="Submit" />
	      	</form>
	      </div>



	      	<div> 
	      		<Results />
	      	</div>
	      
	    </div>
    );
  }
}

export default Search;