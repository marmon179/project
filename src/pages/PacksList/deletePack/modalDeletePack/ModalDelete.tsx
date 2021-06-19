import React from 'react';
import s from './ModalDeletePack.module.scss'

interface IModal {
    enableBackground?: boolean;
    backgroundOnClick?: () => void;

    modalOnClick?: () => void;

    show: boolean
}

export const ModalDelete: React.FC<IModal> = (
    {
        enableBackground,
        backgroundOnClick = () => {},

        modalOnClick = () => {},

        show,
        children,
    }
) => {

    if (!show) return null;
    return (
        <>
            {enableBackground && <div className={s.modalDelete}
                onClick={backgroundOnClick}
            />}
            <div className={s.wrapper}
                onClick={modalOnClick}
            >
                {children}
            </div>

        </>
    );
};

