import React from 'react';
import Search from './Search';
import nyt from './nyt.jpg';
import './App.css';

// import Results from './Results';
// import Recent from './Recent';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={nyt} className="App-logo" alt="logo" />     
        </div>
        <div> 
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
 