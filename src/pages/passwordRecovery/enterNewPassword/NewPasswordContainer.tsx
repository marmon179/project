import React from 'react';
import {NewPassword} from './NewPassword';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setNewPasswordTC} from '../../../bll/PasswordRecoveryReducer';
import {AppStateType} from '../../../bll/store';
import * as yup from 'yup';


export const ForgotNewPasswordContainer = () => {
    const disable = useSelector<AppStateType, boolean>(state => state.recovery.buttonDisable)
    const loading = useSelector<AppStateType, boolean>(state => state.recovery.loading)
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        password: '',
        resetPasswordToken: token
    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setNewPasswordTC(values))
    }, [dispatch])

    const validationSchema = yup.object().shape({
        password: yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
    })
    return (
        <>
            <NewPassword
                initialValues={initialValues}
                onSubmit={onSubmit}
                disable={disable}
                loading={loading}
                validationSchema={validationSchema}
            />

        </>
    );
};
//types
export type initialValuesType = {
    password: string
    resetPasswordToken: string
}

