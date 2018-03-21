import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from './components/Calendar';
import Editor from './components/Editor';


class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={ Calendar } />
        <Route path='/editor' component={ Editor } />
      </Switch>
    )
  }
}

export default App;
