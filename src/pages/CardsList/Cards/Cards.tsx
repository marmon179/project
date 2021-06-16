import React from 'react';
import {TableHeader} from '../../../components/tableHeader/TableHeader';
import {CardType} from '../../../dal/api';
import {TableRowCard} from './TableRowCard/TableRowCard';

type PropsCardsType = {
    cards: CardType[]
}

export const Cards: React.FC<PropsCardsType> = React.memo(props => {

    const {cards} = props

    return (
        <>
            <TableHeader title1="Question" title2="Answer" title3="Last Updated"
                         title4="Grade" title5="Actions"/>
            {cards.map(u =><TableRowCard
            answer={u.answer}
            user_id={u.user_id}
            question={u.question}
            updated={u.updated}
            created={u.created}
            _id={u._id}
            cardsPack_id={u.cardsPack_id}
            />)}
        </>
    );
})

