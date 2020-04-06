import React from 'react';
import logo from './logo.svg';
import { ReactComponent as Logo } from './logo.svg';
import './App.css';
import Button from './button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi! I am a React app!!</p>
        <Button />
        <p>.svg as component gets bundled</p>
        <Logo className="App-logo" />

        <p>img with src='...' is out of bundle so it has to be requested</p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
