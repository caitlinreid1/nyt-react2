import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchText from './SearchText';
import Search from './Search';
import favorite from './white.svg'
import './App.css';
// import favicon from '../public'


// <img src={tlogo} className="App-logo" alt="logo" /> 

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="searchText">
            <h4> Search</h4>
          </div>
            <div className="faveButton">
              <img src={favorite} alt="favorite-articles" className="favoriteLink"/>
              
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
 