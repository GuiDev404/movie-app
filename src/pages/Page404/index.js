import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Page404.css'; 

function Page404 () {
  const { pathname } = useLocation();

  return (
    <div className="container-error-404">
      <h1 className="not-found__title"> 
        404, Lo sentimos la pagina {pathname} no existe! 
      </h1>
      <img
        // src={`${process.env.PUBLIC_URL}/img/404-error.svg`}
        src={`${process.env.PUBLIC_URL}/img/not-found.png`}
        className="image-404"
        alt="404_no_encontrado"
      />
        <Link to='/'> 
          <button className="custom--btn btn--redirect cursor--pointer">
            Inicio
          </button>
        </Link>
      
    </div>
  );
}

export default Page404