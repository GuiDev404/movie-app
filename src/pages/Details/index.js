import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useSEO from '../../hooks/useSEO'
import './Details.css'; 

import getMovieById from '../../services/getMovieById';
import Movie from '../../components/CardMovie';
import MovieDetails from '../../components/CardMovieDetails';
import Navbar from '../../components/Navbar';
import Loader from '../../components/Loader';

import { sanitizeProps } from '../../helpers';

function Details () {
  const { id } = useParams();
  const [ isLoading, setIsLoading ] = useState(true);
  const [ result, setResult ] = useState({});
  const [ moviesStoraged, setMoviesStoraged ] = useState([]);
  const [ hasMoviesStoraged ,setHasMoviesStoraged] = useState(false);
  const [ title, setTitle ] = useState({ description: 'Pururu', title: 'Espere... 😌' }) 
  useSEO(title);

  useEffect(() => {
    getMovieById(id)
      .then(res=> {
        const validProps = sanitizeProps(res);

        setTitle({ 
          description: validProps.Plot, 
          title: validProps.Title && validProps.Title 
        })
        setResult(validProps);
      }).catch((err)=> {
        console.log(err);
      }).finally(()=> setIsLoading(false))
      
  }, [id])

  useEffect(() => {
    let moviesStoraged = JSON.parse(localStorage.getItem('firstResults'))
                          .filter(Boolean)
                          .filter(ele=> ele.imdbID !== id);

    setHasMoviesStoraged(moviesStoraged.length === 0 ? false : true); 
    setMoviesStoraged(moviesStoraged);
  }, [id])
  
  return (
    <main>
      <Navbar titleApp="Pururu" />
      {!isLoading ? (
        <>
          <MovieDetails
            Poster={result.Poster}
            DirectorOrWriter={
              ["movie", "game"].includes(result.Type)
                ? result.Director
                : result.Writer
            }
            Title={result.Title}
            Type={result.Type}
            Year={result.Year}
            Genre={result.Genre}
            Duration={result.Runtime}
            Sinopsis={result.Plot ? result.Plot : "No synopsis available 😞"}
            Language={result.Language}
            Awards={result.Awards}
            imdbRating={result.imdbRating}
          />
          <div className="smalls-ralationed-movies">
            {hasMoviesStoraged &&
              moviesStoraged.map((ele) => (
                <Movie
                  key={ele.imdbID}
                  imdbID={ele.imdbID}
                  Title={ele.Title}
                  Poster={ele.Poster}
                  isSmallCard
                />
              ))}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Details