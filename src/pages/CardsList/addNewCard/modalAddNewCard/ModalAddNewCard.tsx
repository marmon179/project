import React from 'react'
import s from './ModalAddNewCard.module.scss';
import {initialValuesType} from './ModalAddNewCardContainer';
import {ModalFormikCard} from './ModalFormikCard';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    show: boolean
    enableBackground?: boolean;
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    close: () => void;
}

export const ModalAddNewCard: React.FC<PropsType> = React.memo(props => {

    const {
        initialValues, onSubmit, show,
        enableBackground, backgroundOnClick,close,
        modalOnClick = () => {}
    } = props

    if (!show) return null

    return (
        <>
            {enableBackground && <div className={s.modalAdd} onClick={backgroundOnClick}/>}

            <div className={s.wrapper} onClick={modalOnClick}>
                <ModalFormikCard
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    close={close}
                    title={'Add new card'}
                />
            </div>

        </>
    )
})






