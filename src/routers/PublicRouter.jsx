import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import Proptypes from 'prop-types'

export const PublicRouter = ({isAuthenticated, component: Component, ...rest}) => {
    return (
        <Route {...rest}
            component={props => 
                !isAuthenticated 
                ? <Component {...props}/>
                : <Redirect to="/"/> 
            }
        />
    )
}

PublicRouter.propTypes = {
    isAuthenticated: Proptypes.bool.isRequired,
    component: Proptypes.func.isRequired
}