import React, {useState} from 'react';
import {SuperInputText} from '../../../components/common/c1-SuperInputText/SuperInputText';
import style from './TestSuperCheckbox.module.css'
import {SuperCheckbox} from '../../../components/common/c3-SuperCheckbox/SuperCheckbox';

export const TestSuperCheckbox = () => {

    return (
        <div className={style.column}>
            <SuperCheckbox/>
        </div>
    );
};

