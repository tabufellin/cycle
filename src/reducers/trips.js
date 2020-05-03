import * as types from '../types/trips'
import {combineReducers} from 'redux'
import omit from 'lodash'

const order = (state = [], action) => {
    switch (action.type) {
        case types.TRIP_ADDED: {
            return [...state, action.payload.id]
        }
        case types.TRIP_REMOVED: {
            return omit (state, action.payload.id)
        }
        default: {
            return state
        }
    }
}

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.TRIP_ADDED: {
            return {
                ...state,
                [action.payload.id] : {
                    id: action.payload.id,
                    fromWhere: action.payload.fromWhere,
                    toWhere: action.payload.toWhere,
                    createdById: action.payload.createdById,
                    whoJoined: action.payload.whoJoined,
                    description: action.payload.description,
                    date: action.payload.date,
                    time: action.payload.time
                }
            }
        }
        case types.TRIP_REMOVED: {
            return omit (state, action.payload.id)
        }
        case types.TRIP_PARTICIPANT_ADDED: {
            return {
                ...state,
                [action.payload.idTrip] : {
                    whoJoined: [action.payload.id]
                },
            }
        }
        default: {
            return state
        }
    }
}

const trips = combineReducers ({
    byId,
    order,
})

export default trips

export const getTrip = (state,id) => state[id]
export const getTrips = (state) => state.order.map(
    id=>getTrip(state.byId,id)
    )

//export const getTripsByUser = (state, userId) => state.order.map(id => (getTrip(state, id))).filter((trip) => trip.whoJoined.includes(userId))