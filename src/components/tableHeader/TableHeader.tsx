import React from "react";
import s from "./TableHeader.module.scss";


export const TableHeader = (props: any) => {
    return (<table className={s.tableHeader}>
            <tr>
                <td>{props.title1}</td>
                <td>{props.title2}</td>
                <td>{props.title3}</td>
                <td>{props.title4}</td>
                <td>{props.title5}</td>
            </tr>
        </table>
    );
};

