import logo from './logo.svg';
import './App.css';
//import { ReactComponent } from '*.svg';
import React from 'react';
import Grid from './Grid'
/*
 * 3x3 grid 

 */
class App extends React.Component {
  state = {
    //turn: noughts
  }

  render() {
    return (
      <Grid/> 
    )
  }
}

export default App;
