import React from 'react'
import s from './ModalAddNewPack.module.scss';
import SubTitle from "../../../components/common/subTitle/SubTitle";
import {Button, Palette, Size} from "../../../components/common/c2-SuperButton/Button";


export function ModalAddNewPack() {
    return (
        <div className={s.modalAdd}>
            <div className={s.containerAdd}>
                <div className={s.modalTitleInner}>
                    <SubTitle title="Add new pack" />
                    <span>X</span>
                </div>
                <div className={s.modalAddInput}>
                    <label>Name Pack</label>
                <input/>
                </div>
                <div className={s.btnInner}>
                    <Button size={Size.small} title="Cancel" />
                    <Button size={Size.small} palette={Palette.primary} title="Save" />
                </div>
            </div>

        </div>
    )
}



