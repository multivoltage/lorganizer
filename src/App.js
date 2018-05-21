// React
import React, { Component } from 'react';
// Pages
import Home from './pages/Home';
import './App.css';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightBlue600, blue800 } from 'material-ui/styles/colors';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Setup from './pages/Setup';

// Custom theme
const muiTheme = getMuiTheme({
  palette: {
    fontFamily: 'Roboto, sans-serif',
    primary1Color: lightBlue600,
    accent1Color: blue800
  },
  checkbox: { checkedColor: '#039BE5' }
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>

        <BrowserRouter >
          <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/setup" component={Setup} />
          </Switch>
        </BrowserRouter>
        
      </MuiThemeProvider>
    );
  }
}

export default App;