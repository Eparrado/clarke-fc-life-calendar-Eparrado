import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Calendar from './components/Calendar';
import Editor from './components/Editor';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: '',
      mood: '',
      todayMoodJson : []
    }
    this.handleClickRenderMood = this.handleClickRenderMood.bind(this);
  }

  handleChangeMood = (event) => {
    let mood = document.querySelector('input[name="mood"]:checked').value;
    this.setState({
      mood: event.target.value
    });
  }

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  }

  handleClickRenderMood = () => {
    const message = this.state.message;
    const mood = this.state.mood;

    this.setState({
      todayMoodJson : [...this.state.todayMoodJson, {message, mood}]
    })
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render = {(props) =>
          <Calendar
           renderMood={this.handleClickRenderMood}/>} />
        <Route path='/editor' render = {(props) =>
          <Editor
            handleChangeMood={this.handleChangeMood}
            message={this.state.mesage}
            handleChangeMessage={this.handleChangeMessage}
            handleClickRenderMood={this.handleClickRenderMood}/>} />
      </Switch>
    )
  }
}

export default App;
