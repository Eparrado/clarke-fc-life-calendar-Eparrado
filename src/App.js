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
      background: '',
      todayMoodJson : []
    }
    this.handleClickRenderMood = this.handleClickRenderMood.bind(this);
  }

  handleChangeMoodHappy = (event) => {
    this.setState({
      mood: event.target.value,
      background: 'good-day'
    });
  }

  handleChangeMoodSad = (event) => {
    this.setState({
      mood: event.target.value,
      background: 'bad-day'
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
    const background = this.state.background;

    this.setState({
      todayMoodJson : [...this.state.todayMoodJson, {message, mood, background}]
    })
  }

  componentWillMount(nextProps, nextState) {
   localStorage.getItem('todayMoodJson') && this.setState({
     todayMoodJson: JSON.parse(localStorage.getItem('todayMoodJson'))
   });
 }

 componentWillUpdate(nextProps, nextState){
   localStorage.setItem('todayMoodJson', JSON.stringify(nextState.todayMoodJson));
 }


  render() {
    return (
      <Switch>
        <Route exact path='/' render = {(props) =>
          <Calendar
           userData={this.state.todayMoodJson}/>} />
        <Route path='/editor' render = {(props) =>
          <Editor
            handleChangeMoodHappy={this.handleChangeMoodHappy}
            handleChangeMoodSad={this.handleChangeMoodSad}
            message={this.state.mesage}
            handleChangeMessage={this.handleChangeMessage}
            handleClickRenderMood={this.handleClickRenderMood}/>} />
      </Switch>
    )
  }
}

export default App;
