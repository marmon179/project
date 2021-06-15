import React from 'react';
import s from '../../pages/mainPacksList/Main.module.scss';
import {CardPacks} from '../../dal/api';
import {TableHeader} from '../tableHeader/TableHeader';
import {TableRow} from '../tableRow/TableRow';
import {ModalEditPack} from '../../pages/modalWindows/modalEditPack/ModalEditPack';
import {ModalEditPackContainer} from '../../pages/modalWindows/modalEditPack/ModalEditPackContainer';

type PropsPacksType = {
    userId: string
    cardPacks: CardPacks[]
    onRemovePack: (id: string) => void
    onEditPack: (id: string) => void
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
}

export const Packs: React.FC<PropsPacksType> = React.memo(props => {
    const {
        userId,
        cardPacks,
        onRemovePack,
        onEditPack,
        show,
        close,
        backgroundOnClick,

    } = props


    return (

        <div className={s.tableInner}>
            <TableHeader title1="Name" title2="Cards" title3="Last Updated" title4="Created by" title5="Action"/>
            {cardPacks.map(u => <TableRow
                cardId={u._id}
                addedPackUserId={u.user_id}
                userId={userId}
                packName={u.name}
                cardsCount={u.cardsCount}
                updated={u.updated}
                created={u.created}
                onRemovePack={onRemovePack}
                onEditPack={onEditPack}
            />)}
            <ModalEditPackContainer show={show} close={close}  backgroundOnClick={backgroundOnClick}/>

        </div>

    );
})

