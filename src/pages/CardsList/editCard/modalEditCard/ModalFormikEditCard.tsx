import React from 'react';
import {Form, Formik} from 'formik';
import s from './../modalEditCard/ModalEditCard.module.scss';
import SubTitle from '../../../../components/common/subTitle/SubTitle';
import {InputSearch} from '../../../../components/common/inputSearch/InputSearch';
import {Button, Palette, Size} from '../../../../components/common/c2-SuperButton/Button';
import {initialValuesType} from './ModalEditCardContainer';

type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    title: string
    close: () => void;

}

export const ModalFormikEditCard: React.FC<PropsType> = props => {

    const {initialValues, onSubmit, title,close} = props

    return (
        <div>
            <Formik initialValues={initialValues}
                    onSubmit={onSubmit}
            >

                <div className={s.containerAdd}>
                    <div className={s.modalTitleInner}>
                        <SubTitle title={title}/>
                    </div>
                    <Form>
                        <div className={s.modalAddInput}>
                            <label>Name Question</label>
                            <InputSearch type="text" name="question" placeholder="question"/>
                            <label>Name Answer</label>
                            <InputSearch type="text" name="answer" placeholder="answer"/>
                        </div>
                        <div className={s.btnInner}>
                            <Button
                                size={Size.small}
                                palette={Palette.default}
                                onClick={close}
                                title="Close"/>

                            <Button
                                size={Size.small}
                                palette={Palette.primary}
                                title="Save"/>
                        </div>
                    </Form>
                </div>
            </Formik>
        </div>
    );
};

