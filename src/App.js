import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';

function App() {
  function benjButtonClick(params) {
    console.log('benj click: ', params);
  }

  return (
    <div className="App">
      <div className="benjContainers">
        <Button text="YOLO" onClick={benjButtonClick}/>
        <Button text="YATTA" bgColor="orange"/>
        <Button text="YEN" bgColor="skyblue"/>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
