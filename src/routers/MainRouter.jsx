import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { Navbar } from '../global/Navbar'
import { HeroeScreen } from '../components/screens/HeroeScreen'
import { MarvelScreen } from '../components/screens/MarvelScreen'
import { DcScreen } from '../components/screens/DcScreen'

export const MainRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/marvel/:heroeId" component={HeroeScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>   
        </>
    )
}
