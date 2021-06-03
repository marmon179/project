import React from 'react';
import s from './NewPassword.module.scss';
import {Form, Formik} from 'formik';
import {initialValuesType} from './NewPasswordContainer';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../Routes';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {Loading} from '../../../components/common/loading/Loading';
import {Button, Size, Variant} from '../../../components/common/c2-SuperButton/Button';
import {InputFormik} from '../../../components/common/inputFormik/InputFormik';


export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    disable: boolean
    loading: boolean
    validationSchema: any
}

export const NewPassword: React.FC<PropsType> = React.memo(props => {
    const toLoginPage = useSelector<AppStateType, boolean>(state => state.recovery.toLoginPage)
    const {initialValues, onSubmit, disable, loading, validationSchema} = props

    if (toLoginPage) {
        return <Redirect to={PATH.LOGIN}/>
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <div className={s.form}>

                {loading && <Loading/>}

                <div className={s.containerForm}>
                    <div className={s.formWrapper}>
                        <h2 className={s.formTitle}>It-incubator </h2>
                        <span className={s.formSubTitle}>Create new password</span>
                        <Form className={s.formLogin}>
                            <InputFormik
                                title="Password"
                                name="password"
                            />
                            <p className={s.textNewPassword}>Create new password and we will send you further
                                instructions
                                to email</p>
                            <div className={s.buttonInner}>
                                <Button size={Size.big} variant={Variant.primary} title="Create new password"
                                        disabled={disable}/>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>

    );
});

