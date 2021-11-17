import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'; 

const Button = ({ styles, txt, withRedirect, path, inlineStyle ,fnEvtClick }) => {
  return withRedirect ? (
    <Link to={path}>
      <button className={styles} style={inlineStyle && inlineStyle} >{txt}</button>
    </Link>
  ) : (
    <button className={styles} onClick={fnEvtClick && fnEvtClick} > {txt} </button>
  );
}

export default React.memo(Button)
