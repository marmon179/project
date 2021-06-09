import React from "react";
import s from "./TableRow.module.scss";



export const TableRow = (props: any) => {
    return (<table>
            <tr>
                <th className={s.tableRow}>{props.title1}</th>
                <th className={s.tableRow}>{props.title2}</th>
                <th className={s.tableRow}>{props.title3}</th>
                <th className={s.tableRow}>{props.title4}</th>
                <th className={s.tableRow}>{props.title5}</th>
                <div className={s.tableBtnInner}>
                    <button className={s.tableButton}>del</button>
                    <button className={s.tableButton}>edit</button>
                    <button className={s.tableButton}>lea</button>
                </div>
            </tr>
        </table>
    );
};

export default TableRow;