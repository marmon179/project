import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './Input.module.css'


export const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress, onEnter,
        error,
        className, spanClassName,
        title,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
    }

    return (

        <div className={s.group}>
            <input
                required
                type={type}
                onChange={onChangeCallback}
                className={s.input}
                {...restProps}
            />
            <span className={s.highlight}/>
            <span className={s.bar}/>
            <label className={s.label}>{title}</label>

            <div style={{color: 'red', position: 'absolute', top: '50px'}}>
                {error}
            </div>
        </div>
    )
}

// Types
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void  // Not used
    onEnter?: () => void // Not used
    error?: string | null // Not used
    spanClassName?: string // Not used
}