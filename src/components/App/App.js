import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '../UIComponents/Button/Button';
import NicknameForm from '../FeatureComponents/NicknameForm/NicknameForm';
import Tchat from '../FeatureComponents/Tchat/Tchat';

// function App() {
// wee pass this class as Component, to provide nickname to the form
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: ''
    };
  }

  benjButtonClick = (params) => {
    console.log('benj click: ', params);
  }

  render() {
    const header = <header className="App-header">
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
    </header>;
    const body = <div className="App-body"> 
      <div className="benjContainers">
        <Button onClick={this.benjButtonClick}>
          <img src="img/logo.svg" alt="react logo"/>
          YOLO
        </Button>
        <Button bgColor="orange">YATTA</Button>
        <Button bgColor="skyblue">YEN</Button>
      </div>
      <NicknameForm nickname={this.state.nickname} validatedNickname={e => this.setState({nickname: e.result})}/>
      <Tchat nickname={this.state.nickname}/>
    </div>
    /* it is 2 * one-way binding to access NicknameForm */
    return (
      <div className="App">
        {/* header */}
        {body}
      </div>
    );
  }
}

export default App;
