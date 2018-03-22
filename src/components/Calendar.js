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
            
          </main>
      </div>
    )
  }
}

export default Calendar;
