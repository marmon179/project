import React from 'react';
import s from './AuthForgotPassword.module.scss';
import InputEmail from '../../components/common/inputEmail/InputEmail';
import ButtonLarge from '../../components/common/buttonLarge/ButtonLarge';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../Routes';
import {useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {setMailTC} from '../../bll/auth-reducer';
import {AppStateType} from '../../bll/store';


export const AuthForgotPassword = () => {

    const isMail = useSelector<AppStateType, boolean>(state => state.auth.isMail)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            from: '',
            message: ''
        },
        onSubmit: values => {
            dispatch(setMailTC(values))
        },
    });

    if (isMail) {
        return <Redirect to={PATH.FORGOT_EMAIL}/>
    }

    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Forgot your password?</span>
                    <form action="" className={s.formEmail} onSubmit={formik.handleSubmit}>
                        <InputEmail values={formik.values.email} onChange={formik.handleChange}/>
                        <p className={s.textEmail}>Enter your email address and we will send you further
                            instructions </p>
                        <div className={s.buttonInner}>
                            <ButtonLarge title="Send Instructions"/>
                        </div>
                    </form>
                    <div className={s.blockSingUp}>
                        <span className={s.formText}>Did you remember your password?</span>
                        <NavLink to={PATH.LOGIN} className={s.linkSingUp}>Try logging in</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

