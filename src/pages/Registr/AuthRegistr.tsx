import React from 'react';
import s from './AuthRegistr.module.scss';
import InputPassword from '../../components/common/inputPassword/InputPassword';
import InputEmail from '../../components/common/inputEmail/InputEmail';
import './../../../src/styles/vars.scss';
import {useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {isRegistrationTC} from '../../bll/RegistrationReducer';
import ButtonSmall from '../../components/common/buttonSmall/ButtonSmall';
import ButtonMedium from '../../components/common/buttonMedium/ButtonMedium';

export const AuthRegistr = () => {

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            dispatch(isRegistrationTC(values))
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
                        <div className={s.btnInner}>
                            <ButtonSmall title="Cancel"/>
                            <ButtonMedium title="Register"/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

