import { Component } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4cb34106&s=star wars')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchRequest = (request, typeRequest = 'all') => {
    this.setState({ loading: true });
    let typeFilter = '';
    if (typeRequest !== 'all') {
      typeFilter = `&type=${typeRequest}`;
    }
    fetch(`http://www.omdbapi.com/?apikey=4cb34106&s=${request}${typeFilter}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
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
