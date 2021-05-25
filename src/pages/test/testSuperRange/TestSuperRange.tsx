import React, {useState} from 'react';
import {SuperRange} from '../../../components/common/c7-SuperRange/SuperRange';
import style from './TestSuperRange.module.css'


export const TestSuperRange = () => {
    const [value, setValue] = useState<number>(10)

    return (
        <div className={style.column}>
            <span>{value}</span>
            <SuperRange
                value={value}
                onChangeRange={setValue}
            />
        </div>
    );
};

