import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {EnterEmail} from './EnterEmail';
import {setMailTC} from '../../../bll/PasswordRecoveryReducer';
import {validatorsForgotEmailInput} from '../../../assets/Validators/validatorsForgotEmailInput';


export const EnterEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.recovery.toCheckEmailPage)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        from: '',
        message: ''
    }

    const validate = (values: any) => {
        return validatorsForgotEmailInput(values);
    };

    const onSubmit = (values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setMailTC(values))
    }
    return (
        <>
            <EnterEmail
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                isMail={isMail}
            />

        </>
    );
};
//types
export type initialValuesType =
    {
        email: string,
        from: any,
        message: string
    }
export type FormikErrorType = {
    email?: string
    password?: string
}
