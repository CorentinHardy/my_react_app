import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../UIComponents/Button/Button';

const TchatSender = props => (
  <div>
    <Button />
  </div>
);

TchatSender.propTypes = {
  nickname: PropTypes.string.isRequired,
};

export default TchatSender;
