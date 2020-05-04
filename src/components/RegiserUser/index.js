import React, { useState, Fragment } from 'react';
import * as actions from '../../actions/users'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
 //NOT DONE
 import { createBrowserHistory } from 'history'
 export const history = createBrowserHistory()

const FormRegisterUser = ({ onSubmit }) => {
    const [name, changeName]=useState('')
    const [email, changeemail] =useState('')
    const [password, changepassword] = useState('')
    const [rePassword, changeRePassword] = useState('')

    return (
      <Fragment>
      <h1> Registro</h1>

      
      <label>
        <input
            type="text"
            placeholder="Tu nombre"
            id="0"
            name="tipo"
            value={name}
            //checked = {"pipi" === selectedOption}
            onChange={e => changeName(e.target.value)}
          />
          
      </label>

      <label>
        <input
            type="text"
            placeholder="example@gmail.com"
            id="1"
            name="tipo"
            value="pecho"
            value={email}
            //checked = {"pecho" === selectedOption}
            onChange={e => changeemail(e.target.value)}
          />
    
      </label>
      <label>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => changepassword(e.target.value)}
        />
      </label>
      <label>
          <input
          type="text"
          placeholder="RepetirPassword"
          value={rePassword}
          onChange={e => changeRePassword(e.target.value)}
          />

      </label>

        <Link to={{pathname: '/login'}}>
            <button type="submit" onClick={() => onSubmit(name,email, password, rePassword)}>
            {'Registrarme!'}
            </button>

        </Link>{' '}

        <Link to={{pathname: '/login'}}>
            <button type="submit" onClick={() => onSubmit()}>
            {'¿Ya tienes una cuenta?'}
            </button> 
        </Link>{' '}

      
      </Fragment>
    );
  } 

export default withRouter(
  connect(
    undefined,
    dispatch => ({
      onSubmit( name, email, password, rePassword) {
        // password and confimaation password
        if (password === rePassword) {
            history.push('/login')
            dispatch(actions.addUser(email, name, password))
            
        }
        
      }
    })
  )(FormRegisterUser))

