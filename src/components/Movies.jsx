import { Movie } from './Movie';

function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h3 className="nothing-found">Sorry, nothing found.</h3>
      )}
    </div>
  );
}

export { Movies };
