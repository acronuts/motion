import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import authHOC from '../components/authHOC';
import Login from '../pages/Login';
import UserApp from '../pages/UserApp'


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={ authHOC(UserApp) } />
                <Route exact path='/login'  component={ authHOC(Login) }/>
            </Switch>
        </Router>
    )
}

export default Routes;
