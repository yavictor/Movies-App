import { Component } from "react";
import { Movies } from "../components/Movies";

class Main extends Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=4cb34106&s=star wars')
      .then(response => response.json())
      .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const {movies} = this.state;

    return (
      <main>
        <div className="container content">
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
