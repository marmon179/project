import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {EnterEmail} from './EnterEmail';
import {setMailTC} from '../../../bll/PasswordRecoveryReducer';
import * as yup from 'yup';


export const EnterEmailContainer = () => {
    const isMail = useSelector<AppStateType, boolean>(state => state.recovery.toCheckEmailPage)
    const disable = useSelector<AppStateType, boolean>(state => state.recovery.buttonDisable)
    const loading = useSelector<AppStateType, boolean>(state => state.recovery.loading)
    const dispatch = useDispatch()

    const initialValues: initialValuesType = {
        email: '',
        from: '',
        message: '' //Раскоментировать когда работа будет вестись на githubPages
                       // `<div style="background-color: lime; padding: 15px">
                       // Восстановления пароля.Нажмите на ссылку:
                       // <a href='https://marmon179.github.io/project/#/set-new-password/$token$'>
                       // link</a></div>`
    }
    const validationSchema = yup.object().shape({
        email: yup.string()
            .email('Email is invalid')
            .required('Email is required'),
    })
    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(setMailTC(values))
    }, [dispatch])

    return (
        <>
            <EnterEmail
                initialValues={initialValues}
                onSubmit={onSubmit}
                isMail={isMail}
                disable={disable}
                loading={loading}
                validationSchema={validationSchema}
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

