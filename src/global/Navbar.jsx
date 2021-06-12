import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => (
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
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
                <NavLink exact to="/login" activeClassName="active" className="nav-item nav-link">
                    Logout
                </NavLink>
            </ul>
        </div>
    </nav>
)