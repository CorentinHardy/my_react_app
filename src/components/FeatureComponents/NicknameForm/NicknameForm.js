import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './NicknameForm.module.scss';
import Button from '../../UIComponents/Button/Button';

class NicknameForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nickname: props.nick
    };
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.validatedNickname({result: this.state.nickname})
    console.log('SUBMITTED');
  };

  resetForm = (event) => {
    event.preventDefault();
    this.setState({nickname: ''});
  };

  render() {
    return (
      <form className={styles.NicknameForm} data-testid="NicknameForm" onSubmit={this.submitForm} onReset={this.resetForm}>
        <div className={styles.container}>
          <label htmlFor="nickname">Nickname :</label>
          <input type="text" placeholder="please enter your nickname" name="nickname"
            onChange={(event) => this.setState({nickname: event.currentTarget.value})}
            value={this.state.nickname}
            />
          {/* it is a two-way binding (that we have done ourself) */}
        </div>
        <Button onClick={this.submitForm}>Valid</Button>
        <Button onClick={this.resetForm} bgColor="grey">Reset</Button>
        {/* <span>Your pseudo is: {this.state.nickname}</span> */}
      </form>
    );
  }
}

NicknameForm.propTypes = {
  nick: PropTypes.string,
  validatedNickname: PropTypes.func
};

NicknameForm.defaultProps = {
  nick: ''
};

export default NicknameForm;
