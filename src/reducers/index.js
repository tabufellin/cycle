/// definicion de mi combineReducer
import { combineReducers } from 'redux'
import users, * as usersSelectors from  './users'
import trips, * as tripsSelectors from './trips'
//import { reducer as formsReducer } from 'redux-form';
//var formReducer = require('redux-form').reducer;

const reducer = combineReducers({
    users,
    trips
})


export default reducer

export const getUser = (state, id) => usersSelectors.getUser(state.users.byId, id)
export const getUsers = (state) => usersSelectors.getUsers(state.users)
export const getTrip = (state, id) => tripsSelectors.getTrip(state.trips.byId ,id)
export const getTrips = (state) => tripsSelectors.getTrips(state.trips)

