import React from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/Posts'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to React</h1>
      </header>
      <Posts />
    </div>
  );
}

export default App;
