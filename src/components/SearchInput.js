import React from 'react';
import PropTypes from 'prop-types'
import Locations from './Locations'

const SearchInput = (props) => {

  const {
    handleChange,
    handleKeyUp,
    handleSubmit,
    handleKeyDown,
    value,
    type,
    id,
    searchName,
    cursor,
    showSearch
  } = props;

  return (
    <div className="SearchInput">
      <h1>Where are you going?</h1>
      <form id="search-form" onSubmit={handleSubmit}>
        <label htmlFor="location">Pick-up Location</label>
        <input
          type={type}
          id={id}
          value={value}
          placeholder="city, airport, station, region, district..."
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onKeyDown={handleKeyDown}
        />
        {showSearch ? (
          <Locations searchName={searchName} cursor={cursor} />
        ) : null}

        <button value="submit" type="submit" id="search-button">
          Search
          </button>
      </form>
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  handleKeyUp: PropTypes.func.isRequired
};

export default SearchInput;