import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  console.log(`Benj Button: ${props.text}`, props);
  return <div className={styles.Button} data-testid="Button">
    Benj Button tell: {props.text}
  </div>
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
