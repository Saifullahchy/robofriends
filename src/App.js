import { Component } from 'react';
import CardList from './components/card-list';
import SearchBox from './components/search-box';

import './App.css';
import Scroll from './components/scroll';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({ robots: user });
      });
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name
        .toLocaleLowerCase()
        .includes(searchfield.toLocaleLowerCase());
    });

    return !robots.length ? (
      <h1>Loading....</h1>
    ) : (
      <>
        <div className="tc">
          <h1 className="f1">RoboFirends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;
