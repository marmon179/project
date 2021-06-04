import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedTC} from '../../bll/auth-reducer';
import AuthLogin from "./AuthLogin";
import {validators} from "../../assets/Validators/validators";
import {LoginParamsType} from "../../dal/api";
import {AppStateType} from "../../bll/store";
import {validatorsLogin} from "../../assets/Validators/validatorsLogin";


export type initialValuesType = {
    email: string
    password: string
}

export type FormikErrorType = {
    email?: string
    password?: string
}

export const AuthLoginContainer = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.auth.isLoggedIn)

    const initialValues: initialValuesType = {
        email: '',
        password: '',
    }

    const validate = (values: initialValuesType) => {
        return validatorsLogin(values);
    };

    const onSubmit = (values: initialValuesType) => {
        alert(JSON.stringify(values))
        dispatch(setIsLoggedTC(values))
    }

    return (
        <AuthLogin
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
            isLoggedIn={isLoggedIn}
        />
    );
};
