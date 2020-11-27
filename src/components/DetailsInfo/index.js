import React from 'react';
import './DetailsInfo.css';
import MiniInfo from '../MiniInfo' 

const DetailsInfo = ({ directorOrWriter, genre, sinopsis, type, duration,imdbRating, language, awards }) => {
  return (
    <div className='details-info'>

     <h4 className='directorOrWriter'>
       {directorOrWriter === 'Director'
          ? <> Directed by <span className='highlight'> {directorOrWriter} </span> </>
          : <> Written by <span className='highlight'> {directorOrWriter} </span> </>
        }
      </h4>
      <p className='genre'> {genre} </p>  
      <p className='sinopsis'> {sinopsis} </p>  
    
      <div className='container-mini-info'>
        {type && <MiniInfo txt={type} icon='fas fa-film'/>}
        {duration && <MiniInfo txt={duration} icon='far fa-clock'/>}
        {imdbRating && <MiniInfo txt={`${imdbRating}(imdb)`} icon='fas fa-star'/>}
        {language && <MiniInfo txt={language} icon='fas fa-language'/>}
      </div>
      <div className='awards'>
       {awards && <MiniInfo txt={awards} icon='fas fa-award' />} 
      </div>
    </div>
  )
}

export default DetailsInfo
