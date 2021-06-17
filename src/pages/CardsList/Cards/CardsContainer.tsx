import React, {useCallback, useEffect, useState} from 'react';
import {Cards} from './Cards';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {CardType} from '../../../dal/api';
import {addIdCard, fetchCards, removeCard} from '../../../bll/CardsReducer';


export const CardsContainer = () => {
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    const dispatch = useDispatch()
    const page = useSelector<AppStateType, number>(state => state.cards.currentPage)
    const pageCount = useSelector<AppStateType, number>(state => state.cards.page)
    const cardsPack_id = useSelector<AppStateType, string>(state => state.packs._id)

    const onRemoveCard = useCallback((id) => {
        dispatch(removeCard(id, cardsPack_id))
    }, [removeCard])

    const [show, setShow] = useState(false);

    const onLearnCard = useCallback((id) => {
        dispatch(addIdCard(id))
    }, [])

    useEffect(() => {
        dispatch(fetchCards({page, pageCount, cardsPack_id}))
    }, [])
    return (
        <>
            <Cards
                cards={cards}
                onRemoveCard={onRemoveCard}
                onLearnCard={onLearnCard}
                close={() => setShow(false)}
                show={show}
                backgroundOnClick={() => setShow(false)}

            />
        </>
    );
};

