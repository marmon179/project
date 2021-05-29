import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Profile} from './pages/Profile';
import {Test} from './pages/test/Test';
import Error404 from './pages/error404/Error404';
import Header from './pages/header/Header';
import { AuthLogin } from './pages/Login/AuthLogin';
import { AurhForgorNewPassword } from './pages/aurhForgorNewPassword/AurhForgorNewPassword';
import { AuthRegistr } from './pages/authRegistr/AuthRegistr';
import { AuthForgotPassword } from './pages/authForgotPassword/AuthForgotPassword';

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

                <Route path={PATH.LOGIN} render={() => <AuthLogin/>}/>
                <Route path={PATH.REGISTRATION} render={() => <AuthRegistr/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <AuthForgotPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <AurhForgorNewPassword/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

export default Routes;