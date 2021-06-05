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
                    <button className={s.tableButton}>1</button>
                    <button className={s.tableButton}>2</button>
                    <button className={s.tableButton}>3</button>
                </div>
            </tr>
        </table>
    );
};

export default TableRow;