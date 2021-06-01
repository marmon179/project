import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {EnterEmail} from './EnterEmail';
import {setMailTC} from '../../../bll/PasswordRecoveryReducer';
import {validatorsForgotEmailInput} from '../../../assets/Validators/validatorsForgotEmailInput';


export const EnterEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.recovery.toCheckEmailPage)
    const disable = useSelector<AppStateType, boolean>(state => state.recovery.buttonDisable)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        from: '',
        message: ''
    }

    const validate = (values: any) => {
        return validatorsForgotEmailInput(values);
    };

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setMailTC(values))
    }, [dispatch, setMailTC])
    return (
        <>
            <EnterEmail
                initialValues={initialValues}
                onSubmit={onSubmit}
                validate={validate}
                isMail={isMail}
                disable={disable}
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
