import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {

    const { dispatchUser } = useContext(AuthContext)
    
    const lastPath = localStorage.getItem('lastPath') || '/'

    const handleLogin = () => {

        const loginAction = {
            type: types.AUTH.LOGIN,
            payload: {
                name: "Leo Castellanos"
            }
        }

        dispatchUser(loginAction)
        
        history.replace(lastPath)
    }

    return (
        <div>
            <h1>Login</h1>
            <button className="btn btn-dark" onClick={handleLogin}>Login</button>
        </div>
    )
}