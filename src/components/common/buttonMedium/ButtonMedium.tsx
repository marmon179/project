import React from "react";
import s from "./ButtonMedium.module.scss";

export const ButtonMedium = (props: any) => {
    return (
        <button className={s.btnMedium}>{props.title}</button>
    );
};

export default ButtonMedium;