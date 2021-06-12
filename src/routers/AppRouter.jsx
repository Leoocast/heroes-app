import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { LoginScreen } from "../components/screens/LoginScreen"
import { MainRouter } from "./MainRouter"

export const AppRouter = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen}/>
            <Route path="/" component={MainRouter}/>
          </Switch>
        </div>
    </Router>
    )
}