import React from 'react';
import {TableHeader} from '../../../components/tableHeader/TableHeader';

type PropsCardsType = {}

export const Cards: React.FC<PropsCardsType> = React.memo(props => {

    const {} = props

    return (
        <>
            <TableHeader title1="Question" title2="Answer" title3="Last Updated"
                         title4="Grade" title5="Actions"/>
        </>
    );
})

