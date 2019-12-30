import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import'./App.css';

// Pages
import home from './pages/home';
import Navbar from './components/Navbar';

export class App extends Component {
  render() {
    return (
      <div className='App'>
      <Navbar/>
        <Router>
          <Switch>
          <Route exact path="/" component={home}/>

          </Switch>
         </Router>
      </div>
    );
  }
}

export default App
