import React from 'react';
import style from './test.module.css'
import {TestSuperInput} from './testSuperInput/TestSuperInput';
import {TestSuperButton} from './testSuperButton/TestSuperButton';
import {TestSuperCheckbox} from './testSuperCheckbox/TestSuperCheckbox';
import {TestSuperEditableSpan} from './testSuperEditableSpan/TestSuperEditableSpan';
import {TestSuperSelect} from './testSuperSelect/TestSuperSelect';
import {TestSuperRadio} from './testSuperRadio/TestSuperRadio';
import {TestSuperRange} from './testSuperRange/TestSuperRange';
import { TestInputSearch } from './testInputSearch/TestSuperInput';

export const Test = () => {
    return (
        <div className={style.test}>
            <span>
                SuperInputText
            </span>
            <div>
                <TestSuperInput/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperButton
            </span>
            <div>
                <TestSuperButton/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperRadio
            </span>
            <div>
                <TestSuperRadio/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperEditableSpan
            </span>
            <div>
                <TestSuperEditableSpan/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperSelect
            </span>
            <div>
                <TestSuperSelect/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperCheckbox
            </span>
            <div>
                <TestSuperCheckbox/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                SuperRange
            </span>
            <div>
                <TestSuperRange/>
            </div>
            {/*----------------------------------------------------*/}
            <hr/>
            <span>
                InputSearch
            </span>
            <div>
                <TestInputSearch/>
            </div>
            <hr/>
            {/*----------------------------------------------------*/}
            <hr/>
        </div>
    );
};

