import React from 'react';
import s from './LearnQuestionAnswer.module.scss';
import Title from "../../components/common/title/Title";
import {Button, Palette, Size} from "../../components/common/c2-SuperButton/Button";
import TextQuestion from "../../components/common/textQuestion/TextQuestion";


export const LearnQuestionAnswer = () => {

    return (

        <div className={s.containerForm}>
            <div className={s.formWrapper}>
                <div className={s.learnQuestionAnswerTitleInner}>
                <Title title="Learn “Pack Name”" />
                </div>
                <div className={s.learnQuestionTextInner}>
                    <TextQuestion title="Question:" question=" How 'This' works in JavaScript?" />
                    <TextQuestion title="Answer:" question=" This is how 'This' works in JavaScripts"/>
                </div>
                <div className={s.learnQuestionAnswerInputWrapper}>
                    <ul className={s.learnQuestionAnswerInputInner}>
                        <span className={s.learnQuestionTitleText}>Rate yourself:</span>
                        <li>
                            <label>
                                <input type="radio" name="rate" />
                                Did not know
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="rate" />
                                Forgot
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="rate" />
                                A lot of thought
                            </label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="rate" />
                                Сonfused</label>
                        </li>
                        <li>
                            <label>
                                <input type="radio" name="rate" />
                                Knew the answer
                            </label>
                        </li>
                    </ul>
                </div>
                <div className={s.btnInner}>
                    <Button size={Size.small} palette={Palette.default} title="Cancel" />
                    <Button size={Size.medium} palette={Palette.primary} title="Show answer" />
                </div>
            </div>
        </div>

    );
};

