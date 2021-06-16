import React, {useCallback, useEffect, useState} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {CardPacks} from '../../../dal/api';
import {addId, fetchPacks, removePack} from '../../../bll/PacksReducer';

export const PacksContainer = () => {

    const cardPacks = useSelector<AppStateType, CardPacks[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppStateType, number>(state => state.packs.pageSize)
    const page = useSelector<AppStateType, number>(state => state.packs.currentPage)

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
                close={() => setShow(false)}
                show={show}
                backgroundOnClick={() => setShow(false)}
            />
            </>
    );
};

