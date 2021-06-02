import React from 'react';
import {useDispatch} from 'react-redux';
import {setIsLoggedTC} from '../../bll/auth-reducer';
import AuthLogin from "./AuthLogin";
import {validators} from "../../assets/Validators/validators";
import {LoginParamsType} from "../../dal/api";


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

    const initialValues: initialValuesType = {
        email: '',
        password: '',
    }

    const validate = (values: initialValuesType) => {
        return validators(values);
    };

    const onSubmit = (data: LoginParamsType) => {
        dispatch(setIsLoggedTC(data))
    }

    return (
        <AuthLogin
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
        />
    );
};
