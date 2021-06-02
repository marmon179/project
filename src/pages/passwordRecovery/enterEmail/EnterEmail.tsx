import React from 'react';
import s from './EnterEmail.module.scss';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../../Routes';
import {Form, Formik} from 'formik';
import {initialValuesType} from './EnterEmailContainer';
import {Loading} from '../../../components/common/loading/Loading';
import {Button, Size, Variant} from '../../../components/common/c2-SuperButton/Button';
import {InputFormik} from '../../../components/common/inputFormik/InputFormik';


export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    isMail: boolean
    disable: boolean
    loading: boolean
    validationSchema: any
}

export const EnterEmail: React.FC<PropsType> = React.memo(props => {

    const {initialValues, onSubmit, isMail, disable, loading, validationSchema} = props

    if (isMail) {
        return <Redirect to={PATH.FORGOT_EMAIL}/>
    }
    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
        >
            <div className={s.form}>

                {loading && <Loading/>}

                <div className={s.containerForm}>
                    <div className={s.formWrapper}>
                        <h2 className={s.formTitle}>It-incubator </h2>
                        <span className={s.formSubTitle}>Forgot your password?</span>
                        <Form className={s.formEmail}>

                            <InputFormik
                                type="email"
                                title="Email"
                                name="email"
                            />

                            <p className={s.textEmail}>Enter your email address and we will send you further
                                instructions </p>
                            <div className={s.buttonInner}>
                                <Button size={Size.big} variant={Variant.primary} title="Send Instructions"
                                        disabled={disable}/>
                            </div>

                        </Form>

                        <div className={s.blockSingUp}>
                            <span className={s.formText}>Did you remember your password?</span>
                            <NavLink to={PATH.LOGIN} className={s.linkSingUp}>Try logging in</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </Formik>
    );
});

