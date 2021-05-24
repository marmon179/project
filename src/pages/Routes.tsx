import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Login} from './Login';
import {Registration} from './Registration';
import {Profile} from './Profile';
import {RecoveryPassword} from './RecoveryPassword';
import {NewPassword} from './NewPassword';
import {Test} from './Test';
import Error404 from './error404/Error404';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/new-password',
    TEST: '/test'


}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={PATH.PROFILE} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

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