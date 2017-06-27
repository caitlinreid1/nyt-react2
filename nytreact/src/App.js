import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchText from './SearchText';
import Search from './Search';
// import Results from './Results';
import tlogo from './t_logo.png';
import './App.css';

// import Results from './Results';
// import Recent from './Recent';

// <img src={tlogo} className="App-logo" alt="logo" /> 

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="searchText">
            <h4> Search</h4>
          </div>
        </div>
        <div> 
          <MuiThemeProvider>
            <Search />
          </MuiThemeProvider>
        </div>
        <div> 
          <MuiThemeProvider>
            <SearchText />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

export default App;
 