import React from 'react';
import TableRow from '../../common/tableRow/TableRow';

type PropsPackType = {
    packName: string
    cardsCount: number
    updated: string
    created: string
}

export const Pack: React.FC<PropsPackType> = React.memo(props => {
    const {packName, cardsCount, updated, created} = props
    return (
        <div>
            <TableRow title1={packName} title2={cardsCount} title3={updated} title4={created}/>

        </div>
    );
})

