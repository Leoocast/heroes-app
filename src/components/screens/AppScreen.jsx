import React, { useReducer, useEffect } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { authReducer } from '../../auth/authReducer'
import { AppRouter } from '../../routers/AppRouter'

const initAuthReducer = () => 
    JSON.parse(localStorage.getItem('user')) ||
    {logged: false} 

export const AppScreen = () => {

    const [user, dispatchUser] = useReducer(authReducer, {}, initAuthReducer)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user])

    return (
        <AuthContext.Provider value={{user, dispatchUser}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
