import React, { Component } from 'react';
import Recent from './Recent';
import './Results.css';
import Heart from './border-heart.svg'


class Results extends Component {
  render() {
    return (
      <div>
        <div className="Results">      
          <div className="story">
              <p className="title">
                <a href="">Story Title </a>
              </p>
            <p className="summary">Lorem ipsum dolor sit amet, quidam posidonium an mea. Quo liber scaevola tincidunt ut, vidisse aliquando sed in, hinc consul mucius vel ne. Nam at nibh omnis vituperatoribus, mei volumus voluptua comprehensam cu, vero ubique intellegebat no mea. Amet semper feugiat mea at.</p>
            <div className="storyMeta">
              <span className="dateline">{Date.now()} /</span>
              <span className="byline"> By: Associated Press /</span>
              <span className="printHeadline"> Lorem ipsum dolor sit amet </span>
            </div>
          </div> 
          <div className="favorite">
            <img src={Heart} />
          </div>
        </div>       
      </div>
    );
  }
}



export default Results;