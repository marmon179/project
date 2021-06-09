import React from "react";
import s from "./TableRow.module.scss";
import {Button, Palette, Size, Variant} from "../common/c2-SuperButton/Button";


type PropsPackType = {
    cardId: string
    addedPackUserId: string
    userId: string
    packName: string
    cardsCount: number
    updated: string
    created: string
    onRemovePack: (id: string) => void
}

export const TableRow: React.FC<PropsPackType> = props => {
    const {
        cardId,
        onRemovePack,
        addedPackUserId,
        userId,
    } = props
    return (
        <table>
            <tr>
                <th className={s.tableRow}>{props.packName}</th>
                <th className={s.tableRow}>{props.cardsCount}</th>
                <th className={s.tableRow}>{props.updated}</th>
                <th className={s.tableRow}>{props.created}</th>
                <th className={s.tableRow}>
                    <div className={s.tableBtnInner}>
                        {userId === addedPackUserId && <Button
                            className={s.tableButton}
                            variant={Variant.primary}
                            size={Size.small}
                            palette={Palette.secondary}
                            onClick={() => onRemovePack(cardId)}
                        >
                            Delete
                        </Button>}
                        <Button
                            className={s.tableButton}
                            variant={Variant.primary}
                            size={Size.small}
                        >
                            Edit
                        </Button>
                        <Button
                            className={s.tableButton}
                            variant={Variant.primary}
                            size={Size.small}
                        >
                            Learn
                        </Button>
                    </div>
                </th>
            </tr>
        </table>
    );
};

export default TableRow;