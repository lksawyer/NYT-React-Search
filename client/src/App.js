import React, { Component } from 'react';
import './App.css';
import Panel from './Panel/Panel';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Panel name="Search"/>
        <Panel name="Results"/>
        <Panel name="Saved Articles"/>
      </div>
    );
  }
}

export default App;
