import React from 'react';
import {CardsList} from './CardsList';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {useHistory} from 'react-router-dom';
import {fetchCards} from '../../bll/CardsReducer';


export const CardsListContainer = () => {
    const title = useSelector<AppStateType,string>(state => state.packs.packName)
    const cardsTotalCount = useSelector<AppStateType,number>(state => state.cards.cardsTotalCount)
    const pageCount = useSelector<AppStateType,number>(state => state.cards.page)
    const currentPage = useSelector<AppStateType,number>(state => state.cards.currentPage)
    const initialValues: initialValuesType = {}

    const dispatch = useDispatch()

    const history = useHistory()

    const onPageChanged = (page: number) => {
        dispatch(fetchCards({page, pageCount}))
    }

    const onSubmit = React.useCallback((values: any) => {
        alert(JSON.stringify(values))

    }, [])
    const back = React.useCallback(() => {
       history.goBack()
    }, [])

    return (
        <CardsList
            initialValues={initialValues}
            onSubmit={onSubmit}
            title={title}
            back={back}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
            pageSize={pageCount}
            cardPacksTotalCount={cardsTotalCount}
        />
    );
};
//types
export type initialValuesType =
    {}
