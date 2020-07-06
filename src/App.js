import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './components/Button/Button';
import NicknameForm from './components/NicknameForm/NicknameForm';

// function App() {
// wee pass this class as Component, to provide nickname to the form
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: ''
    };
  }

  // benjButtonClick = (params) => {
  //   console.log('benj click: ', params);
  // }
  render() {
    return (
      <div className="App">
        {/* <div className="benjContainers">
          <Button onClick={this.benjButtonClick}>
            <img src="img/logo.svg" alt="react logo"/>
            YOLO
          </Button>
          <Button bgColor="orange">
            YATTA
          </Button>
          <Button bgColor="skyblue">
            YEN
          </Button>
        </div> */}
        Bonjour {this.state.nickname}
        <NicknameForm nickname={this.state.nickname} validatedNickname={e => this.setState({nickname: e.result})}/>
        {/* here it is 2 * one-way binding */}
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
}

export default App;
