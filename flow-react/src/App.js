import React, { Component } from 'react';

import Location from './components/Location'
import Counter from './components/Counter'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Location city='Mumbai' country='India' />
      </div>
    );
  }
}

export default App;
