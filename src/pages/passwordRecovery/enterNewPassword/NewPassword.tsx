import React from 'react';
import s from './NewPassword.module.scss';
import ButtonLarge from '../../../components/common/buttonLarge/ButtonLarge';
import {useFormik} from 'formik';
import {FormikPasswordErrorType, initialValuesType} from './NewPasswordContainer';
import {Input} from '../../../components/common/c1-SuperInputText/Input';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../Routes';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {Loading} from '../../../components/common/loading/Loading';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    validate: (values: initialValuesType) => FormikPasswordErrorType
    disable: boolean
    loading: boolean
}

export const NewPassword: React.FC<PropsType> = React.memo(props => {
    const toLoginPage = useSelector<AppStateType, boolean>(state => state.recovery.toLoginPage)
    const {
        initialValues,
        onSubmit,
        validate,
        disable,
        loading
    } = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });
    if (toLoginPage) {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <div className={s.form}>

            {loading && <Loading/>}

            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <h2 className={s.formTitle}>It-incubator </h2>
                    <span className={s.formSubTitle}>Create new password</span>
                    <form className={s.formLogin} onSubmit={formik.handleSubmit}>
                        <Input
                            type={'password'}
                            title={'Password'}
                            error={(formik.touched.password && formik.errors.password) ? formik.errors.password : null}
                            {...formik.getFieldProps('password')}
                        />

                        <p className={s.textNewPassword}>Create new password and we will send you further instructions
                            to email</p>
                        <div className={s.buttonInner}>
                            <ButtonLarge title="Create new password" disabled={disable}/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
});

