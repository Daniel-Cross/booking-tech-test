import React, { Component } from 'react'
import SearchInput from './components/SearchInput'

class App extends Component {
  state = {
    location: ''
  }

  handleChange = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };


  render() {
    const { location } = this.state;

    return (
      <div className="App">
        <SearchInput
          location={location}
          type="text"
          id="location"
          value={location}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}

        />
      </div>
    );
  }
}

export default App;