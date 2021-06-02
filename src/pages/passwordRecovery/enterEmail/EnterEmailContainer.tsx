import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {EnterEmail} from './EnterEmail';
import {setMailTC} from '../../../bll/PasswordRecoveryReducer';


export const EnterEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.recovery.toCheckEmailPage)
    const disable = useSelector<AppStateType, boolean>(state => state.recovery.buttonDisable)
    const loading = useSelector<AppStateType, boolean>(state => state.recovery.loading)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        from: '',
        message: ''
    }
    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setMailTC(values))
    }, [dispatch, setMailTC])
    return (
        <>
            <EnterEmail
                initialValues={initialValues}
                onSubmit={onSubmit}
                isMail={isMail}
                disable={disable}
                loading={loading}
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

