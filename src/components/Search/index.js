import React, { useState, useRef, useEffect } from 'react';
import './Search.css'; 
import Alert from '../Alert/index';
import { withRouter } from 'react-router-dom';

function Search ({ history }) {
  const [ search, setSearch ] = useState('');
  const [ isEmpty, setIsEmpty ] = useState(false);
  const searchTag = useRef(null);

  useEffect(() => {
    searchTag.current.focus();
    let timeout = setTimeout(()=> setIsEmpty(false), 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [isEmpty])

  const handleChange = (e)=> {
    setSearch(e.target.value);
  }

  const searchMovies = (e)=> {
    e.preventDefault();
    
    if(search.trim()){
      setIsEmpty(false);
      
      history.push(`/search/${search}`)
    }else {
      setIsEmpty(true);
    }

  }

  return <>
     <form className="buscador" onSubmit={searchMovies}>
      <input
        className="search_input"
        type="text"
        onChange={handleChange}
        value={search}
        ref={searchTag}
        placeholder="Busque su pelicula preferida ⌨"
      />
      <button type='submit' className='normalize--btn btn_search cursor--pointer'>
        <span role="img" aria-label="emoji_lupa" className="icon_search"> ⌕ </span>
      </button>
    </form>
    {isEmpty && <Alert type='error' msg='Campo vacio 😶'/>} 
  </>
}

export default withRouter(React.memo(Search))