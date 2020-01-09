import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import'./App.css';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

// Pages
import Home from './pages/home';
import Sell from './pages/Sell-Components';
import About from './pages/about';
import eWaste from './pages/E-waste';



//Components
import Navbar from './components/Navbar';
import Footer from './components/footer';



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

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
          <Router>
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  exact path="/sell" component={Sell}/>   
              <Route  exact path="/about" component={About}/> 
              <Route  exact path="/E-waste" component={eWaste}/>  
            </Switch>          
        <Footer/>
        </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
