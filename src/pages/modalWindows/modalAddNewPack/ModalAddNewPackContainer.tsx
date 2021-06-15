import React from 'react'
import {useDispatch} from 'react-redux';
import {addCardsPacks} from '../../../bll/SearchReducer';
import {ModalAddNewPackInput} from './ModalAddNewPackInput';

export const ModalAddNewPackContainer: React.FC<PropsType> = props => {

    const {show, backgroundOnClick = () => {},
           modalOnClick = () => {},
           close
    } = props

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
        close()
    }, [addCardsPacks])
    return (
        <ModalAddNewPackInput
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
            close={close}
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
type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
}




