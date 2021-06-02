import React from 'react';
import {NewPassword} from './NewPassword';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setNewPasswordTC} from '../../../bll/PasswordRecoveryReducer';
import {AppStateType} from '../../../bll/store';


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
    }, [dispatch, setNewPasswordTC])
    return (
        <>
            <NewPassword
                initialValues={initialValues}
                onSubmit={onSubmit}
                disable={disable}
                loading={loading}
            />

        </>
    );
};
//types
export type initialValuesType = {
    password: string
    resetPasswordToken: string
}

