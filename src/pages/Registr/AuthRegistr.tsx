import React from "react";
import s from "./AuthRegistr.module.scss";
import InputPassword from "../../components/common/inputPassword/InputPassword";
import InputEmail from "../../components/common/inputEmail/InputEmail";
import ButtonSmall from "../../components/common/buttonSmall/ButtonSmall";
import "./../../../src/styles/vars.scss";
import ButtonMedium from "../../components/common/buttonMedium/ButtonMedium";

export const AuthRegistr = () => {
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>
                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Sign In</span>
                    <form action="" className={s.formLogin}>
                        {/*<InputEmail />*/}
                        {/*<InputPassword title="Password"/>*/}
                        {/*<InputPassword title="Confirm password"/>*/}
                    </form>
                    <div className={s.btnInner}>
                        <ButtonSmall title="Cancel"/>
                        <ButtonMedium title="Register"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

