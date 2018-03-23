import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Today from './Today';


class Calendar extends Component {


  render() {
    const userData = this.props.userData;

    return (
      <div>
          <header className="header">
            <Link to='/editor' className="header-content">+</Link>
          </header>
          <main className="smile-calendar">
            <ul className="mood-list">
              {userData.map((data, index) =>
                <Today
                key={index}
                mood={data.mood}
                background={data.background}
                />
            )}

            </ul>
          </main>
      </div>
    )
  }
}

export default Calendar;
