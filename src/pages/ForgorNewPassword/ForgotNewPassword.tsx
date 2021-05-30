import React from 'react';
import s from './AurhForgorNewPassword.module.scss';
import ButtonLarge from '../../components/common/buttonLarge/ButtonLarge';
import {useFormik} from 'formik';
import {FormikPasswordErrorType, initialValuesType} from './ForgorNewPasswordContainer';
import {Input} from '../../components/common/c1-SuperInputText/Input';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    validate: (values: initialValuesType) => FormikPasswordErrorType
}

export const ForgotNewPassword: React.FC<PropsType> = props => {

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
                    <span className={s.formSubTitle}>Create new password</span>
                    <form action="" className={s.formLogin} onSubmit={formik.handleSubmit}>

                        <Input
                            type={'password'}
                            title={'Password'}
                            error={(formik.touched.password && formik.errors.password) ? formik.errors.password : null}
                            {...formik.getFieldProps('password')}
                        />

                        <p className={s.textNewPassword}>Create new password and we will send you further instructions
                            to email</p>
                        <div className={s.buttonInner}>
                            <ButtonLarge title="Create new password"/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

