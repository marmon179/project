import React from 'react';
import {ForgotNewPassword} from './ForgotNewPassword';
import {useDispatch} from 'react-redux';
import {validators} from '../../../assets/Validators/validators';


export const ForgotNewPasswordContainer = () => {

    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        password: '',
    }

    const validate = (values: any) => {
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
//types
export type initialValuesType = {
    password: string
}

export type FormikPasswordErrorType = {
    password?: string
}
