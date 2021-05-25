import React, {useState} from 'react';
import {SuperDoubleRange} from '../../../components/common/c8-SuperDoubleRange/SuperDoubleRange';
import style from './TestSuperDoubleRange.module.css'


export const TestSuperDoubleRange = () => {
    const [value1, setValue1] = useState<number>(10)
    const [value2, setValue2] = useState<number>(50)
    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    return (
        <div className={style.column}>
            <span className={style.wrapperNumber}>{value1}</span>
            <SuperDoubleRange
                value={[value1, value2]}
                onChangeRange={onChangeRange}
            />
            <span>{value2}</span>
        </div>
    );
};

