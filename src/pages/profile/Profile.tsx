import React from 'react';
import s from './Profile.module.scss';
import SubTitle from "../../components/common/subTitle/SubTitle";
import Title from "../../components/common/title/Title";
import avatar from "./../../assets/img/profile/avatar.png";
import {PacksContainer} from './../PacksList/Packs/PacksContainer';

export const Profile = () => {

    return (
        <div className={s.container}>
            <div className={s.myPacksList}>
                <aside className={s.aside}>
                    <div className={s.innerProfile}>
                        <img src={avatar} alt="" />
                        <Title title="Ivan Ivanov" />
                        <SubTitle title="Front-end developer" />
                        <button>Edit profile</button>
                    </div>
                    <SubTitle title="Number of cards" />
                    Ползунок туда сюда
                </aside>
                <main className={s.main}>

                    <Title title=" My packs list" />

                    <div className={s.search}>
                            <input type="text" name="packName" placeholder="Search..." />
                    </div>
                    <div className={s.packsContainerInner}>
                        <PacksContainer />
                    </div>

                </main>

            </div>

        </div>
    );
};