import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Proptypes from 'prop-types'

export const PrivateRouter = ({isAuthenticated, component: Component, ...rest}) => {
    
    const { location: {pathname} } = rest

    localStorage.setItem('lastPath', pathname)

    return (
        <Route {...rest}
            component={props => 
                isAuthenticated 
                ? <Component {...props}/>
                : <Redirect to="/login"/> 
            }
        />
    )
}

PrivateRouter.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
}