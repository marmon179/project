import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addCardsPacks} from '../../../../bll/PacksReducer';
import {ModalAddNewCard} from './ModalAddNewCard';
import {AppStateType} from '../../../../bll/store';
import {addCard} from '../../../../bll/CardsReducer';

export const ModalAddNewCardContainer: React.FC<PropsType> = React.memo(props => {

    const {show, backgroundOnClick = () => {}, modalOnClick = () => {}, close} = props


    const dispatch = useDispatch()
    const id = useSelector<AppStateType, string>(state => state.packs._id)
    const initialValues: initialValuesType = {
        cardsPack_id: id,
        question: '',
        answer: '',
        grade: 0,
        shots: 0,
        rating: 2,
        answerImg: '',
        questionImg: '',
        questionVideo: '',
        answerVideo: '',
        type: ''
    }


    const onSubmit = React.useCallback((values: initialValuesType) => {
        // alert(JSON.stringify(values))
        dispatch(addCard(values))
        close()
    }, [addCardsPacks])

    return (
        <ModalAddNewCard
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
})
//types
export type initialValuesType =
    {
        cardsPack_id: string
        question: string
        answer: string
        grade?: number
        shots?: number
        rating?: number
        answerImg?: string
        questionImg?: string
        questionVideo?: string
        answerVideo?: string
        type?: string
    }
type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
}




