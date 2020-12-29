import './App.css';
//import { ReactComponent } from '*.svg';
import React from 'react';
import Grid from './components/Grid'

class App extends React.Component {
  state = {
    gridSize: 3
  }

  render() {
    return (
      <div>
        <h1>Noughts and Crosses</h1>
        <Grid/> 
      </div>
    )
  }
}

export default App;
