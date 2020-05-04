import React, { useState, Fragment } from 'react';
import * as actions from '../../actions/users'
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux';
import './styles2.css'
import * as selectors from '../../reducers/index'
import { Link } from 'react-router-dom'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()
 //NOT DONE
const FormLogin = ({users ,onSubmit }) => {

    const [email, changeemail] =useState('')
    const [password, changepassword] = useState('')

    return (
      <Fragment>
        

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
      <lavel>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => changepassword(e.target.value)}
        />
      </lavel>

      <Link to={{pathname: '/nav-bar/inicio'}}>
        <button type="submit" onClick={() => onSubmit(email, password, users)}>
          {'Log in'}
        </button>
      </Link>


      
      </Fragment>
    );
  } 


const mapStateToProps = (state) => {
    console.log("state")
    return({
        users: selectors.getUsers(state)
      })
}
export default withRouter(
    connect(
      mapStateToProps,
      dispatch => ({
        onSubmit(email, password, users) {
          // password and confimaation password
          //console.log(selectors.getUsers)
          console.log("hola")
          console.log(users)
          const emails = users.map(user => user.email)
          const passwords = users.map(user => user.password)
          const emailTrue = emails.includes(email)
          const passwordTrue = passwords.includes(password)
          console.log(emailTrue, passwordTrue)
          if (emailTrue && passwordTrue) {
              console.log("You are in!")
              history.push('/login/' + email + '/createTrip')
          }

          
        }
      })
    )(FormLogin))
  
/*
  const mapStateToProps = (state) => {

    console.log("holaa")
    console.log(selectors.getTrips(state))
  
    return({
      trips: selectors.getTrips(state)
    })
  }
  export default connect(
      mapStateToProps
    )(Trips);
    */