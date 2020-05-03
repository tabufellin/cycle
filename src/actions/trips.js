import * as types from '../types/trips'
import { v4 as uuidv4} from 'uuid'


export const addTrip = (fromWhere, toWhere, createdById, description, date, time) => ({
    type: types.TRIP_ADDED,
    payload: {
        id: uuidv4(), 
        fromWhere, 
        toWhere, 
        createdById,
        whoJoined: [createdById], 
        description,
        date,
        time
    },
})

export const removeTrip = (id) => ({
    type: types.TRIP_REMOVED,
    payload: id,
})

export const addParticipantTrip = (idTrip, id) => ({
    type: types.TRIP_PARTICIPANT_ADDED,
    payload: {
        id, idTrip
    }
})