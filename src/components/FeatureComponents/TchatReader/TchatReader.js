import React from 'react';
import styles from './TchatReader.module.scss';
import PropTypes from 'prop-types';

/**
 * Message should be at left if they comes from others, right from us. 
 * @param {*} props: {nickname: string, message: {author: string, content: string}}
 */
export const TchatMessage = props => {
  return <div className={`${styles.TchatMessage} ${props.nickname === props.message.author ? styles.right : styles.left}`}>
    <span className={styles.author}>{props.message.author}</span>
    <span className={styles.time}>{props.message.time}</span>
    <span className={styles.content}>{props.message.content}</span>
  </div>
};
TchatMessage.propTypes = {
  message: PropTypes.object,
  nickname: PropTypes.string
};

/**
 * List messages
 * @param {*} props: {nickname: string, messages: {author: string, content: string}[]}
 */
const TchatReader = props => {
  return <div className={styles.TchatReader}>
    <span>List of Messages:</span>
    {props.messages.map((message, index) => <TchatMessage message={message} key={`tchatMessage${index}`} nickname={props.nickname}/>)}
  </div>;
};

TchatReader.propTypes = {
  nickname: PropTypes.string,
  messages: PropTypes.array.isRequired
};

TchatReader.defaultProps = {
  messages: []
}

export default TchatReader;
