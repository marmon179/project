import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Profile} from './pages/Profile';
import {Test} from './pages/test/Test';
import Error404 from './pages/error404/Error404';
import Header from './pages/header/Header';
import { AuthLogin } from './pages/Login/AuthLogin';
import { AurhForgorNewPassword } from './pages/ForgorNewPassword/AurhForgorNewPassword';
import { AuthRegistr } from './pages/Registr/AuthRegistr';
import { AuthForgotPassword } from './pages/ForgotPassword/AuthForgotPassword';
import {AuthForgotPasswordCheckEmail} from './pages/ForgotPasswordCheckEmail/AuthForgotPasswordCheckEmail';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test',
    HEADER: '/header',
    FORGOT_EMAIL:'/check-email'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} render={() => <AuthLogin/>}/>
                <Route path={PATH.REGISTRATION} render={() => <AuthRegistr/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <AuthForgotPassword/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <AurhForgorNewPassword/>}/>
                <Route path={PATH.FORGOT_EMAIL} render={() => <AuthForgotPasswordCheckEmail/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

export default Routes;