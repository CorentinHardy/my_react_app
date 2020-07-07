import React from 'react';
import PropTypes from 'prop-types';
import styles from './TchatSender.module.scss';
import Button from '../../UIComponents/Button/Button';

const TchatSender = props => {
  const inputValue = {value: ''};
  const sendMessage = props.add;
  return <form className={styles.TchatSender} onSubmit={sendMessage}>
    <input
      type="text"
      name="messageOutbox"
      placeholder="please enter your message"
      value={inputValue.value}
      onChange={(event) => inputValue.value = event.currentTarget.value}
    />
    <Button onClick={sendMessage}>S<img src="img/logo.svg" alt="e"/>nd</Button>
  </form>;
};

TchatSender.propTypes = {
  nickname: PropTypes.string.isRequired,
  add: PropTypes.func.isRequired
};

export default TchatSender;
