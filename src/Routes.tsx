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
import {PacksListContainer} from './pages/PacksList/PacksListContainer';
import ModalsPage from './components/common/modals-1-ui/ModalsPage';
import {ModalDeletePack} from './pages/PacksList/deletePack/modalDeletePack/ModalDeletePack';
import {LearnQuestion} from './pages/learnQuestion/LearnQuestion';
import {LearnQuestionAnswer} from './pages/learnQuestionAnswer/LearnQuestionAnswer';
import { CardsListContainer } from './pages/CardsList/CardsListContainer';

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RECOVERY_PASSWORD: '/recovery-password',
    NEW_PASSWORD: '/set-new-password/:token',
    TEST: '/test',
    HEADER: '/header',
    FORGOT_EMAIL: '/check-email',
    PACKS_LIST: '/packs-list',
    CARDS_LIST: '/cards-list',
    DELETE_PACK: '/delete-pack',
    MODAL: '/modal',
    LEARN_QUESTION: '/learn-question',
    LEARN_QUESTION_ANSWER: '/learn-question-answer'
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
                <Route path={PATH.CARDS_LIST} render={() => <CardsListContainer/>}/>
                <Route path={PATH.DELETE_PACK} render={() => <ModalDeletePack/>}/>
                <Route path={PATH.LEARN_QUESTION} render={() => <LearnQuestion/>}/>
                <Route path={PATH.LEARN_QUESTION_ANSWER} render={() => <LearnQuestionAnswer/>}/>

                <Route path={PATH.MODAL} render={() => <ModalsPage/>}/>
                <Route path={PATH.TEST} render={() => <Test/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

export default Routes;