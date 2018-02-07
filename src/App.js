import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import ChangeSetManager from './components/ChangeSetManager';

class App extends Component {
  
  render() {
    return (
      <div>
        <Menu />
        <main role="main" class="container">
          <div class="starter-template">
           <ChangeSetManager />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
