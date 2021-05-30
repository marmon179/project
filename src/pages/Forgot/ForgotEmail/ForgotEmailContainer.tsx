import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setMailTC} from '../../../bll/auth-reducer';
import {AppStateType} from '../../../bll/store';
import {ForgotEmail} from './ForgotEmail';
import {validators} from '../../../assets/Validators/validators';


export const ForgotEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.auth.isMail)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        from: '',
        message: ''
    }

    const validate = (values: any) => {
        return validators(values);
    };

    const onSubmit = (values: initialValuesType) => {
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
export type initialValuesType = {
    email: string,
    from: any,
    message: string
}

export type FormikErrorType = {
    email?: string
    password?: string
}
