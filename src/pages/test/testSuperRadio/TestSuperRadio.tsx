import React, {useState} from 'react';
import {SuperRadio} from '../../../components/common/c6-SuperRadio/SuperRadio';
import style from './TestSuperRadio.module.css'

const arr = ['hello', 'bye', 'success']

export const TestSuperRadio = () => {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div className={style.column}>
            <SuperRadio
                name={'radio'}
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>
    );
};

