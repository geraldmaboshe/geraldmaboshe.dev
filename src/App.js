import React from 'react';
import Section from './components/section/Section';
import AppNavBar from './components/navbar/AppNavBar';
import './App.css';
import Container from 'reactstrap/lib/Container';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import Articles from './components/articles/Articles';
import Stats from './components/stats/Stats';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Container>
        <Section />
        <Articles />
        <Projects />
        <Stats />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
