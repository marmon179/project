import React, {useCallback, useEffect, useState} from 'react';
import {Packs} from './Packs';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../bll/store';
import {CardPacks} from '../../../dal/api';
import {addId, addPackName, fetchPacks, removePack} from '../../../bll/PacksReducer';
import {useHistory} from 'react-router-dom';
import {PATH} from '../../../Routes';

export const PacksContainer = () => {

    const cardPacks = useSelector<AppStateType, CardPacks[]>(state => state.packs.cardPacks)
    const pageCount = useSelector<AppStateType, number>(state => state.packs.pageSize)
    const page = useSelector<AppStateType, number>(state => state.packs.currentPage)
    const id = useSelector<AppStateType, string>(state => state.packs._id)
    const packNam = useSelector<AppStateType, string>(state => state.packs.packName)

    const userId = useSelector<AppStateType, string>(state => state.app.meObject._id)
    const dispatch = useDispatch()
    const history = useHistory()

    const [show, setShow] = useState(false);
    const [del, setDel] = useState(false);

    const onRemovePack = useCallback((id, packName) => {
        dispatch(addId(id))
        dispatch(addPackName(packName))
        setDel(true)
    }, [addId, addPackName])

    const onEditPack = useCallback((id) => {
        dispatch(addId(id))
        setShow(true)
    }, [addId, setShow])

    const onLearnPack = useCallback((id, packName) => {
        dispatch(addId(id))
        dispatch(addPackName(packName))
        history.push(PATH.CARDS_LIST)

    }, [addId, addPackName])

    useEffect(() => {
        dispatch(fetchPacks({page, pageCount}))
    }, [])

    const setTrue = () => {
        dispatch(removePack(id))
        setDel(false);
    };
    const setFalse = () => {
        setDel(false);
    };

    return (
        <>
            <Packs
                cardPacks={cardPacks}
                userId={userId}
                onRemovePack={onRemovePack}
                onEditPack={onEditPack}
                onLearnPack={onLearnPack}
                close={() => setShow(false)}
                show={show}
                backgroundOnClick={() => setShow(false)}
                backgroundOnClickDel={() => setDel(false)}
                del={del}
                setTrue={setTrue}
                setFalse={setFalse}
                packNam={packNam}
            />

        </>
    );
};

