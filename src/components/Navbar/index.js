import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button'; 

const Navbar = ({ titleApp }) => {
  return (
    <nav className='navbar'>
      <Button 
        styles='btn normalize--btn cursor--pointer btn-redirect-home'
        txt={'←'}
        withRedirect={false}
        fnEvtClick={()=> window.history.back()}
      />
      <div className="navbar-brand">
        <Link to='/'>
          <h1 className='navbar-brand__text'> ♦ {titleApp} ♦  </h1>
        </Link>
      </div>
    </nav>
  )
}

export default React.memo(Navbar)
