import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'
import {PATH} from '../../Routes';

export function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.LOGIN} className={style.link} activeClassName={style.active}>Login</NavLink>
            <NavLink to={PATH.REGISTRATION} className={style.link} activeClassName={style.active}>Registration</NavLink>
            <NavLink to={PATH.RECOVERY_PASSWORD} className={style.link} activeClassName={style.active}>Forgot</NavLink>
            <NavLink to={PATH.FORGOT_EMAIL} className={style.link} activeClassName={style.active}>Check</NavLink>
            <NavLink to={PATH.NEW_PASSWORD} className={style.link} activeClassName={style.active}>NewPassword</NavLink>
            <NavLink to={PATH.PROFILE} className={style.link} activeClassName={style.active}>Profile</NavLink>

            <NavLink to={PATH.TEST} className={style.link} activeClassName={style.active}>Test</NavLink>
        </div>
    )
}


