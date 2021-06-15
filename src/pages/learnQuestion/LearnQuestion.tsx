import React from 'react';
import s from './LearnQuestion.module.scss';
import Title from "../../components/common/title/Title";
import {Button, Palette, Size} from "../../components/common/c2-SuperButton/Button";
import TextQuestion from "../../components/common/textQuestion/TextQuestion";


export const LearnQuestion = () => {

    return (

            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <Title title="Learn “Pack Name”" />
                    <TextQuestion title="Question:" question=" How 'This' works in JavaScript?" />
                    <div className={s.btnInner}>
                        <Button size={Size.small} palette={Palette.default} title="Cancel" />
                        <Button size={Size.medium} palette={Palette.primary} title="Show answer" />
                    </div>
                </div>
            </div>

    );
};

