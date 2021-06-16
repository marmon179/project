import React from 'react';
import s from './TableRowCard.module.scss'
import {Button, Palette, Size, Variant} from '../../../../components/common/c2-SuperButton/Button';

type PropsCardType = {
    answer: string
    question: string
    cardsPack_id: string
    user_id: string
    created: string
    updated: string
    id: string
    onRemoveCard: (id: string,cardsPack_id:string) => void
    onLearnCard: (id: string,cardsPack_id:string,answer: string,question: string) => void
}

export const TableRowCard: React.FC<PropsCardType> = props => {
    const {question, answer, created, updated,onRemoveCard,onLearnCard,id,cardsPack_id} = props

    return (
        <div className={s.tableRowInner}>
            <div>{question}</div>
            <div>{answer}</div>
            <div>{created}</div>
            <div>{updated}</div>
            <div className={s.tableBtnInner}><Button
                className={s.tableButton}
                variant={Variant.primary}
                size={Size.small}
                palette={Palette.secondary}
                onClick={() => onRemoveCard(id, cardsPack_id)}
            >
                Delete
            </Button>
                <Button
                    className={s.tableButton}
                    variant={Variant.primary}
                    size={Size.small}
                    palette={Palette.default}
                    onClick={() => onLearnCard(id, cardsPack_id, answer, question)}
                >
                    Edit
                </Button></div>
        </div>
    );
};

