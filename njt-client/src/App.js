import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//css
import'./App.css';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme  from '@material-ui/core/styles/createMuiTheme';

// Pages
import Home from './pages/home';
import Sell from './pages/Sell-Components';
import About from './pages/about';
import eWaste from './pages/E-waste';
import sourcing from './pages/sourcing';
import contact from './pages/contact';
import location from './pages/location';
import about from './pages/about';


//Components
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Helmet from 'react-helmet';

//Functions
import ScrollToTop from 'react-router-scroll-top'

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
      <div className="appRoot">
      <MuiThemeProvider theme={theme}>
          <Router>
          <Helmet>
          <meta name='viewport' content="width=device-width, initial-scale=1"></meta>
        <meta NAME="geo.position" CONTENT="43.0389; 87.9065"></meta>
          <meta NAME="geo.placename" CONTENT="Milwaukee"></meta> 
          </Helmet>
          <div className="App">
          <Navbar className="navBar"/>
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route  exact path="/sell" component={Sell}/>   
              <Route  exact path="/about" component={About}/> 
              <Route  exact path="/E-waste" component={eWaste}/>  
              <Route  exact path="/sourcing" component={sourcing}/>  
              <Route  exact path="/contact" component={contact}/>
              <Route  exact path="/location" component={location}/>
              <Route  exact path="/about" component={about}/>
              <Route  exact path="/news" component={about}/>
              <Route  path={["/home", "/users", "*"]} component={Home}/>
            </Switch>   
            </ScrollToTop>       
        <Footer/>
        </div>
        </Router>
      </MuiThemeProvider> 
    </div>
    );
  }
}

export default App;
