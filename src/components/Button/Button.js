import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  // props: { children?: ReactNode, text?: string, onClick?: React.MouseEvent<HTMLDivElement, MouseEvent> }
  // console.log(`Benj Button: ${props.text}`, props);
  const bindOnclick = (event) => props.onClick?.(event);
  return <div className={styles.Button} data-testid="Button" onClick={bindOnclick}>
    <span style={{background: props.bgColor}}>{props.text}</span>
  </div>
};

Button.propTypes = { // mais peut pomper des resources.
  // donc il vaut mieux mettre ces propTypes dans un fichier externes
  // pour les inclure uniquement en dev/ tests et pas en orid
  // avec des inclusions conditionnels
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = { // Default values for the props
  // also work in ts
  bgColor: "#282c34",
  onClick: () => console.log('click !')
};

export default Button;
