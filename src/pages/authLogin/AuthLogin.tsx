import React from "react";
import s from "./AuthLogin.module.scss";
import InputPassword from "../../components/common/inputPassword/InputPassword";
import InputEmail from "../../components/common/inputEmail/InputEmail";
import ButtonLarge from "../../components/common/buttonLarge/ButtonLarge";


export const AuthLogin = () => {
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>

                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Sign In</span>

                    <form action="" className={s.formLogin}>
                        <InputEmail />
                        <InputPassword title="Password" />
                    </form>
                    <a href="#" className={s.linkForgotPassword}>Forgot password</a>
                    <div className={s.buttonInner}>
                        <ButtonLarge title="Login" />
                    </div>
                    <div className={s.blockSingUp}>
                        <span className={s.formText}>Don’t have an account?</span>
                        <a href="#" className={s.linkSingUp}>Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLogin;