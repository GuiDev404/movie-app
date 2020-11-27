import URL_API from './settings';

const getMovieById = async (id) => {
  try {
    const URL = `${URL_API}&i=${id}&plot=full`;
    const response = await fetch(URL);
    const details = await response.json();
 
    return details
  } catch (error) {
    return {
      msg: error.message,
      details: null
    }
  }
}

export default getMovieById
