import React from "react";
import s from "./InputEmail.module.scss";

export const InputEmail = () => {
    return (
        <div className={s.inputEmail}>
            <label className={s.labelEmail} htmlFor="email">Email</label>
            <input className={s.email} type="email" />
        </div>
    );
};

export default InputEmail;