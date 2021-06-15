import React, {useCallback, useEffect, useState} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {CardPacks} from '../../dal/api';
import {addId, fetchPacks, removePack} from '../../bll/SearchReducer';

export const PacksContainer = () => {
    const cardPacks = useSelector<AppStateType, CardPacks[]>(state => state.search.cardPacks)
    const pageCount = useSelector<AppStateType, number>(state => state.search.pageSize)
    const page = useSelector<AppStateType, number>(state => state.search.currentPage)

    const userId = useSelector<AppStateType, string>(state => state.app.meObject._id)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const onRemovePack = useCallback((id) => {
        dispatch(removePack(id))
    }, [dispatch])
    const onEditPack = useCallback((id) => {
        dispatch(addId(id))
        setShow(true)
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchPacks({page, pageCount}))
    }, [])


    return (
        <>
            <Packs
                cardPacks={cardPacks}
                userId={userId}
                onRemovePack={onRemovePack}
                onEditPack={onEditPack}
                show={show}
                close={() => setShow(false)}
                backgroundOnClick={() => setShow(false)}
            />
        </>

    );
};

