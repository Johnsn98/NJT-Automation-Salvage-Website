import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import'./App.css';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createTheme from '@material-ui/core/styles/createMuiTheme';

// Pages
import home from './pages/home';

//Components
import Navbar from './components/Navbar';
import Footer from './components/footer';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#343434'
    },
    secondary: {
      main: '#6d6d6d',
    },
  },
  home: {
    color: '#343434',
  }

})

export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className='App'>
      <Navbar/>
        <Router>
          <Switch>
          <Route exact path="/" component={home}/>

          </Switch>
         </Router>
         <Footer/>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App
