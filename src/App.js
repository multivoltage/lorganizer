// React
import React, { Component } from 'react';
// Pages
import Home from './pages/Home';
import './App.css';

// Material UI
import { withStyles, withTheme, createMuiTheme } from '@material-ui/core/styles';
import { lightBlue600, blue800 } from '@material-ui/core/colors';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Setup from './pages/Setup';
import Today from './pages/Today';


class App extends Component {

  render() {
    return (
      <div>
        
        <BrowserRouter >
          <Switch>
              {/* <Route path="/" exact component={Setup}/> */}
              <Route path="/setup" component={Setup} />
              <Route path="/today" component={Today} />
          </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;