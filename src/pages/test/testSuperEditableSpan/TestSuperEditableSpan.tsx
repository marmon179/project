import React, {useState} from 'react';
import style from './TestSuperEditableSpan.module.css'
import {restoreState, saveState} from './localStorage/localStorage';
import {SuperEditableSpan} from '../../../components/common/c4-SuperEditableSpan/SuperEditableSpan';
import {SuperButton} from '../../../components/common/c2-SuperButton/SuperButton';

export const TestSuperEditableSpan = () => {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState<string>('editable-span-value', ''))
    }

    return (
        <div className={style.column}>
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={style.button}><SuperButton onClick={save}>save</SuperButton>
                <SuperButton onClick={restore} red>restore</SuperButton></div>
        </div>
    );
};

