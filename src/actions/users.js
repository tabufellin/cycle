import * as types from '../types/users'
import { v4 as uuidv4} from 'uuid'

export const addUser = (email, name, password) => ({
    type: types.USER_ADDED,
    payload: { id: uuidv4(),
               email, 
               name,
               description: "I'm New!",
               howManyTrips: 0,
               password
             },
})

