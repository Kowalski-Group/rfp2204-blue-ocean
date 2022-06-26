import React from 'react';
import styles from "../../styles/Home.module.css";

function Container({ children, className, ...rest}) {

  let containerClassName = styles.container;

  if ( className ) {
    containerClassName = `${containerClassName} ${className}`;
  }

  return (
    <div className={containerClassName} {...rest}>
      { children }
    </div>
  )
}

export default Container;