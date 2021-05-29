import React from "react";
import s from "./InputEmail.module.scss";

export const InputEmail = () => {
    return (
        <form className={s.inputEmail}>
            <label className={s.labelEmail} htmlFor="email">Email</label>
            <input className={s.email} type="email" />
        </form>
    );
};

export default InputEmail;