import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './ButtonLarge.module.scss';

export const ButtonLarge: React.FC<DefaultButtonPropsType> = ({className, title, ...restProps}
) => {
    return (
        <button className={s.btnLarge} {...restProps}>{title}</button>
    );
};

export default ButtonLarge;
//types
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
