import React from 'react';
import ReactDOM from 'react-dom';
import SearchInput from '../components/SearchInput'
import { shallow } from 'enzyme';
import '../testSetup';

describe('SearchInput', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput
      value="mock value"
      id="mock location"
      type="mock text"
      handleChange={() => null}
      handleSubmit={() => null}
      handleKeyUp={() => null}
      handleKeyDown={() => null}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render an input field with the correct proptypes', () => {
    const testInput = shallow(
      <SearchInput
        value="mock value"
        id="mock location"
        type="mock text"
        handleChange={() => null}
        handleSubmit={() => null}
        handleKeyUp={() => null}
        handleKeyDown={() => null}
      />
    )
    expect(testInput.find('input').prop('value')).toBe('mock value');
    expect(testInput.find('input').prop('id')).toBe('mock location');
    expect(testInput.find('input').prop('type')).toBe('mock text');
  })

  it('should call onChange and onSubmit handlers when user types into input field', () => {
    const mockHandler = jest.fn();
    const testInput = shallow(
      <SearchInput
        value="mock value"
        id="mock location"
        type="mock text"
        handleChange={mockHandler}
        handleSubmit={mockHandler}
        handleKeyUp={mockHandler}
        handleKeyDown={mockHandler}
      />
    );
    expect(mockHandler).not.toHaveBeenCalled();
    testInput.find('input').simulate('change');
    testInput.find('input').simulate('submit');
    expect(mockHandler).toHaveBeenCalled();
  })
})
