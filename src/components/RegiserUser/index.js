import React, { useState, Fragment } from 'react';
import * as actions from '../../actions/users'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './styles4.css'
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


      <div class="ellogo">
      <img src= "https://i.imgur.com/75EXYrO.png"  width="320" height="150"> 
      </img>
      </div>


      <div class="square">

        <div class="resumen1">
        <h1> ¡Unete a la comunidad más grande de ciclistas urbanos en Guatemala!</h1>
        </div>

      <div class="titulo1">
      <h2> Registrate</h2>
       </div>


      <div class="nombre1">
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
      </div>





      <div class="correo1">
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
      </div>




    <div class="password1">  

      <label>
        <input
          type="text"
          placeholder="password"
          id="2"
          value={password}
          onChange={e => changepassword(e.target.value)}
        />
      </label>
    </div>



      <div class="repetir1"> 
      <label>
          <input
          type="text"
          placeholder="RepetirPassword"
          id="3"
          value={rePassword}
          onChange={e => changeRePassword(e.target.value)}
          />

      </label>
        </div>


         <div class="registrar1">
        <Link to={{pathname: '/login'}}>
        
            <button type="submit" onClick={() => onSubmit(name,email, password, rePassword)}>
            {'Registrarme!'}
            </button>
            
        </Link>{' '}
       </div>


        <div class="yatengocuenta1">
        <Link to={{pathname: '/login'}}>
        
            <button type="submit" onClick={() => onSubmit()}>
            {'¿Ya tienes una cuenta?'}
            </button> 
            
        </Link>{' '}
        </div>
        
      </div>
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


