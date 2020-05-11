//NOT DONE
import { connect } from 'react-redux';
import * as selectors from '../../reducers/index'
import React  from 'react';
import './styles5.css'

const Trip = ({eventId, tripData }) => (
  <div class="square">
  <div class="resumen1">
        <h1> Tu Viaje</h1>
        </div>


    <div className='event-wrapper'>
      <div className="info-event">
        <p>de donde: {tripData.fromWhere}</p>
        <p>a dodne: {tripData.toWhere}</p>
        <p>fecha: {tripData.date}</p>
        <p>hora: {tripData.time}</p>
        <p>cantidad de participantes: {tripData.whoJoined.length}</p>
        <h1> --------------------------------------- </h1>
      </div>
    </div>
   </div> 
);

const mapStateToProps = (state, {id}) => {
  
  console.log("state that im passing")
  console.log(state)
  console.log("tripdata")
  console.log(id)
  console.log(selectors.getTrip(state,id))
  return({
      tripData: selectors.getTrip(state, id )}
  )}

export default connect(
  mapStateToProps
)(Trip);
