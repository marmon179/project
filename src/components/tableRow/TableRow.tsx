import React from 'react';
import s from './TableRow.module.scss';
import {Button, Palette, Size, Variant} from '../common/c2-SuperButton/Button';


type PropsPackType = {
    cardId: string
    addedPackUserId: string
    userId: string
    packName: string
    cardsCount: number
    updated: string
    created: string
    onRemovePack: (id: string,packName:string) => void
    onEditPack: (id: string) => void
    onLearnPack: (id: string,packName:string) => void
}

export const TableRow: React.FC<PropsPackType> = props => {
    const {
        cardId,
        onRemovePack,
        onEditPack,
        addedPackUserId,
        userId,
        onLearnPack,
        packName
    } = props
    return (
        <div className={s.tableRowInner}>
            <div>{props.packName}</div>
            <div>{props.cardsCount}</div>
            <div>{props.updated}</div>
            <div>{props.created}</div>
            <div className={s.tableBtnInner}>
                {userId === addedPackUserId && <Button
                    className={s.tableButton}
                    variant={Variant.primary}
                    size={Size.small}
                    palette={Palette.secondary}
                    onClick={() => onRemovePack(cardId,packName)}
                >
                    Delete
                </Button>}
                {userId === addedPackUserId && <Button
                    className={s.tableButton}
                    variant={Variant.primary}
                    size={Size.small}
                    palette={Palette.primary}
                    onClick={() => onEditPack(cardId)}
                >
                    Edit
                </Button>}
                {userId === addedPackUserId && <Button
                    className={s.tableButton}
                    variant={Variant.primary}
                    size={Size.small}
                    palette={Palette.default}
                    onClick={() => onLearnPack(cardId,packName)}
                >
                    Learn
                </Button>}

            </div>
        </div>
    );
};

