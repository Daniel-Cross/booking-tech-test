import React from 'react';
import PropTypes from 'prop-types'

const SearchInput = (props) => {

  const {
    handleChange,
    handleSubmit,
    value,
    type,
    id,
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
        />
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