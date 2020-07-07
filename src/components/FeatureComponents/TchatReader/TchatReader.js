import React from 'react';
import PropTypes from 'prop-types';
import TchatMessage from '../TchatMessage/TchatMessage';

const TchatReader = props => {
  const message = {};
  return <div>
    <TchatMessage message={message} />
  </div>;
};

TchatReader.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default TchatReader;
