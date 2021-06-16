import React from 'react';
import {CardsList} from './CardsList';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useHistory} from 'react-router-dom';
import {fetchPacks} from '../../bll/PacksReducer';


export const CardsListContainer = () => {
    const title = useSelector<AppStateType,string>(state => state.packs.packName)
    const initialValues: initialValuesType = {}

    const history = useHistory()

    const onSubmit = React.useCallback((values: any) => {
        alert(JSON.stringify(values))

    }, [])
    const back = React.useCallback(() => {
       history.goBack()
    }, [])

    return (
        <CardsList initialValues={initialValues} onSubmit={onSubmit} title={title} back={back}/>
    );
};
//types
export type initialValuesType =
    {}
