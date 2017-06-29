import React, { Component } from 'react';
// import Results from './Results';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './Search.css';
import tlogo from './t_logo.png';


// <img src={nyt} className="searchLogo" />

export default class Search extends React.Component {

  render() {
    return (
      <div>
        <Drawer open="true">
        	<div className="searchHeader">
        		
        		<img src={tlogo} className="App-logo" alt="logo" /> 
        	</div>
        	<div className="navbar">
	        	<br />
	        	<h6>Date Range</h6>
	        	<br />
	          	<MenuItem>All Since 1851</MenuItem>
	          	<MenuItem>Past 24 Hours</MenuItem>
	          	<MenuItem>Past 7 Days</MenuItem>
	          	<MenuItem>Past 30 Days</MenuItem>
	          	<MenuItem>Past 12 Months</MenuItem>
	       	</div>
        </Drawer>
      </div>
    );
  }
}

// class Search extends React.Component {
//   render() {
//     return (
//     	<div >

		


	      

// 	      <div className="Search">
// 	      	<div className="searchTitle">
// 	      		<h5> Search for articles </h5>
// 	      	</div>

// 	      	<form action="" method="get">
// 		      	<p>Topic</p> <input type="text" className="searchText" />

// 		      	<p>Start Year</p><input type="text" className="year" />
// 			    <p>End Year</p><input type="text" className="year" />
// 			    <br />
// 			    <input type="submit" value="Submit" />
// 	      	</form>

// 	      </div>




// 	      	<div> 
// 	      		<Results />
// 	      	</div>
	      
// 	    </div>
//     );
//   }
// }

// export default Search;