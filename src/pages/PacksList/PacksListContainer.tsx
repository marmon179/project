import React from 'react';
import {PacksList} from './PackList';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {fetchPacks, searchPacks} from '../../bll/PacksReducer';


export const PacksListContainer = () => {
    const cardPacksTotalCount = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const pageCount = useSelector<AppStateType, number>(state => state.packs.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.packs.currentPage)

    const dispatch = useDispatch()

    const onPageChanged = (page: number) => {
        dispatch(fetchPacks({page, pageCount}))
    }

    const initialValues: initialValuesType = {
        packName: ''
    }

    const onSubmit = React.useCallback((values: any) => {
        // alert(JSON.stringify(values))
        dispatch(searchPacks(values))
    }, [searchPacks])
    return (
        <>
            <PacksList
                initialValues={initialValues}
                onSubmit={onSubmit}
                currentPage={currentPage}
                pageSize={pageCount}
                cardTotalCount={cardPacksTotalCount}
                onPageChanged={onPageChanged}
            />
        </>
    );
}
//types
export type initialValuesType =
    {
        packName: string
    }
