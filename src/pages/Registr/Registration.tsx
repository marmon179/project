import React from 'react';
import s from './AuthRegistr.module.scss';
import './../../../src/styles/vars.scss';
import {Formik, useFormik} from 'formik';
import {initialValuesType} from './RegistrationContainer';
import Logo from '../../components/common/logo/Logo';
import Title from '../../components/common/title/Title';
import {Button, Size, Variant} from '../../components/common/c2-SuperButton/Button';
import {Checkbox} from '../../components/common/c3-SuperCheckbox/Checkbox';
import * as yup from 'yup';
import {Input2} from '../../components/common/c1-SuperInputText/Input2';

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
})

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
}

export const Registration: React.FC<PropsType> = React.memo(props => {
    const {
        initialValues,
        onSubmit,
    } = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className={s.form}>
                <div className={s.containerForm}>
                    <div className={s.formWrapper}>
                        <Logo/>
                        <Title title="Sign In"/>
                        <form onSubmit={formik.handleSubmit}>

                            <Input2
                                title="Email"
                                name="email"
                            />
                            <Input2
                                type="password"
                                title="Password"
                                name="password"
                            />
                            <Input2
                                type="password"
                                title="Confirm password"
                                name="confirmPassword"
                            />

                            <Checkbox
                                error={(formik.touched.acceptTerms && formik.errors.acceptTerms) ? formik.errors.acceptTerms : null}
                                {...formik.getFieldProps('acceptTerms')}
                            >Accept Terms & Conditions</Checkbox>

                            <div className={s.btnInner}>
                                <Button size={Size.small} variant={Variant.default} title="Cancel"/>
                                <Button size={Size.medium} variant={Variant.primary} title="Register"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Formik>
    );
});

