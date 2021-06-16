import React from 'react';
import {CardsList} from './CardsList';


export const CardsListContainer = () => {

    const initialValues: initialValuesType = {}

    const onSubmit = React.useCallback((values: any) => {
        alert(JSON.stringify(values))

    }, [])

    return (
        <CardsList initialValues={initialValues} onSubmit={onSubmit}/>
    );
};
//types
export type initialValuesType =
    {}
