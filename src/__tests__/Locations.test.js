import React from 'react';
import ReactDOM from 'react-dom';
import Locations from '../components/Locations';

describe('Locations', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Locations
      cursor={0}
      searchName={['mock array value', 'mock array value', 'mock array value']}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

})
