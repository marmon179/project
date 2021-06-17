import React from 'react'
import s from './ModalEditCard.module.scss';
import {initialValuesType} from './ModalEditCardContainer';
import {ModalFormikEditCard} from './ModalFormikEditCard';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    show: boolean
    enableBackground?: boolean;
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    close: () => void;
}

export const ModalEditCard: React.FC<PropsType> = React.memo(props => {

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
                <ModalFormikEditCard
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    title={'Edit pack'}
                    close={close}
                />
            </div>
        </>
    )
})






