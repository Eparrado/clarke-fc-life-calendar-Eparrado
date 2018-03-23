import React, { Component } from 'react';


class Today extends Component {


  render() {
    return (
      <li className={`today-mood ${this.props.background}`}>
        <p className="mood-value">{this.props.mood}</p>
      </li>
    )
  }
}

export default Today;
