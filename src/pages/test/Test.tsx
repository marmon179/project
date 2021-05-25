import React from 'react';
import style from './test.module.css'
import {TestSuperInput} from './testSuperInput/TestSuperInput';
import {TestSuperButton} from './testSuperButton/TestSuperButton';
import {TestSuperCheckbox} from './testSuperCheckbox/TestSuperCheckbox';
import {SuperEditableSpan} from '../../components/common/c4-SuperEditableSpan/SuperEditableSpan';
import {TestSuperEditableSpan} from './testSuperEditableSpan/TestSuperEditableSpan';

export const Test = () => {
    return (
        <div className={style.test}>
            <hr/>
            <span>
                SuperInputText
            </span>
            <div>
                <TestSuperInput/>
            </div>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperButton
            </span>
            <div>
                <TestSuperButton/>
            </div>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperCheckbox
            </span>
            <div>
                <TestSuperCheckbox/>
            </div>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperEditableSpan
            </span>
            <div>
                <TestSuperEditableSpan/>
            </div>
        </div>
    );
};

