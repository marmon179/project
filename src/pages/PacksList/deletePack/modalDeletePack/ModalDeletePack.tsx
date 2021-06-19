import React from 'react'
import s from './ModalDeletePack.module.scss';
import SubTitle from '../../../../components/common/subTitle/SubTitle';
import {Button, Size} from '../../../../components/common/c2-SuperButton/Button';
import {ModalDelete} from './ModalDelete';

interface IModalQuestion {
    show: boolean;
    packName: string;
    setTrue: () => void;
    setFalse: () => void;

    enableBackground?: boolean;
    backgroundOnClick?: () => void;

    modalOnClick?: () => void;
}


export const ModalDeletePack: React.FC<IModalQuestion> = (
    {
        setTrue, setFalse, enableBackground, backgroundOnClick = () => {
    },packName, modalOnClick = () => {}, show, children,
    }
) => (


    <ModalDelete
        enableBackground={enableBackground}
        backgroundOnClick={backgroundOnClick}
        modalOnClick={modalOnClick}
        show={show}
    >
        {children ? children : 'Delete pack'}

        <div className={s.containerDelete}>
            <div className={s.modalTitleInner}>
                <SubTitle title="Delete Pack"/>
            </div>
            <div className={s.modalDeleteText}>
                <p>Do you really want to remove <strong>Pack Name - '{packName}'?</strong> All cards will be excluded
                    from
                    this course.</p>
            </div>
            <div className={s.btnInner}>
                <Button onClick={setFalse} size={Size.small} title="Cancel"/>
                <Button onClick={setTrue} size={Size.small} title="Delete"/>
            </div>
        </div>

    </ModalDelete>


);



