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
}

export const ModalAddNewPack: React.FC<PropsType> = React.memo(props => {

    const {initialValues, onSubmit} = props
    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
        >
            <div className={s.modalAdd}>
                <div className={s.containerAdd}>
                    <div className={s.modalTitleInner}>
                        <SubTitle title="Add new pack"/>
                        <span>X</span>
                    </div>
                    <Form>
                        <div className={s.modalAddInput}>
                            <label>Name Pack</label>
                            <InputSearch type="text" name="name"/>
                        </div>
                        <div className={s.btnInner}>
                            <Button size={Size.small} title="Cancel"/>
                            <Button size={Size.small} palette={Palette.primary} title="Save"/>
                        </div>
                    </Form>
                </div>

            </div>
        </Formik>
    )
})






