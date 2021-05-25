import React, {useState} from 'react';
import {SuperSelect} from '../../../components/common/c5-SuperSelect/SuperSelect';
import style from './TestSuperSelect.module.css'

const arr = ['hello', 'bye', 'success']

export const TestSuperSelect = () => {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div className={style.column}>
            <SuperSelect
                options={arr}
                value={value}
                onChangeOption={onChangeOption}
            />
        </div>
    );
};

