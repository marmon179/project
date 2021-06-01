import React from 'react'
import {NavLink} from 'react-router-dom';
import style from './Header.module.css'
import {PATH} from '../../Routes';

function Header() {
    return (
        <div className={style.header}>
            <NavLink to={PATH.LOGIN} className={style.link} activeClassName={style.active}>Login</NavLink>
            <NavLink to={PATH.PROFILE} className={style.link} activeClassName={style.active}>Profile</NavLink>
            <NavLink to={PATH.REGISTRATION} className={style.link} activeClassName={style.active}>Registration</NavLink>
            <NavLink to={PATH.TEST} className={style.link} activeClassName={style.active}>Test</NavLink>
        </div>
    )
}

export default Header


