import React, { Component } from 'react';
import Results from './Results';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './SearchText.css';


export default class SearchText extends React.Component {
	render () {
		return (
		  <div className="div">
		  	<form>
		  	  <div className="textDiv">		  	
			  	<input 
			  	  type="text" 
			  	  id="searchTerm"
			  	  onChange=""
			  	/>
			  </div>
			  	<FlatButton 
			  	  label="GO" 
			  	  className="button"
			  	/>
			</form>
		    <br />
		    <Results />
		  </div>
		)
	}
}