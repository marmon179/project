import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import {Profile} from './pages/Profile';
import Error404 from './pages/error404/Error404';
import {RegistrationContainer} from './pages/Registr/RegistrationContainer';
import {ForgotNewPasswordContainer} from './pages/passwordRecovery/enterNewPassword/NewPasswordContainer';
import {CheckEmail} from './pages/passwordRecovery/checkEmail/CheckEmail';
import {EnterEmailContainer} from './pages/passwordRecovery/enterEmail/EnterEmailContainer';
import {AuthLoginContainer} from './pages/Login/AuthLoginContainer';
import {Test} from './pages/test/Test';
import {PacksListContainer} from './pages/mainPacksList/MainContainer';
import {ModalDeletePack} from './pages/modalWindows/modalDeletePack/ModalDeletePack';
import {ModalAddNewPackContainer} from './pages/modalWindows/modalAddNewPack/ModalAddNewPackContainer';
import {ModalEditPackContainer} from './pages/modalWindows/modalEditPack/ModalEditPackContainer';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/set-new-password/:token',
    TEST: '/test',
    HEADER: '/header',
    FORGOT_EMAIL: '/check-email',
    PACKS_LIST: '/pack-list',
    NEW_PACKS: '/new-pack',
    DELETE_PACK: '/delete-pack',
    EDIT_PACK: '/edit-pack'
}

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.LOGIN}/>}/>

                <Route path={PATH.LOGIN} render={() => <AuthLoginContainer/>}/>
                <Route path={PATH.REGISTRATION} render={() => <RegistrationContainer/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.RECOVERY_PASSWORD} render={() => <EnterEmailContainer/>}/>
                <Route path={PATH.NEW_PASSWORD} render={() => <ForgotNewPasswordContainer/>}/>
                <Route path={PATH.FORGOT_EMAIL} render={() => <CheckEmail/>}/>
                <Route path={PATH.PACKS_LIST} render={() => <PacksListContainer/>}/>
                <Route path={PATH.NEW_PACKS} render={() => <ModalAddNewPackContainer/>}/>
                <Route path={PATH.DELETE_PACK} render={() => <ModalDeletePack/>}/>
                <Route path={PATH.EDIT_PACK} render={() => <ModalEditPackContainer/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

export default Routes;