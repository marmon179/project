import React from 'react'
import s from './ModalDeletePack.module.scss';
import SubTitle from "../../../components/common/subTitle/SubTitle";
import {Button, Size} from "../../../components/common/c2-SuperButton/Button";


export function ModalDeletePack() {
    return (
        <div className={s.modalDelete}>
            <div className={s.containerDelete}>
                <div className={s.modalTitleInner}>
                    <SubTitle title="Delete Pack" />
                    <span>X</span>
                </div>
                <div className={s.modalDeleteText}>
                <p>Do you really want to remove <strong>Pack Name - Name Pack?</strong> All cards will be excluded from this course.</p>
                </div>
                <div className={s.btnInner}>
                    <Button size={Size.small} title="Cancel" />
                    <Button size={Size.small} title="Delete" />
                </div>
            </div>

        </div>
    )
}



