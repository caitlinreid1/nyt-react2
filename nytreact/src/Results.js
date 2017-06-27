import React, { Component } from 'react';
import Recent from './Recent';
import './Results.css';

class Results extends Component {
  render() {
    return (
      <div className="">      
        <p> your results</p>

        <div>
          Recent: <Recent />
        </div>

      </div>
    );
  }
}

export default Results;