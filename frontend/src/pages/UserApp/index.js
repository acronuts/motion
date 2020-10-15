import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FeedsContainer from '../../components/FeedsContainer';
import NavBar from '../../components/NavBar';
import { userAction } from '../../store/actions/userAction';
import { MainStyle } from './style';
import UserProfile from '../UserProfile'
import FindFriends from '../FindFriends'

const UserApp = () => {
    const user = useSelector(state => state.authReducer.user)

    const dispatch = useDispatch()

    useEffect(()=>{
        if (!user) {
            dispatch(userAction())
        }
    }, [user])

    return (
        <MainStyle>
            <Router >
                <NavBar />
                    <Switch >
                        <Route exact path='/profile' component= { UserProfile } />
                        <Route exact path='/' component= { FeedsContainer } />
                        <Route exact path='/friends' component={ FindFriends } />
                    </Switch>
            </Router>
        </MainStyle>
    )
};

export default UserApp