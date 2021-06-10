import React, {useEffect} from 'react';
import {PacksList} from './Main';
import {useDispatch, useSelector} from 'react-redux';
import {requestPacks, searchPacks} from '../../bll/SearchReducer';
import {AppStateType} from '../../bll/store';


export const PacksListContainer = () => {
    const cardPacksTotalCount = useSelector<AppStateType, number>(state => state.search.cardPacksTotalCount)
    const pageSize = useSelector<AppStateType, number>(state => state.search.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.search.currentPage)
    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestPacks(pageNumber, pageSize))
    }

    const initialValues: initialValuesType = {
        packName: ''
    }

    const onSubmit = React.useCallback((values: any) => {
        // alert(JSON.stringify(values))
        dispatch(searchPacks(values))
    }, [dispatch])
    return (
        <>
            <PacksList
                initialValues={initialValues}
                onSubmit={onSubmit}
                currentPage={currentPage}
                pageSize={pageSize}
                cardPacksTotalCount={cardPacksTotalCount}
                onPageChanged={onPageChanged}
            />
        </>
    );
};
//types
export type initialValuesType =
    {
        packName: string
    }
