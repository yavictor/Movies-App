import {useState} from 'react';

const Search = (props) => {
  const { searchRequest = Function.prototype } = props;

  const [search, setSearch] = useState('');
  const [queryFilter, setFilter] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      searchRequest(search, queryFilter);
    }
  };

  const handleRadioChange = (e) => {
    setFilter( e.target.name );
    searchRequest(search, e.target.name);
  };

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
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKey}
          />
        </div>
        <button
          className="btn col s2 input-field orange darken-2"
          type="submit"
          name="action"
          onClick={() => searchRequest(search, queryFilter)}
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
            onChange={handleRadioChange}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className=""
            name="movie"
            type="radio"
            checked={queryFilter === 'movie'}
            onChange={handleRadioChange}
          />
          <span>Films</span>
        </label>
        <label>
          <input
            className=""
            name="series"
            type="radio"
            checked={queryFilter === 'series'}
            onChange={handleRadioChange}
          />
          <span>Series</span>
        </label>
      </div>
    </div>
  );  
};

export { Search };
