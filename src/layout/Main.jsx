import { useState, useEffect } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
let typeFilter = '';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchRequest = (request, typeRequest = 'all') => {    
    setLoading(true);

    if (typeRequest !== 'all') {
      typeFilter = `&type=${typeRequest}`;
    }
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${request}${typeFilter}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);;
      });
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=star wars`)
    .then((response) => response.json())
    .then((data) => {
      setMovies(data.Search);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);;
    });
  }, []);

  return (
    <main>
      <div className="container content">
        <Search searchRequest={searchRequest} />
        {!loading ? (
          <Movies movies={movies} />
        ) : (
          <div className="">
            <h4 className="center">LOADING...</h4>
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export { Main };
