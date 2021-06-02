import React from 'react';
import s from './NewPassword.module.scss';
import {useFormik} from 'formik';
import {initialValuesType} from './NewPasswordContainer';
import {Input} from '../../../components/common/c1-SuperInputText/Input';
import {Redirect} from 'react-router-dom';
import {PATH} from '../../../Routes';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {Loading} from '../../../components/common/loading/Loading';
import {Button, Size, Variant} from '../../../components/common/c2-SuperButton/Button';
import {validationSchema} from '../../../assets/Validators/validatorsNewPasswordInput';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    disable: boolean
    loading: boolean
}

export const NewPassword: React.FC<PropsType> = React.memo(props => {
    const toLoginPage = useSelector<AppStateType, boolean>(state => state.recovery.toLoginPage)
    const {
        initialValues,
        onSubmit,
        disable,
        loading
    } = props

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
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
                            <Button size={Size.big} variant={Variant.primary} title="Create new password" disabled={disable}/>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
});

