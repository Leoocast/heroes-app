import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom"
import { Navbar } from '../global/Navbar'
import { HeroeScreen } from '../components/screens/HeroeScreen'
import { MarvelScreen } from '../components/screens/MarvelScreen'
import { DcScreen } from '../components/screens/DcScreen'
import { SearchScreen } from '../components/screens/SearchScreen'

export const MainRouter = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroeScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>   
        </>
    )
}
