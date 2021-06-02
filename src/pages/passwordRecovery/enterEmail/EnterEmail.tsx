import React from 'react';
import s from './EnterEmail.module.scss';
import {NavLink, Redirect} from 'react-router-dom';
import {PATH} from '../../../Routes';
import {useFormik} from 'formik';
import {FormikErrorType, initialValuesType} from './EnterEmailContainer';
import {Input} from '../../../components/common/c1-SuperInputText/Input';
import {Loading} from '../../../components/common/loading/Loading';
import {Button, Size, Variant} from "../../../components/common/c2-SuperButton/Button";
import {validationSchema} from '../../../assets/Validators/validators';


export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    validate: (values: initialValuesType) => FormikErrorType
    isMail: boolean
    disable: boolean
    loading: boolean
}

export const EnterEmail: React.FC<PropsType> = React.memo(props => {


    const {initialValues, onSubmit, validate, isMail, disable, loading} = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    if (isMail) {
        return <Redirect to={PATH.FORGOT_EMAIL}/>
    }
    return (
        <div className={s.form}>

            {loading && <Loading/>}

            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <h2 className={s.formTitle}>It-incubator </h2>
                    <span className={s.formSubTitle}>Forgot your password?</span>
                    <form action="" className={s.formEmail} onSubmit={formik.handleSubmit}>

                        <Input
                            type={'text'}
                            title={'Email'}
                            error={(formik.touched.email && formik.errors.email) ? formik.errors.email : null}
                            {...formik.getFieldProps('email')}
                        />

                        <p className={s.textEmail}>Enter your email address and we will send you further
                            instructions </p>

                        <div className={s.buttonInner}>
                            <Button size={Size.big} variant={Variant.primary} title="Send Instructions" disabled={disable}/>
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
});

