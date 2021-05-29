import React from 'react';
import s from './Login.module.scss'
import {NavLink} from 'react-router-dom';
import {PATH} from "../../Routes";

export const Login = () => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                <h1 className={"Incubator"}>It-incubator</h1>
                <h3 className={"signIn"}>Sign In</h3>
                <input type="email" placeholder={"Email"}/>
                <input type="password" placeholder={"Password"}/>
                <NavLink to={PATH.RECOVERY_PASSWORD}>Forgot Password</NavLink>
                <button className={s.btn}>Login</button>
                <span>Don’t have an account?</span>
                <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
            </div>
        </div>
    );
};

