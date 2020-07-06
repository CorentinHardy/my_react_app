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
        <Button onClick={benjButtonClick}>
          <img src="img/logo.svg" alt="react logo"/>
          YOLO
        </Button>
        <Button bgColor="orange">
          YATTA
        </Button>
        <Button bgColor="skyblue">
          YEN
        </Button>
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
