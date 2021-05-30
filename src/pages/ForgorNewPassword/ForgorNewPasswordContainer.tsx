import React from 'react';
import {ForgotNewPassword} from './ForgotNewPassword';
import {useDispatch} from 'react-redux';
import {validators} from '../../assets/Validators/validatorsNewPassword';

export type initialValuesType = {
    password: string
}

export type FormikPasswordErrorType = {
    password?: string
}

export const ForgotNewPasswordContainer = () => {

    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        password: '',
    }

    const validate = (values: initialValuesType) => {
        return validators(values);
    };

    const onSubmit = (values: initialValuesType) => {
        alert(JSON.stringify(values))
    }
    return (
        <>
            <ForgotNewPassword
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            />

        </>
    );
};

