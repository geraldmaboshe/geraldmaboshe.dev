import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import Academic from './components/Academic';
import Languages from './components/Languages';
import Photo from './components/Photo';
import SoftSkills from './components/SoftSkils';
import Learn from './components/Learn';
import Hobbies from './components/Hobbies';
import Fears from './components/Fears';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Academic />
        <Languages />
        <Photo />
        <SoftSkills />
        <Learn />
        <Hobbies />
        <Fears />
        <p> &copy; 2019 Gerald Maboshe - Bongohive Internship Program </p>
      </div>
    );
  }
}

export default App;
