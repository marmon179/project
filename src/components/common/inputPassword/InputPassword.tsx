import React from "react";
import s from "./InputPassword.module.scss";
import eye from './../../../assets/img/inputPassword/eye.svg';

export const InputPassword = (props: any) => {
    return (
        <div className={s.inputPassword}>
            <label className={s.labelPassword} htmlFor="pass">{props.title}</label>
            <input className={s.password} type="password" />
            <a href="#" className={s.passwordControl}><img src={eye} alt="#" /></a>
        </div>
    );
};

export default InputPassword;