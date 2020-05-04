  
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './styles3.css'
import { Link } from 'react-router-dom'

const NavBar = ({ onClickInicio, onClickSearch, onClickAddTrip, onClickHistory, onClickProfile }) => (
    <div className='component'>
    
    <Link to={{pathname: '/nav-bar/inicio'}}>
    <button className='' onClick={onClickInicio}>
    Inicio
    </button>
    </Link>


    <button className='' onClick={onClickSearch}>
    Buscar
    </button>

    <Link to={{pathname: '/createTrip'}}>
    <button className='' onClick={onClickAddTrip}>
    Agregar viaje
    </button>
    </Link>{' '}

    <button className='' onClick={onClickHistory}>
    historial
    </button>

    <button className='' onClick={onClickProfile}>
    perfil
    </button>

    </div>

);


export default connect(
  undefined,
  dispatch => ({
    onClickInicio() {
      console.log("inicio")
    },
    onClickSearch() {
        console.log("Search")
      },
    onClickAddTrip() {
    console.log("addTrip")
    },
    onClickHistory() {
    console.log("history")
    },
    onClickProfile() {
    console.log("profile")
    },
  }))(NavBar)

