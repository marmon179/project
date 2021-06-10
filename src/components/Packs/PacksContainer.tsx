import React, {useCallback, useEffect} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {CardPacks} from '../../dal/api';
import {addId, removePack, requestPacks} from '../../bll/SearchReducer';
import {PATH} from '../../Routes';
import {useHistory} from 'react-router-dom';

export const PacksContainer = () => {
    const cardPacks = useSelector<AppStateType, CardPacks[]>(state => state.search.cardPacks)
    const pageSize = useSelector<AppStateType, number>(state => state.search.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.search.currentPage)

    const userId = useSelector<AppStateType, string>(state => state.app.meObject._id)
    const dispatch = useDispatch()
    const history = useHistory()

    const onRemovePack = useCallback((id) => {
        dispatch(removePack(id))
    }, [dispatch])
    const onEditPack = useCallback((id) => {
        dispatch(addId(id))
        history.push(PATH.EDIT_PACK)
    }, [dispatch])

    useEffect(() => {
        dispatch(requestPacks(currentPage, pageSize))
    }, [dispatch, currentPage, pageSize])


    return (
        <>
            <Packs cardPacks={cardPacks} userId={userId} onRemovePack={onRemovePack} onEditPack={onEditPack}
            />
        </>

    );
};

