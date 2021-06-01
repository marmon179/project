import React from 'react';
import s from './AuthLogin.module.scss';
import InputPassword from '../../components/common/inputPassword/InputPassword';
import InputEmail from '../../components/common/inputEmail/InputEmail';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {setIsLoggedTC} from '../../bll/auth-reducer';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Routes';
import Logo from "../../components/common/logo/Logo";
import Title from "../../components/common/title/Title";
import {Button, Size, Variant} from "../../components/common/c2-SuperButton/Button";


export const AuthLogin = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(setIsLoggedTC(values))
        },
    });
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>

                    <Logo />
                    <Title title="Sign In" />

                    <form onSubmit={formik.handleSubmit}>
                        <InputEmail values={formik.values.email} onChange={formik.handleChange}/>
                        <InputPassword title="Password" onChange={formik.handleChange} values={formik.values.password}/>
                        <NavLink to={PATH.RECOVERY_PASSWORD} className={s.linkForgotPassword}>Forgot password</NavLink>
                        <div className={s.buttonInner}>
                            <Button size={Size.big} variant={Variant.primary} title="Login"/>
                        </div>
                    </form>

                    <div className={s.blockSingUp}>
                        <span className={s.formText}>Don’t have an account?</span>
                        <NavLink to={PATH.REGISTRATION} className={s.linkSingUp}>Sign Up </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;