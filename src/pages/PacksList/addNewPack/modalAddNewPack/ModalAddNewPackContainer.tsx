import React from 'react'
import {useDispatch} from 'react-redux';
import {addCardsPacks} from '../../../../bll/PacksReducer';
import {ModalAddNewPack} from './ModalAddNewPack';

export const ModalAddNewPackContainer: React.FC<PropsType> = React.memo(props => {

    const {show, backgroundOnClick = () => {}, modalOnClick = () => {}, close} = props


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
        dispatch(addCardsPacks(values))
        close()
    }, [addCardsPacks])

    return (
        <ModalAddNewPack
            initialValues={initialValues}
            onSubmit={onSubmit}
            show={show}
            enableBackground={true}
            backgroundOnClick={() => {backgroundOnClick()}}
            modalOnClick={modalOnClick}
            close={close}
        />
    )
})
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
type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
}




