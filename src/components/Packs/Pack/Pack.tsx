import React from 'react';
import TableRow from '../../tableRow/TableRow';

type PropsPackType = {
    id: string
    packName: string
    cardsCount: number
    updated: string
    created: string
    onRemovePack: (id: string) => void
}

export const Pack: React.FC<PropsPackType> = React.memo(props => {
    const {packName, cardsCount, updated, created, onRemovePack} = props
    return (
        <div>
            {/*<TableRow*/}
            {/*    title1={packName}*/}
            {/*    title2={cardsCount}*/}
            {/*    title3={updated}*/}
            {/*    title4={created}*/}
            {/*    onRemovePack={onRemovePack}*/}
            {/*/>*/}

        </div>
    );
})

