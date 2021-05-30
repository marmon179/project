import React from "react";
import s from "./AuthForgotPassword.module.scss";
import InputEmail from "../../components/common/inputEmail/InputEmail";
import ButtonLarge from "../../components/common/buttonLarge/ButtonLarge";


export const AuthForgotPassword = () => {
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>

                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Forgot your password?</span>

                    <form action="" className={s.formEmail}>
                        {/*<InputEmail />*/}
                    </form>
                    <p className={s.textEmail}>Enter your email address and we will send you further instructions </p>
                    <div className={s.buttonInner}>
                        <ButtonLarge title="Send Instructions" />
                    </div>
                    <div className={s.blockSingUp}>
                        <span className={s.formText}>Did you remember your password?</span>
                        <a href="#" className={s.linkSingUp}>Try logging in</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

