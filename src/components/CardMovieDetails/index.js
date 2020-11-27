import React from 'react'
import './CardMovieDetails.css'; 
import DetailsInfo from '../DetailsInfo'

const CardMovieDetails = ({Poster, Title,Year, Type, DirectorOrWriter, Genre, Duration, Sinopsis, ...restDetails})=> {

  return (
    <div className="card-details">
      <div className="container-img__details">
        <img
          src={!Poster
              ? `${process.env.PUBLIC_URL}/img/default-movie.jpg`
              : Poster
          }
          className="container-img__img"
          alt="poster"
        />
      </div>

      <div className="container-info__details">
        <h3 className="container-info__title-details">
          {Title} <i className="year"> ({Year}) </i>
        </h3>

        <DetailsInfo
          year={Year}
          type={Type}
          directorOrWriter={
            DirectorOrWriter ? DirectorOrWriter : "No available"
          }
          genre={Genre}
          duration={Duration}
          sinopsis={Sinopsis}
          language={restDetails.Language}
          awards={restDetails.Awards}
          imdbRating={restDetails.imdbRating}
        />
      </div>
    </div>
  );
}

export default CardMovieDetails
