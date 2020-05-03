//NOT DONE
import { connect } from 'react-redux';
import * as selectors from '../../reducers/index'
import React  from 'react';

const Trip = ({eventId, tripData }) => (
    <div className='event-wrapper'>
      <div className="info-event">
        <p>de donde: {tripData.fromWhere}</p>
        <p>a dodne: {tripData.toWhere}</p>
        <p>fecha: {tripData.date}</p>
        <p>hora: {tripData.time}</p>
        <p>cantidad de participantes: {tripData.whoJoined.length}</p>
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
