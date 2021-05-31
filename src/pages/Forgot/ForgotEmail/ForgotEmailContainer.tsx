import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {ForgotEmail} from './ForgotEmail';
import {validators} from '../../../assets/Validators/validators';
import {setMailTC} from '../../../bll/ForgotReducer';
import {validatorsForgotEmailInput} from '../../../assets/Validators/validatorsForgotEmailInput';


export const ForgotEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.forgot.isMail)
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
            <ForgotEmail
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
