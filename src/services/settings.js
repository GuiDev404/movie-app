const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env;
const API_URL = `${REACT_APP_API_URL}/?apikey=${REACT_APP_API_KEY}`;

export default API_URL;