import React from "react";
import s from "./AurhForgorNewPassword.module.scss";
import InputPassword from "../../components/common/inputPassword/InputPassword";
import ButtonLarge from "../../components/common/buttonLarge/ButtonLarge";


export const AurhForgorNewPassword = () => {
    return (
        <div className={s.form}>
            <div className={s.containerForm}>
                <div className={s.formWrapper}>

                    <h2 className={s.formTitle}>It-incubator</h2>
                    <span className={s.formSubTitle}>Create new password</span>
                    <form action="" className={s.formLogin}>
                        <InputPassword title="Password" />
                        <p className={s.textNewPassword}>Create new password and we will send you further instructions
                            to email</p>
                        <div className={s.buttonInner}>
                            <ButtonLarge title="Create new password" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AurhForgorNewPassword;