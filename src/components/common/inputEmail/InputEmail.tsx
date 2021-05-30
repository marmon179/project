import React from "react";
import s from "./InputEmail.module.scss";

type InputEmailPropsType = {
    onChange: any
    values: any
}

export const InputEmail = (props: InputEmailPropsType) => {

    return (
        <div className={s.inputEmail}>
            <label className={s.labelEmail} htmlFor="email">Email</label>
            <input className={s.email}
                   type="email"
                   name="email"
                   onChange={props.onChange}
                   value={props.values}
            />
        </div>
    );
};

export default InputEmail;