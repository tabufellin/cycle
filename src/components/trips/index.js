
import Trip from '../trip/index'
import { connect } from 'react-redux';
import React  from 'react';
import './styles6.css'
import * as selectors from '../../reducers/index'

const Trips = ({trips}) => (

    <div className="trips">
    
      {console.log("trips inside trips")}
      {console.log(trips)}

      
      {trips.length === 0 ? (



        <div class="square">

        <h4>
        {"No hay eventos :("}

        </h4>

        </div>


      ) : (
        trips.map((item, i) => <Trip key={i} eventId={item} id={item.id}  tripData={item} />)
      )}

    </div>

)

const mapStateToProps = (state) => {

  console.log("selectores")
  console.log(selectors.getTrips(state))
  console.log(selectors.getUsers(state))

  return({
    trips: selectors.getTrips(state)
  })
}
export default connect(
    mapStateToProps
  )(Trips);
  