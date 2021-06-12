import React from 'react'

export const LoginScreen = ({history}) => {

    const handleLogin = () => {
        history.replace('/')
    }

    return (
        <div>
            <h1>Login</h1>
            <button className="btn btn-dark" onClick={handleLogin}>Login</button>
        </div>
    )
}