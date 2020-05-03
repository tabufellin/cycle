  
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/trafficLights';


const ChangeAllTrafficLights = ({ onClickInicio, onClickSearch, onClickAddTrip, onClickHistory, onClickProfile }) => (
    <Fragment>

    <button className='' onClick={onClickInicio}>
    Inicio
    </button>

    <button className='' onClick={onClickSearch}>
    Buscar
    </button>

    <button className='' onClick={onClickAddTrip}>
    Agregar viaje
    </button>

    <button className='' onClick={onClickHistory}>
    historial
    </button>

    <button className='' onClick={onClickProfile}>
    perfil
    </button>

    </Fragment>

);


export default connect(
  undefined,
  dispatch => ({
    onClick() {
      dispatch(actions.changeAllTrafficLights());
    },
  })

