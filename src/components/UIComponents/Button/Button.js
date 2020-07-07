import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = (props) => {
  // props: { children?: ReactNode, text?: string, onClick?: React.MouseEvent<HTMLDivElement, MouseEvent> }
  console.log(`Benj Button: ${props.text}`, props);
  const bindOnclick = (event) => {
    // we put a small animation:
    const target = event.currentTarget;
    target.classList.add(styles.onclick);
    // with a timeout to delete it
    setTimeout(() => target.classList.remove(styles.onclick), 500);

    // and we call our function, if it exist
    return props.onClick?.(event);
  };

  // jsx:
  return <div className={styles.Button} data-testid="Button" onClick={bindOnclick}>
    <span style={{background: props.bgColor}}>{props.children}</span>
  </div>
};

Button.propTypes = { // mais peut pomper des resources.
  // donc il vaut mieux mettre ces propTypes dans un fichier externes
  // pour les inclure uniquement en dev/ tests et pas en orid
  // avec des inclusions conditionnels
  bgColor: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = { // Default values for the props
  // also work in ts
  bgColor: "#282c34",
  onClick: () => console.log('click !')
};

export default Button;
