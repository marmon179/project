import React from "react";
import s from "./SubTitle.module.scss";


export const SubTitle = (props: any) => {
    return (<h3 className={s.subtitle}>{props.title}</h3>
    );
};

export default SubTitle;