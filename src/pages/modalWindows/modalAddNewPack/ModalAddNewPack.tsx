import React from 'react'
import s from './ModalAddNewPack.module.scss';
import SubTitle from '../../../components/common/subTitle/SubTitle';
import {Button, Palette, Size} from '../../../components/common/c2-SuperButton/Button';
import {InputSearch} from '../../../components/common/inputSearch/InputSearch';
import {Form, Formik} from 'formik';
import {initialValuesType} from './ModalAddNewPackContainer';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    show: boolean
    enableBackground?: boolean;
    backgroundOnClick?: () => void;
    modalOnClick?: () => void;
    width: number;
    height: number;
}

export const ModalAddNewPack: React.FC<PropsType> = React.memo(props => {

        const {
            initialValues, onSubmit, show, enableBackground, backgroundOnClick,
            modalOnClick = () => {
            }, width,
            height, children
        } = props

        const top = `calc(50vh - ${height / 2}px)`;
        const left = `calc(50vw - ${width / 2}px)`;

        if (!show) return null
        return (
            <>{enableBackground &&
            <div className={s.modalAdd}
                 onClick={backgroundOnClick}
            />}
                <div
                    className={s.containerAdd}
                    onClick={modalOnClick}
                >
                    {children}
                </div>

            </>

        )
    }
)






