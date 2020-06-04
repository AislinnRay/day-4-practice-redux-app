import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Register from './components/Register'

export default (
    <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/dashboard" component={Profile}/>
    </Switch>
)