import React from 'react';
import {CardPacks} from '../../../dal/api';
import {TableHeader} from '../../../components/tableHeader/TableHeader';
import {TableRow} from '../../../components/tableRow/TableRow';
import {ModalEditPackContainer} from '../editPack/modalEditPack/ModalEditPackContainer';
import {ModalDeletePack} from '../deletePack/modalDeletePack/ModalDeletePack';

type PropsPacksType = {
    userId: string
    cardPacks: CardPacks[]
    onRemovePack: (id: string, packName: string) => void
    onEditPack: (id: string) => void
    onLearnPack: (id: string, packName: string) => void
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    del: boolean;
    setTrue: () => void
    setFalse: () => void
    backgroundOnClickDel: () => void
    packNam: string
}

export const Packs: React.FC<PropsPacksType> = React.memo(props => {

    const {
        userId, cardPacks, onRemovePack, onEditPack, onLearnPack, backgroundOnClick, show, close,
        del, setTrue, setFalse, backgroundOnClickDel, packNam

    } = props

    return (

        <>
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
                onLearnPack={onLearnPack}
            />)}

            <ModalEditPackContainer
                show={show}
                close={close}
                backgroundOnClick={backgroundOnClick}
            />
            <ModalDeletePack
                show={del}
                setTrue={setTrue}
                setFalse={setFalse}
                enableBackground={true}
                backgroundOnClick={backgroundOnClickDel}
                packName={packNam}
            />

        </>

    );
})

