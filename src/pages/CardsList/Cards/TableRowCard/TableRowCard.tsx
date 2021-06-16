import React from 'react';
import s from './TableRowCard.module.scss'

type PropsCardType = {
    answer: string
    question: string
    cardsPack_id: string
    user_id: string
    created: string
    updated: string
    _id: string
}

export const TableRowCard: React.FC<PropsCardType> = props => {
    const {question, answer, created, updated} = props

    return (
        <div className={s.tableRowInner}>
            <div>{question}</div>
            <div>{answer}</div>
            <div>{created}</div>
            <div>{updated}</div>
        </div>
    );
};

