import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../../../bll/store';
import {ModalEditCard} from './ModalEditCard';
import {editCard} from '../../../../bll/CardsReducer';


export const ModalEditCardContainer: React.FC<PropsType> = props => {

    const {show, backgroundOnClick = () => {}, modalOnClick = () => {}, close} = props

    const dispatch = useDispatch()
    const id = useSelector<AppStateType, string>(state => state.packs._id)
    const idCards = useSelector<AppStateType, string>(state => state.cards._id)

    const initialValues: initialValuesType = {
        _id: idCards,
        question:'',
        comments:''
    }

    const onSubmit = React.useCallback((values: initialValuesType) => {
        dispatch(editCard(values,id))
        close()
    }, [editCard])

    return (
        <ModalEditCard
            initialValues={initialValues}
            onSubmit={onSubmit}
            show={show}
            enableBackground={true}
            backgroundOnClick={() => {
                backgroundOnClick()
            }}
            modalOnClick={modalOnClick}
            close={close}
        />
    )
}
//types
export type initialValuesType =
    {
        _id: string
        question:string
        comments:string
    }
type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
}




