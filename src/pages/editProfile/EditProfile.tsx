import React from 'react';
import s from './EditProfile.module.scss';
import Title from "../../components/common/title/Title";
import {Button, Palette, Size} from "../../components/common/c2-SuperButton/Button";
import avatar from "../../assets/img/profile/avatar.png";
import chooseAvatar from "../../assets/img/editProfile/chooseAvatar.png";


export const EditProfile = () => {

    return (

        <div className={s.containerForm}>
            <div className={s.formWrapper}>
                <Title title="Personal Information" />
                <div className={s.avatarEditProfileInner}>
                    <img src={avatar} alt="avatar" />
                    <input className={s.chooseAvatar} type="image" src={chooseAvatar}/>
                </div>
                <input type="text" />
                <input type="email" />
                <div className={s.btnInner}>
                    <Button size={Size.small} palette={Palette.default} title="Cancel" />
                    <Button size={Size.small} palette={Palette.primary} title="Save" />
                </div>
            </div>
        </div>

);
};

