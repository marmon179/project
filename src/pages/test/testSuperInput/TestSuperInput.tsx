import React, {useState} from 'react';
import {SuperInputText} from '../../../components/common/c1-SuperInputText/SuperInputText';
import style from './TestSuperInput.module.css'

export const TestSuperInput = () => {
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
            <SuperInputText
                value={text}
                onChangeText={setText}
                onEnter={showAlert}
                error={error}
            />
            <SuperInputText/>
        </div>
    );
};

