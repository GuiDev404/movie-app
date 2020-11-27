import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSEO from '../../hooks/useSEO';

import Button from '../../components/Button';
import ContainerMovies from '../../components/ContainerMovies';
import Loader from '../../components/Loader';
import Header from "../../components/Header";

import getMoviesBySearch from '../../services/getMoviesBySearch';

const SearchResult = () => {
  const { movie }  = useParams();
  const [ result, setResult ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ page, setPage ] = useState(1);
  const [ title, setTitle ] = useState({ description: 'Pururu', title: 'Espere... 😌' }) 
  useSEO(title);
  
  useEffect(() => {
    getMoviesBySearch({ movie: decodeURI(movie.trim().toLowerCase()), page })
      .then(res=> {
        setResult(res);

        let movieTitle = decodeURI(movie.trim().toLowerCase());
        setTitle({ 
          description: `Resultados de la busqueda para ${movieTitle} Pururu App`, 
          title: `Resultados para ${movieTitle}`  
        });
      }).catch((err)=> {
        setResult(err);
      }).finally(()=> {
        setIsLoading(false);
      })

  }, [movie, page])

  useEffect(() => {
    if(result && result.data){
      let shuffleResults = result.data.sort(()=> Math.random() - 0.5);
      let firstResults = shuffleResults.slice(0,4);
  
      localStorage.setItem('firstResults', JSON.stringify(firstResults))
    }
  }, [result])

  return (
    <>
      <Header />

      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContainerMovies movies={result.data} keywordSearch={result.movie} />
          {result.data && (
            <div className="center-btns">
              <Button
                styles={
                  "btn btn-pages-home txt--center cursor--pointer normalize--btn"
                }
                txt="← Volver"
                fnEvtClick={() => page > 1 && setPage(page - 1)}
              />
              <Button
                styles={
                  "btn btn-pages-home txt--center cursor--pointer normalize--btn"
                }
                txt="Siguiente →"
                fnEvtClick={() => page < 99 && setPage(page + 1)}
              />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default SearchResult
