import React from 'react'
import {ModalEditPack} from './ModalEditPack';
import {useDispatch, useSelector} from 'react-redux';
import {editPack} from '../../../bll/SearchReducer';
import {AppStateType} from '../../../bll/store';


export const ModalEditPackContainer: React.FC<PropsType> = props => {

    const {
        show, backgroundOnClick = () => {},
        modalOnClick = () => {},
        close
    } = props

    const dispatch = useDispatch()
    const id = useSelector<AppStateType, string>(state => state.search._id)
    const initialValues: initialValuesType = {
        _id: id,
        name: '',
    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(editPack(values))
        close()
    }, [])

    return (
        <ModalEditPack
            initialValues={initialValues}
            onSubmit={onSubmit}
            show={show}
            enableBackground={true}
            backgroundOnClick={() => {
                backgroundOnClick()
            }}
            modalOnClick={modalOnClick}
            width={395}
            height={221}
        />
    )
}
//types
export type initialValuesType =
    {
        _id: string
        name: string
    }
type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
}




