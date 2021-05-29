import React from "react";
import s from "./ButtonLarge.module.scss";

export const ButtonLarge = (props: any) => {
    return (
        <button className={s.btnLarge}>{props.title}</button>
    );
};

export default ButtonLarge;