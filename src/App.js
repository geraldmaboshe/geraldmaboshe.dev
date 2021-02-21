import React from 'react';
import Section from './components/section/Section';
import AppNavBar from './components/navbar/AppNavBar';
import './App.css';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <AppNavBar />
      <Section />
    </div>
  );
}

export default App;
