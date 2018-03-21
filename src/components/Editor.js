import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from '../icons/CalendarIcon';

class Editor extends Component {

  render() {
    const date = new Date();
    const today = (date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear());

    return (
      <div className="editor-container">
        <h1>Fecha</h1>
          <div className="date-container">
            <input className="date" type="text" value={`${today}`} disabled="disabled"/>
            <CalendarIcon />
          </div>
        <h1>Estado</h1>
          <div className="mood-container">
            <input type="radio" name="mood" value=":)"/>
            <label className="margin-right">:)</label>

            <input type="radio" name="mood" value=":)" />
            <label>:(</label>
          </div>

          <div className="message-container hidden">
            <h2>Mensaje</h2>
            <input type="text" placeholder="¿Por qué ha sido un buen día?" value="" />
          </div>

          <div className="submit-container">
            <Link to='/' className="submit-button"><button className="send-button" type="submit">Guardar</button></Link>
            <Link to='/' className="submit-cancel-button"><button className="cancel-button" type="submit">Cancelar</button></Link>
          </div>

      </div>


    )
  }
}

export default Editor;


// <Link to='/'>Guardar</Link>
