import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {logoutTC} from '../bll/auth-reducer';
import {AppStateType} from '../bll/store';
import {Button, Size, Variant} from '../components/common/c2-SuperButton/Button';
import {PATH} from '../Routes';

export const Profile = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutTC())
    }

    if(!isLoggedIn) {
        return <Redirect to={PATH.LOGIN} />
    }
    return (
        <div>
            <h1>Profile</h1>
            {isLoggedIn &&
            <Button onClick={logoutHandler} size={Size.medium} variant={Variant.primary} title="Log out"/>}
        </div>
    );
};

