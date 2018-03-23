import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Calendar extends Component {


  render() {

    return (
      <div>
          <header className="header">
            <Link to='/editor' className="header-content">+</Link>
          </header>
          <main className="smile-calendar">
            <ul className="mood-list">
              <li className="today-mood good-day">
                <p className="mood-value"></p>
              </li>
            </ul>
          </main>
      </div>
    )
  }
}

export default Calendar;
