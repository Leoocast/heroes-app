import { types } from "../types/types"

const { AUTH } = types

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AUTH.LOGIN:
            return {...state, ...action.payload, logged: true}            

        case AUTH.LOGOUT:
            return { logged: false} 
        default:
            return state
    }
}