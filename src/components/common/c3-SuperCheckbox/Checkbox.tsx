import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'
import {FieldConfig, useField} from 'formik';

export const Checkbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange,
        className,
        children,
        title,
        ...restProps
    }
) => {

    const [field, meta] = useField({...restProps, type: 'checkbox'});
    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label style={{position: 'relative'}}>
            <input
                type={'checkbox'}
                className={finalInputClassName}
                {...field}
                {...restProps}
            />
            {children && <span className={s.spanClassName}>{children}</span>}
            {children ? title : children}

            <div style={{color: 'red', position: 'absolute', top: '30px'}}>
                {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
            </div>
        </label>
    )
}
//types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperCheckboxPropsType = DefaultInputPropsType & FieldConfig
