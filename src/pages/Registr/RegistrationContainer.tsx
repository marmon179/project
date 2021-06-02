import {useDispatch} from 'react-redux';
import {isRegistrationTC} from '../../bll/RegistrationReducer';
import {Registration} from './Registration';
import React from 'react';


export type initialValuesType = {
    email: string
    password: string
    confirmPassword?: string
    acceptTerms?: string
}

export const RegistrationContainer = () => {

    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: ''
    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        dispatch(isRegistrationTC(values))
    }, [dispatch])

    return (
        <>
            <Registration
                initialValues={initialValues}
                onSubmit={onSubmit}
            />
        </>
    );
};
