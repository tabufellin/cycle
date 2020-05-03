import * as types from '../types/users/index'
import { combineReducers } from 'redux'

// DONE
const order = (state = [], action) => {
    switch (action.type) {
        case types.USER_ADDED: {
            return [...state, action.payload.id]
        }
        default: {
            return state
        }
    }
}


const byId = (state = {}, action) => {
    switch (action.type) {
        case types.USER_ADDED: {
            return {
                ...state,
                [action.payload.id] : {
                    email: action.payload.email,
                    name: action.payload.name,
                    description: action.payload.description,
                    hownyMaTrips: action.payload.howManyTrips,
                    password: action.payload.password
                }
            }
        }
        default: {
            return state
        }
    }
}

const users = combineReducers ({
    byId,
    order,
})

export default users

export const getUser = (state,id) => state[id]
export const getUsers = (state) => {
    return state.order.map( id => getUser(state.byId, id))
}



