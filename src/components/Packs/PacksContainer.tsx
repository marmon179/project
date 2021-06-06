import React, {useEffect} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {cardPacks} from '../../dal/api';
import {requestPacks} from '../../bll/SearchReducer';

export const PacksContainer = () => {
    const cardPacks = useSelector<AppStateType, cardPacks[]>(state => state.search.cardPacks)
    const pageSize = useSelector<AppStateType, number>(state => state.search.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.search.currentPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestPacks(currentPage, pageSize))
    }, [])


    return (
        <>
            <Packs cardPacks={cardPacks}/>
        </>

    );
};

