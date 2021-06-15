import React from 'react'
import s from './ModalAddNewPack.module.scss';
import {initialValuesType} from './ModalAddNewPackContainer';
import {ModalFormik} from './ModalFormik';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    show: boolean
    enableBackground?: boolean;
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    close: () => void;
}

export const ModalAddNewPack: React.FC<PropsType> = React.memo(props => {

    const {
        initialValues, onSubmit, show,
        enableBackground, backgroundOnClick,
        modalOnClick = () => {}
    } = props

    if (!show) return null

    return (
        <>
            {enableBackground && <div className={s.modalAdd} onClick={backgroundOnClick}/>}

            <div className={s.wrapper} onClick={modalOnClick}>
                <ModalFormik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    title={'Add new pack'}
                />
            </div>

        </>
    )
})






