import React, {useState} from 'react';
import {PacksList} from './Main';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../bll/store';
import {fetchPacks, searchPacks} from '../../bll/SearchReducer';


export const PacksListContainer = () => {
    const cardPacksTotalCount = useSelector<AppStateType, number>(state => state.search.cardPacksTotalCount)
    const pageCount = useSelector<AppStateType, number>(state => state.search.pageSize)
    const currentPage = useSelector<AppStateType, number>(state => state.search.currentPage)

    const [show, setShow] = useState(false);
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
    }, [dispatch])
    return (
        <>
            <PacksList
                initialValues={initialValues}
                onSubmit={onSubmit}
                currentPage={currentPage}
                pageSize={pageCount}
                cardPacksTotalCount={cardPacksTotalCount}
                onPageChanged={onPageChanged}
                show={show}
                close={() => setShow(false)}
                backgroundOnClick={() => setShow(false)}
                onClickButton={() => setShow(true)}
            />
        </>
    );
}
//types
export type initialValuesType =
    {
        packName: string
    }
