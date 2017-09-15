import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Home from './components/Home';
import axios from 'axios';


class App extends Component {
  render() {
    return (
    <div>
      <h3>Welcome to Fake Twitter</h3>
      <Container>
        <Home />
      </Container>
    </div>
    );
  }
}

export default App;
