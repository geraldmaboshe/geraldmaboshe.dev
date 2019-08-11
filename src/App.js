import React, { Component } from 'react';
import Container from './components/Container';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App" expand="sm">
      <Container />
      </div>
    );
  }
}

export default App;
