import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CalendarIcon from '../icons/CalendarIcon';

class Editor extends Component {
  constructor(props){
    super(props);
    this.state = {
      hidden: true,
      message: ''
    };
  }

  handleSelectShowMessage = () => {
    this.setState ({
      hidden: !this.state.hidden
    });
  }

  handleSelectHideMessage = () => {
    this.setState ({
      hidden: true
    });
  }

  handleChangeMessage = (event) => {
    this.setState({
      message: event.target.value
    });
  }
  render() {
    const date = new Date();
    const today = (date.getDate() + "/0" + (date.getMonth() + 1) + "/" + date.getFullYear());

    const showMessage = this.state.hidden ? 'hidden' : '';

    return (
      <div className="editor-container">
        <h1>Fecha</h1>
          <div className="date-container">
            <input className="date" type="text" value={`${today}`} disabled="disabled"/>
            <CalendarIcon />
          </div>
        <h1>Estado</h1>
          <div className="mood-container">
            <input type="radio" name="mood" value=":)" onClick={this.handleSelectShowMessage}/>
            <label className="margin-right">:)</label>

            <input type="radio" name="mood" value=":(" onClick={this.handleSelectHideMessage}/>
            <label>:(</label>
          </div>

          <div className={`${showMessage}`}>
            <h2>Mensaje</h2>
            <input type="text" className="message-container" placeholder="¿Por qué ha sido un buen día?"value={this.state.message} onChange={this.handleChangeMessage}/>
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
