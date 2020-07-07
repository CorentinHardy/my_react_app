import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TchatReader from '../TchatReader/TchatReader';
import TchatSender from '../TchatSender/TchatSender';

class Tchat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { nickname } = this.props;
    return (
      <div>
        <TchatReader nickname={nickname} />
        <TchatSender nickname={nickname} />
      </div>
    );
  }
}

Tchat.propTypes = {
  nickname: PropTypes.string,
};

export default Tchat;
