import React from 'react';
import s from './AuthRegistr.module.scss';
import './../../../src/styles/vars.scss';
import {useFormik} from 'formik';
import {initialValuesType} from './RegistrationContainer';
import {Input} from '../../components/common/c1-SuperInputText/Input';
import Logo from '../../components/common/logo/Logo';
import Title from '../../components/common/title/Title';
import {Button, Size, Variant} from '../../components/common/c2-SuperButton/Button';
import {validationSchema} from '../../assets/Validators/validators';
import {Checkbox} from '../../components/common/c3-SuperCheckbox/Checkbox';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
}

export const Registration: React.FC<PropsType> = React.memo(props => {
    const {
        initialValues,
        onSubmit,
        // validate
    } = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <Logo/>
                    <Title title="Sign In"/>
                    <form onSubmit={formik.handleSubmit}>

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

                        {/*<Input*/}
                        {/*    type={'password'}*/}
                        {/*    title={'Confirm password'}*/}
                        {/*    error={(formik.touched.password && formik.errors.password) ? formik.errors.password : null}*/}
                        {/*    {...formik.getFieldProps('password')}*/}
                        {/*/>*/}

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
    );
});

