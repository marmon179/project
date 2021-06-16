import React, {useCallback, useEffect} from 'react';
import {Cards} from './Cards';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {CardType} from '../../../dal/api';
import {editCard, fetchCards, removeCard} from '../../../bll/CardsReducer';


export const CardsContainer = () => {
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    const dispatch = useDispatch()
    const page = useSelector<AppStateType, number>(state => state.cards.currentPage)
    const pageCount = useSelector<AppStateType, number>(state => state.cards.page)
    const cardsPack_id = useSelector<AppStateType, string>(state => state.packs._id)

    const onRemoveCard = useCallback((id, cardsPack_id) => {
        dispatch(removeCard(id, cardsPack_id))
    }, [removeCard])
    const onLearnCard = useCallback((id, cardsPack_id, answer, question) => {
        dispatch(editCard(id, cardsPack_id, answer, question))
    }, [removeCard])

    useEffect(() => {
        dispatch(fetchCards({page, pageCount, cardsPack_id}))
    }, [])
    return (
        <>
            <Cards
                cards={cards}
                onRemoveCard={onRemoveCard}
                onLearnCard={onLearnCard}

            />
        </>
    );
};

