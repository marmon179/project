import React from "react";
import s from "./AuthLogin.module.scss";
import InputPassword from "../../components/common/inputPassword/InputPassword";
import InputEmail from "../../components/common/inputEmail/InputEmail";
import ButtonLarge from "../../components/common/buttonLarge/ButtonLarge";
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {setIsLoggedTC} from "../../bll/login-reducer";
import { NavLink } from "react-router-dom";
import {PATH} from "../../Routes";


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

                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Sign In</span>

                    <form className={s.formLogin} onSubmit={formik.handleSubmit}>
                        <InputEmail values={formik.values.email} onChange={formik.handleChange}/>
                        <InputPassword title="Password" onChange={formik.handleChange} values={formik.values.password}/>
                        <NavLink to={PATH.RECOVERY_PASSWORD} className={s.linkForgotPassword}>Forgot password</NavLink>
                        <div className={s.buttonInner}>
                            <ButtonLarge title="Login" />
                        </div>
                    </form>

                    <div className={s.blockSingUp}>
                        <span className={s.formText}>Don’t have an account?</span>
                        <NavLink to={PATH.REGISTRATION} className={s.linkSingUp}>Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

