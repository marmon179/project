import React, {useEffect} from 'react';
import {Cards} from './Cards';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {CardType} from '../../../dal/api';
import {fetchCards} from '../../../bll/CardsReducer';


export const CardsContainer = () => {
    const cards = useSelector<AppStateType, CardType[]>(state => state.cards.cards)
    const dispatch = useDispatch()
    const page = useSelector<AppStateType,number>(state => state.cards.page)
    const pageCount = useSelector<AppStateType,number>(state => state.cards.cardsTotalCount)
    const cardsPack_id = useSelector<AppStateType,string>(state => state.packs._id)

    useEffect(() =>{
        dispatch(fetchCards({page,pageCount,cardsPack_id}))
    },[])
    return (
        <>
            <Cards
                cards={cards}
            />
        </>
    );
};

