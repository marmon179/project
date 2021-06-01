import React, {useState} from 'react';
import style from './TestSuperButton.module.css'
import {SuperButton} from '../../../components/common/c2-SuperButton/SuperButton';

export const TestSuperButton = () => {
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'Введите текст'

    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    return (
        <div className={style.column}>
            <SuperButton>
                default
            </SuperButton>

            <SuperButton
                red
                onClick={showAlert}
            >
                delete
            </SuperButton>

            <SuperButton disabled>
                disabled
            </SuperButton>
        </div>
    );
};

