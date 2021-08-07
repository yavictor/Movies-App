import { Component } from "react";

class Search extends Component {
  state = {
    search: '',
  }

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchRequest(this.state.search);
    }
  }

  render() {
    return (
      <div className="searchBar">
        <div className="row">
          <div className="input-field inline col s10">
            <input
              id="search"
              placeholder="search"
              type="search"
              className="validate"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.handleKey}
            />
          </div>
          <button
              className="btn col s2 input-field orange darken-2"
              type="submit"
              name="action"
              onClick={() => this.props.searchRequest(this.state.search)}
            >OK
            </button>
          </div>
          <div className="row radio-group">
            <label>
              <input className="" name="all" type="radio" checked />
              <span>All</span>
            </label>
            <label>
              <input className="" name="films" type="radio" />
              <span>films</span>
            </label>
            <label>
              <input className="" name="series" type="radio"  />
              <span>Series</span>
            </label>
          </div>      
      </div>

    )
  }
}

export { Search }