import React from 'react'
import {ModalEditPack} from './ModalEditPack';
import {useDispatch} from 'react-redux';
import {addCardsPacks} from '../../../bll/SearchReducer';


export const ModalEditPackContainer = () => {
    const dispatch = useDispatch()
    const initialValues: initialValuesType = {
        name: '',
        path: '',
        grade: 0,
        shots: 0,
        rating: 0,
        deckCover: '',
        private: false,
        type: ''

    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(addCardsPacks(values))
    }, [])
    return (
        <ModalEditPack
            initialValues={initialValues}
            onSubmit={onSubmit}
        />
    )
}
//types
export type initialValuesType =
    {
        name: string
        path: string
        grade: number
        shots: number
        rating: number
        deckCover: string
        private: false
        type: string
    }




