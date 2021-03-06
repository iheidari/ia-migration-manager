import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import ChangeSetManager from './components/changeSet/ChangeSetManager';

class App extends Component {
  
  render() {
    return (
      <div>
        <Menu />
        <main role="main" className="container">
          <div className="starter-template">
           <ChangeSetManager />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
