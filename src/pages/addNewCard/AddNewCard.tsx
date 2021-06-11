import React from 'react';
import s from './AddNewCard.module.scss';
import Title from "../../components/common/title/Title";
import {Button, Palette, Size} from "../../components/common/c2-SuperButton/Button";


export const AddNewCard = () => {

    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <Title title="Card Info" />
                    <form className={s.addNewCardFrom} action="">
                            <label htmlFor="">Question</label>
                            <input type="text" />
                        <input type="file"/>
                            <label htmlFor="">Answer</label>
                            <input type="text" />
                        <input type="file"/>
                        <div className={s.btnInner}>
                            <Button size={Size.small} palette={Palette.default} title="Cancel" />
                            <Button size={Size.small} palette={Palette.primary} title="Save" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

