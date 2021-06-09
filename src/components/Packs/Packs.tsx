import React from "react";
import s from "../../pages/mainPacksList/Main.module.scss";
import TableHeader from "../common/tableHeader/TableHeader";
import {CardPacks} from "../../dal/api";
import TableRow from "../common/tableRow/TableRow";

type PropsPacksType = {
    userId: string
    cardPacks: CardPacks[]
    onRemovePack: (id: string) => void
}

export const Packs: React.FC<PropsPacksType> = React.memo(props => {
    const {
        userId,
        cardPacks,
        onRemovePack
    } = props

    return (

        <div className={s.tableInner}>
            <TableHeader title1="Name" title2="Cards" title3="Last Updated" title4="Created by" title5="Action"/>
            {cardPacks.map(u => <TableRow
                addedPackUserId={u.user_id}
                userId={userId}
                packName={u.name}
                cardsCount = {u.cardsCount}
                updated = {u.updated}
                created = {u.created}
                onRemovePack={onRemovePack}
            />)}


        </div>

    );
})

