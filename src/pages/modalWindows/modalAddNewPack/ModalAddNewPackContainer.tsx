import React, {useState} from 'react'
import {ModalAddNewPack} from './ModalAddNewPack';
import {useDispatch} from 'react-redux';
import {addCardsPacks} from '../../../bll/SearchReducer';
import {ModalAddNewPackInput} from './ModalAddNewPackInput';

type PropsType = {
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    answer?: string;
    setAnswer?: (answer: string) => void;
    modalOnClick?: () => void;
}

export const ModalAddNewPackContainer: React.FC<PropsType> = props => {

    const {show,backgroundOnClick = () => {},answer,setAnswer,modalOnClick = () => {},} = props
    const [answerData, setAnswerData] = useState(answer);
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
        <ModalAddNewPackInput
            initialValues={initialValues}
            onSubmit={onSubmit}
            show={show}
            enableBackground={true}
            backgroundOnClick={() => {
                setAnswerData(answer);
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
        name: string
        path: string
        grade: number
        shots: number
        rating: number
        deckCover: string
        private: false
        type: string
    }




