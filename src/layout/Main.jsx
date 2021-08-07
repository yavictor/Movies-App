import { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4cb34106&s=star wars')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  searchRequest = (request) => {
    fetch(`http://www.omdbapi.com/?apikey=4cb34106&s=${request}`)
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;

    return (
      <main>
        <div className="container content">
          <Search searchRequest={this.searchRequest} />
          {
            movies.length ? (<Movies movies={movies} />) :
            <div className="">
              <h4 class="center">LOADING...</h4>
              <div class="progress">
                <div class="indeterminate"></div>
              </div>
            </div>
          }
         

          
        </div>
      </main>
    );
  }
}

export { Main };
