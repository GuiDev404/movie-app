import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 
import Emoji from '../Emoji'
import Search from '../Search';

const styles = {
  background: `url(${process.env.PUBLIC_URL}/img/portada_1.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}

function Header () {
  return ( 
    <div className="header flex-center flex-col" style={styles}>
      <Link to='/'>
        <h1 className='txt--center header__title'>
          Pururu
          <Emoji description='emoji-movie' emoji={'🍿'} />
        </h1>
      </Link>
      <Search />
   </div>
  )
}

export default React.memo(Header)