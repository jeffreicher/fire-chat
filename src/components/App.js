import React, { Component } from 'react';
import '../assets/css/App.css';
import { Route } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
      </div>
    );
  }
}

export default App;
