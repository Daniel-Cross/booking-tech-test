import React from 'react';
import PropTypes from 'prop-types';

const Locations = (props) => {

  const { searchName, cursor } = props;

  return (
    <div className="Locations">
      {searchName.map((array, i) => (
        <p className="locations" key={array.ufi}>
          <div className={cursor === i ? 'active' : 'locations'}>
            {array.name}
          </div>
        </p>
      ))}
    </div>
  );
}

Locations.propTypes = {
  searchName: PropTypes.array.isRequired,
  cursor: PropTypes.number.isRequired
};

export default Locations;
