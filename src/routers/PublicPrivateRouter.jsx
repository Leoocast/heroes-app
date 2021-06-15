import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Proptypes from 'prop-types'

export const PublicPrivateRouter = ({isPublic = false, isPrivate = false, isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest}
        component={props => 
            isAuthenticated && isPrivate
            ? <Component {...props}/>
            : isAuthenticated && isPublic || isPublic
            ? <Component {...props}/>
            : <Redirect to="/"/> 
        }
    />
    )
}

PublicPrivateRouter.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
}