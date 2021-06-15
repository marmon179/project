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
    close: () => void;
}

export const ModalAddNewPackInput: React.FC<PropsType> = React.memo(props => {

    const {initialValues, onSubmit, show, enableBackground, backgroundOnClick,
        modalOnClick = () => {}, width, height} = props

    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!show) return null
    return (
        <>{enableBackground &&
        <div style={{
            position: 'fixed',
            top: '0px',
            left: '0px',
            width: '100vw',
            height: '100vh',
            background: 'black',
            opacity: 0.35,
            zIndex: 20,
        }}
             onClick={backgroundOnClick}
       />}
            <div
            style={{
                position: 'fixed',
                top,
                left,
                width,
                height,
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'center',
                justifyContent: 'center',

                background: '#F9F9FE',
                zIndex: 21,
            }}
            onClick={modalOnClick}
            >
                <Formik initialValues={initialValues}
                        onSubmit={onSubmit}
                >
                        <div className={s.containerAdd}>
                            <div className={s.modalTitleInner}>
                                <SubTitle title="Add new pack"/>
                            </div>
                            <Form>
                                <div className={s.modalAddInput}>
                                    <label>Name Pack</label>
                                    <InputSearch type="text" name="name"/>
                                </div>
                                <div className={s.btnInner}>
                                    <Button
                                        size={Size.small}
                                        palette={Palette.primary}
                                        title="Save"/>
                                </div>
                            </Form>
                    </div>
                </Formik>
            </div>

        </>
    )
})






