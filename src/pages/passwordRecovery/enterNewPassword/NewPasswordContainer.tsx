import React from 'react';
import {NewPassword} from './NewPassword';
import {useDispatch} from 'react-redux';
import {validatorsNewPasswordInput} from '../../../assets/Validators/validatorsNewPasswordInput';
import {useParams} from 'react-router-dom';
import {setNewPasswordTC} from '../../../bll/PasswordRecoveryReducer';


export const ForgotNewPasswordContainer = () => {
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        password: '',
        resetPasswordToken: token
    }

    const validate = (values: initialValuesType) => {
        return validatorsNewPasswordInput(values);
    };


    const onSubmit = (values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setNewPasswordTC(values))
    }
    return (
        <>
            <NewPassword
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
    resetPasswordToken: string
}

export type FormikPasswordErrorType = {
    password?: string,
}
