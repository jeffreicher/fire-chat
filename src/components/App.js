import React, { Component } from 'react';
import '../assets/css/App.css';
import { Route } from 'react-router-dom';
import Home from './home';
import Chat from './chat';
import Nav from './nav';
import 'materialize-css/dist/css/materialize.min.css';
import SignUp from './sign_up';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/chat" component={Chat} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    );
  }
}

export default App;
