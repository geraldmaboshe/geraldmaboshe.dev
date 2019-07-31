import React, { Component } from 'react';
import Header from './components/Header'
import './App.css';
import Events from './components/Events';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
     <div className="mainDiv">
     
       <Route exact path="/" render={props =>(
         <>
         <Header />
        
         </>
       )}>
       
       </Route>
       <Route path="/events" component={Events}>

       </Route>
       
     </div>
     </Router>
   
    );
  }
}

export default App;
