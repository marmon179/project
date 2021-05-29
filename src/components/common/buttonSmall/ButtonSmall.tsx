import React from "react";
import s from "./ButtonSmall.module.scss";

export const ButtonSmall = (props: any) => {
    return (
        <button className={s.btnSmall}>{props.title}</button>
    );
};

export default ButtonSmall;