function Movie (props) {
  const {
    Title: title,
    Year: year,
    Poster : poster,
    imdbRating,
    imdbID,
    Type: type,
  } = props;

  return (
  <div className="card movie" id={imdbID}>
    <div className="card-image waves-effect waves-block waves-light">
      {
        poster === 'N/A' ?
          <img className="activator" src={`https://via.placeholder.com/300x425?text=${title}`} alt={`${title} poster`} />
          :
          <img className="activator" src={poster} alt={`${title} poster`} />
      }
      
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{title}</span>
      <p>Year: {year} <span className="right">Type: {type}</span><br />
        Rating: {imdbRating}</p>
    </div>
  </div>
  )
}

export {Movie}