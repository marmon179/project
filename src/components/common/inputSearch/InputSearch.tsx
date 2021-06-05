import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './InputSearch.module.scss'
import {FieldConfig, useField} from 'formik';


export const InputSearch: React.FC<SuperInputTextPropsType> = ({title, ...props}) => {

    const [field, meta] = useField({...props});
    return (
        <div className={s.group}>
            <input
                {...field}
                className={s.input}
                {...props}
            />
        </div>
    )
}

// Types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & FieldConfig

