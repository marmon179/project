import React from 'react';
import s from './AuthRegistr.module.scss';
import './../../../src/styles/vars.scss';
import {useFormik} from 'formik';
import ButtonSmall from '../../components/common/buttonSmall/ButtonSmall';
import ButtonMedium from '../../components/common/buttonMedium/ButtonMedium';
import {FormikErrorType, initialValuesType} from './RegistrationContainer';
import {Input} from '../../components/common/c1-SuperInputText/Input';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    validate: (values: initialValuesType) => FormikErrorType
}

export const Registration: React.FC<PropsType> = props => {

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
                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Sign In</span>
                    <form className={s.formLogin} onSubmit={formik.handleSubmit}>

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

