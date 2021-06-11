import React from "react";
import s from "./TableHeader.module.scss";


export const TableHeader = (props: any) => {
    return (
        <div className={s.tableHeader}>
                <div className={s.tableHeaderTitle}>{props.title1}</div>
                <div className={s.tableHeaderTitle}>{props.title2}</div>
                <div className={s.tableHeaderTitle}>{props.title3}</div>
                <div className={s.tableHeaderTitle}>{props.title4}</div>
                <div className={s.tableHeaderTitle}>{props.title5}</div>
        </div>
    );
};

