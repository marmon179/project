import React from 'react'
import {ModalEditPack} from './ModalEditPack';
import {useDispatch, useSelector} from 'react-redux';
import {editPack, openModalWindow} from '../../../bll/SearchReducer';
import {AppStateType} from '../../../bll/store';


export const ModalEditPackContainer = () => {
    const dispatch = useDispatch()
    const id = useSelector<AppStateType, string>(state => state.search._id)
    const initialValues: initialValuesType = {
        _id: id,
        name: '',

    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(editPack(values))
        dispatch(openModalWindow(false))
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
        _id: string
        name: string

    }




