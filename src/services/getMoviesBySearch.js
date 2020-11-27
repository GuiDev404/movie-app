import URL_API from './settings';

const getMoviesBySearch = async ({ movie, page = 1 } = {}) => {
 try {
   
   const URL = `${URL_API}&s=${movie}&page=${page}`;
   const response = await fetch(URL);
   const data = await response.json();

   return {
      data: data.Search,
      movie
   }
 } catch (error) {
   return {
     msg: error.message,
     data: false,
     movie
   }
 }
}

export default getMoviesBySearch
