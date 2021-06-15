import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import { types } from '../types/types'

export const Navbar = () => {

    const { user, dispatchUser } = useContext(AuthContext)

    const history = useHistory()

    const styleUser = {
        color: 'white'
    }

    const handleLogout = () => {
        const actionLogout = {
            type: types.AUTH.LOGOUT,
            payload: {
                logged: false
            }
        }

        dispatchUser(actionLogout)
        
        history.replace('/login')
    }

return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        
        <Link to="/" className="navbar-brand">
            Asociaciones
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                <NavLink exact to="/marvel" activeClassName="active" className="nav-item nav-link">
                    Marvel
                </NavLink>

                <NavLink exact to="/dc" activeClassName="active" className="nav-item nav-link">
                    DC
                </NavLink>
               
                <NavLink exact to="/search" activeClassName="active" className="nav-item nav-link">
                    Search
                </NavLink>
            </div>
            
            <div className="my-2 my-lg-0">
                <ul className="navbar-nav ml-auto">
                    <button 
                        onClick={handleLogout}
                        className="nav-item btn btn-outline-light">
                    Logout
                    </button>
                </ul>
            </div>
            <span style={styleUser}>{user.name}</span>
        </div>
    </nav>
)}