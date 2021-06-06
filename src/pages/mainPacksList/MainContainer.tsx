import React from 'react';
import {PacksList} from './Main';
import {useDispatch, useSelector} from 'react-redux';
import {requestPacks, toGetDateAC} from '../../bll/SearchReducer';
import {AppStateType} from '../../bll/store';


export const PacksListContainer = () => {
    const totalItemsCount = useSelector<AppStateType, number>(state => state.search.totalItemsCount)
    const pageSize = useSelector<AppStateType, number>(state => state.search.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.search.currentPage)
    const dispatch = useDispatch()

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestPacks(pageNumber,pageSize))
    }

    const initialValues: initialValuesType = {
        search: ''
    }

    const onSubmit = React.useCallback((values: any) => {
        alert(JSON.stringify(values))
        dispatch(toGetDateAC(values))
    }, [dispatch])
    return (
        <>
            <PacksList
                initialValues={initialValues}
                onSubmit={onSubmit}
                currentPage={currentPage}
                pageSize={pageSize}
                totalItemsCount={totalItemsCount}
                onPageChanged={onPageChanged}
            />
        </>
    );
};
//types
export type initialValuesType =
    {
        search: string
    }
