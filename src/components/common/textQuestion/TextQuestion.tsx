import React from "react";
import s from "./TextQuestion.module.scss";


export const TextQuestion = (props: any) => {
    return (
        <div>
            <p>
                <span className={s.textTitle}>{props.title}</span>
                <span className={s.textQuestion}>{props.question}</span>
            </p>
        </div>
    );
};

export default TextQuestion;