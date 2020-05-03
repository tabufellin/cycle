import React, { useState, Fragment } from 'react';
import * as actions from '../../actions/trips'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
 //NOT DONE
const FormTrips = ({ onSubmit }) => {
    const [fromWhere, changefromWhere]=useState('')
    const [toWhere, changeToWhere] =useState('')
    const [description, changeDescription] = useState('')
    const [date, changeDate] = useState('')
    const [time, changeTime] = useState('')

    return (
      <Fragment>
        <p>Creemos un viaje!</p>

      
      <label>
        <input
            type="text"
            placeholder="de donde"
            id="0"
            name="tipo"
            value={fromWhere}
            //checked = {"pipi" === selectedOption}
            onChange={e => changefromWhere(e.target.value)}
          />
          
      </label>

      <label>
        <input
            type="text"
            placeholder="a donde"
            id="1"
            name="tipo"
            value="pecho"
            value={toWhere}
            //checked = {"pecho" === selectedOption}
            onChange={e => changeToWhere(e.target.value)}
          />
    
      </label>
        <input
          type="text"
          placeholder="Descripción"
          value={description}
          onChange={e => changeDescription(e.target.value)}
        />

      <label>
        <input
          type="date"
          placeholder=""
          value={date}
          onChange={e => changeDate(e.target.value)}
        />     
      
      </label>

      <label>
        <input
          type="time"
          placeholder=""
          value={time}
          onChange={e => changeTime(e.target.value)}
        />     
      
      </label>

      <Link to={{pathname: '/nav-bar/inicio'}}>
        <button type="submit" onClick={() => onSubmit(fromWhere,toWhere, description, date, time)}>
          {'Crear'}
        </button>
      </Link>     

      
      </Fragment>
    );
  } 

export default withRouter(
  connect(
    undefined,
    dispatch => ({
      onSubmit( fromWhere, toWhere, description, date, time) {
        // i still have to fix the dateTime thing and the id generator
        //console.log(fromWhere, toWhere, description)
        dispatch(actions.addTrip(fromWhere, toWhere, 1, description, date, time))
        
      }
    })
  )(FormTrips))


  //export const addEvent = (type, babyAssigned, notes)