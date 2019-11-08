import React, { Component } from 'react'
import SearchInput from './components/SearchInput'
import getLocation from './services/getLocation'

class App extends Component {
  state = {
    location: '',
    searchName: '',
    showSearch: false,
    cursor: 0
  }

  handleChange = e => {
    this.setState({
      location: e.target.value
    });
  };

  handleKeyUp = () => {
    const { location } = this.state;

    if (location.length >= 2) {
      this.setState({ showSearch: true });
    } else if (location.length <= 1) {
      this.setState({
        showSearch: false,
        searchName: []
      });
    } else {
      this.setState({
        showSearch: false
      });
    }

    getLocation(location).then(data => {
      this.setState({ searchName: data });
    });
  };

  handleKeyDown = e => {
    const { cursor, searchName } = this.state;
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
    } else if (e.keyCode === 40 && cursor < searchName.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
    }
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { location, searchName, cursor, showSearch } = this.state;

    return (
      <div className="App">
        <SearchInput
          location={location}
          type="text"
          id="location"
          value={location}
          searchName={searchName}
          cursor={cursor}
          showSearch={showSearch}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleKeyUp={this.handleKeyUp}
          handleKeyDown={this.handleKeyDown}
        />
      </div>
    );
  }
}

export default App;