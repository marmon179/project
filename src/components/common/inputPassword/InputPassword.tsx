import React from "react";
import s from "./InputPassword.module.scss";


type InputPasswordPropsType = {
    onChange: any
    values: any
    title: string
}

export const InputPassword = (props: InputPasswordPropsType) => {
    return (
        <div className={s.inputPassword}>
            <label className={s.labelPassword} htmlFor="pass">{props.title}</label>
            <input className={s.password}
                   type="password"
                   name="password"
                   onChange={props.onChange}
                   value={props.values}
            />
        </div>
    );
};

export default InputPassword;