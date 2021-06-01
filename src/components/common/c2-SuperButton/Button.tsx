import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './Button.module.scss'

export const Button: React.FC<SuperButtonPropsType> = (
    {
        size = 0,
        variant = 0,
        title,
        className,
        ...restProps
    }
) => {
    const sizeClassName = size === 0 ? s.small : size === 1 ? s.medium : s.big
    const variantClassName = variant === 0 ? s.default : variant === 1 ? s.primary : s.secondary
    const finalClassName = `${s.btn} ${sizeClassName} ${variantClassName}  ${className} `

    return (
        <button
            className={finalClassName}
            {...restProps}
        >
            {title ? title : restProps.children}
        </button>
    )
}
//types
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type SuperButtonPropsType = DefaultButtonPropsType & {
    size?: Size
    variant?: Variant
}

export enum Size {
    small,
    medium,
    big
}
export enum Variant {
    default,
    primary,
    secondary
}