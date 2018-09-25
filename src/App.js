import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Error from './components/Error';
import Navigation from './components/Navigation';
import "./assets/CSS/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/products" component={Products} />
            <Route component={Error} />
          </Switch>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
