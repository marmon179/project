import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from './pages/Login';
import {Registration} from './pages/Registration';
import {Profile} from './pages/Profile';
import {RecoveryPassword} from './pages/RecoveryPassword';
import {NewPassword} from './pages/NewPassword';
import {Test} from './pages/test/Test';
import Error404 from './pages/error404/Error404';
import Header from './pages/header/Header';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test',
    HEADER: '/header'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <RecoveryPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <NewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

export default Routes;