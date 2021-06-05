import React from 'react';
import {PacksList} from './Main';
import {useDispatch} from 'react-redux';
import {toGetDateAC} from '../../bll/SearchReducer';


export const PacksListContainer = () => {

    const dispatch = useDispatch()

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
            />
        </>
    );
};
//types
export type initialValuesType =
    {
        search: string
    }
