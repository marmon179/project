import React from 'react';
import s from './AuthLogin.module.scss';
import {useFormik} from 'formik';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Routes';
import Logo from "../../components/common/logo/Logo";
import Title from "../../components/common/title/Title";
import {Input} from "../../components/common/c1-SuperInputText/Input";
import {FormikErrorType, initialValuesType} from "./AuthLoginContainer";
import {Button} from "../../components/common/c2-SuperButton/Button";


export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    validate: (values: initialValuesType) => FormikErrorType
}

export const AuthLogin = (props: PropsType) => {

    const {
        initialValues,
        onSubmit,
        validate
    } = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>

                    <Logo/>
                    <Title title="Sign In"/>

                    <form onSubmit={formik.handleSubmit}>
                        {/*<InputEmail values={formik.values.email} onChange={formik.handleChange}/>*/}
                        {/*<InputPassword title="Password" onChange={formik.handleChange} values={formik.values.password}/>*/}

                        <Input
                            type={'text'}
                            title={'Email'}
                            error={(formik.touched.email && formik.errors.email) ? formik.errors.email : null}
                            {...formik.getFieldProps('email')}
                        />

                        <Input
                            type={'password'}
                            title={'Password'}
                            error={(formik.touched.password && formik.errors.password) ? formik.errors.password : null}
                            {...formik.getFieldProps('password')}
                        />

                        <NavLink to={PATH.RECOVERY_PASSWORD} className={s.linkForgotPassword}>Forgot password</NavLink>
                        <div className={s.buttonInner}>
                            <Button title="Login"/>
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