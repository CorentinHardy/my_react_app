import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Tchat.module.scss';
import TchatReader from '../TchatReader/TchatReader';
import TchatSender from '../TchatSender/TchatSender';

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        content: 'Demat Breizh',
        author: 'Alex',
        time: '2020-07-07T12:42'
      }, {
        content: 'Bonjour',
        author: 'Corentin',
        time: '2020-07-07T12:44'
      }]
    };
  }

  addMessage(input) {
    this.state.messages.push({
      content: input,
      author: this.state.nickname
    });
  }

  render() {
    console.log("tchat messages", this.state);
    const { nickname } = this.props;
    return (
      <div className={styles.Tchat} data-testid="Tchat">
        <span>Bonjour {nickname}</span>
        <TchatReader nickname={nickname} messages={this.state.messages}/>
        <TchatSender nickname={nickname} add={this.addMessage}/>
      </div>
    );
  }
}

Tchat.propTypes = {
  nickname: PropTypes.string,
};

export default Tchat;
