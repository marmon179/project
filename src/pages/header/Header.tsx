import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'
import {PATH} from '../../Routes';
import Logo from '../../components/common/logo/Logo';
import {LearnQuestionAnswer} from '../learnQuestionAnswer/LearnQuestionAnswer';


export function Header() {
    return (
        <div className={style.header}>
            <Logo/>
            <form action="">
                <input type="radio" name="switchPage"/>
                <input type="radio" name="switchPage"/>
            </form>
            <div>
                <NavLink to={PATH.LOGIN} className={style.link} activeClassName={style.active}>Login</NavLink>
                <NavLink to={PATH.REGISTRATION} className={style.link}
                         activeClassName={style.active}>Registration</NavLink>
                <NavLink to={PATH.RECOVERY_PASSWORD} className={style.link}
                         activeClassName={style.active}>Forgot</NavLink>
                <NavLink to={PATH.NEW_PASSWORD} className={style.link}
                         activeClassName={style.active}>NewPassword</NavLink>
                <NavLink to={PATH.PROFILE} className={style.link} activeClassName={style.active}>Profile</NavLink>
                <NavLink to={PATH.PACKS_LIST} className={style.link} activeClassName={style.active}>PacksList</NavLink>
                <NavLink to={PATH.DELETE_PACK} className={style.link} activeClassName={style.active}>DelPack</NavLink>
                <NavLink to={PATH.MODAL} className={style.link} activeClassName={style.active}>Modal</NavLink>
                <NavLink to={PATH.LEARN_QUESTION} className={style.link} activeClassName={style.active}>LearnQuestion</NavLink>
                <NavLink to={PATH.LEARN_QUESTION_ANSWER} className={style.link} activeClassName={style.active}>LearnQuestionAnswer</NavLink>
                <NavLink to={PATH.TEST} className={style.link} activeClassName={style.active}>Test</NavLink>
            </div>
        </div>
    )
}



