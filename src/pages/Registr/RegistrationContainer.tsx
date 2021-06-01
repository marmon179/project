import {useDispatch} from 'react-redux';
import {isRegistrationTC} from '../../bll/RegistrationReducer';
import {Registration} from './Registration';
import {validators} from '../../assets/Validators/validators';
import React from 'react';


export type initialValuesType = {
    email: string
    password: string
}

export type FormikErrorType = {
    email?: string
    password?: string
}

export const RegistrationContainer = () => {

    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        password: '',
    }

    const validate = (values: initialValuesType) => {
        return validators(values);
    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(isRegistrationTC(values))
    }, [dispatch, isRegistrationTC])

    return (
        <>
            <Registration
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
            />
        </>
    );
};
