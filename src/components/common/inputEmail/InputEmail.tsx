import React from "react";
import s from "./InputEmail.module.scss";

type InputEmailPropsType = {
    onChange: any
    values: any
}

export const InputEmail = (props: InputEmailPropsType) => {

    return (
        <form className={s.inputEmail}>
            <label className={s.labelEmail} htmlFor="email">Email</label>
            <input className={s.email}
                   type="email"
                   name="email"
                   onChange={props.onChange}
                   value={props.values}
            />
        </form>
    );
};

export default InputEmail;