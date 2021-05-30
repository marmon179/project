import React from 'react';
import s from './AuthForgotPasswordCheckEmail.module.scss';
import mail from '../../../assets/img/authForgotPasswordCheckEmail/mail.svg'
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';


export const AuthForgotPasswordCheckEmail = () => {
    const mailName = useSelector<AppStateType, string>(state => state.forgot.mailName)
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <h2 className={s.formTitle}>It-incubator</h2>
                    <img className={s.imgMail} src={mail} alt="mail"/>
                    <span className={s.formSubTitle}>Check Email</span>
                    <p className={s.textCheckEmail}>We’ve sent an Email with instructions to {mailName}</p>
                </div>
            </div>
        </div>
    );
};

