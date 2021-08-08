import { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
    queryFilter: '',
  };

  handleKey = (e) => {
    if (e.key === 'Enter') {
      this.props.searchRequest(this.state.search, this.state.queryFilter);
    }
  };

  handleRadioChange = (e) => {
    this.setState(() => ({ queryFilter: e.target.name }), () => {
      this.props.searchRequest(this.state.search, this.state.queryFilter);
    });
  };

  render() {
    const { search, queryFilter } = this.state;

    return (
      <div className="searchBar">
        <div className="row">
          <div className="input-field inline col s10">
            <input
              id="search"
              placeholder="search"
              type="search"
              className="validate"
              value={search}
              onChange={(e) => this.setState({ search: e.target.value })}
              onKeyDown={this.handleKey}
            />
          </div>
          <button
            className="btn col s2 input-field orange darken-2"
            type="submit"
            name="action"
            onClick={() => this.props.searchRequest(search, queryFilter)}
          >
            OK
          </button>
        </div>
        <div className="row radio-group">
          <label>
            <input
              className=""
              name="all"
              type="radio"
              checked={queryFilter === 'all'}
              onChange={this.handleRadioChange}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className=""
              name="movie"
              type="radio"
              checked={queryFilter === 'movie'}
              onChange={this.handleRadioChange}
            />
            <span>Films</span>
          </label>
          <label>
            <input
              className=""
              name="series"
              type="radio"
              checked={queryFilter === 'series'}
              onChange={this.handleRadioChange}
            />
            <span>Series</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
