import React from 'react';
import {Pack} from './Pack/Pack';
import s from '../../pages/mainPacksList/Main.module.scss';
import {TableHeader} from '../tableHeader/TableHeader';
import {cardPacks} from '../../dal/api';

type PropsPacksType = {
    cardPacks: cardPacks[]
}

export const Packs: React.FC<PropsPacksType> = React.memo(props => {

    const {cardPacks} = props
    return (

        <div className={s.tableInner}>
            <TableHeader title1="Name" title2="Cards" title3="Last Updated" title4="Created by" title5="Action"/>
            {cardPacks.map(u => <Pack
                packName={u.name}
                cardsCount = {u.cardsCount}
                updated = {u.updated}
                created = {u.created}
            />)}
        </div>

    );
})

