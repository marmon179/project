import React from 'react';
import {NewPassword} from './NewPassword';
import {useDispatch, useSelector} from 'react-redux';
import {validatorsNewPasswordInput} from '../../../assets/Validators/validatorsNewPasswordInput';
import {useParams} from 'react-router-dom';
import {setNewPasswordTC} from '../../../bll/PasswordRecoveryReducer';
import {AppStateType} from '../../../bll/store';


export const ForgotNewPasswordContainer = () => {
    const disable = useSelector<AppStateType, boolean>(state => state.recovery.buttonDisable)
    const {token} = useParams<{ token: string }>()
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        password: '',
        resetPasswordToken: token
    }

    const validate = (values: initialValuesType) => {
        return validatorsNewPasswordInput(values);
    };


    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setNewPasswordTC(values))
    }, [dispatch, setNewPasswordTC])
    return (
        <>
            <NewPassword
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                disable={disable}
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
