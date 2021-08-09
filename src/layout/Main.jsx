import { Component } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;
let typeFilter = '';

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=star wars`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  }

  searchRequest = (request, typeRequest = 'all') => {
    this.setState({ loading: true });

    if (typeRequest !== 'all') {
      typeFilter = `&type=${typeRequest}`;
    }
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${request}${typeFilter}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((error) => {
        console.error(error);
        this.setState({ loading: false });
      });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main>
        <div className="container content">
          <Search searchRequest={this.searchRequest} />
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
  }
}

export { Main };
