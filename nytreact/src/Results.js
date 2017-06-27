import React, { Component } from 'react';
import Recent from './Recent';
import './Results.css';

class Results extends Component {
  render() {
    return (
      <div>
        <div className="Results">      
          <p> your results</p>
        </div>
          <div>
            <Recent />
          </div>
      </div>
    );
  }
}

export default Results;