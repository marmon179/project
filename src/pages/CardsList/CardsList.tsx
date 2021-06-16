import React from 'react';
import {Form, Formik} from 'formik';
import s from './CardsList.module.scss';
import Title from '../../components/common/title/Title';
import {initialValuesType} from './CardsListContainer';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
}

export const CardsList: React.FC<PropsType> = props => {

    const {initialValues, onSubmit} = props

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            <div className={s.container}>
                <div className={s.cardsList}>
                    <main className={s.main}>

                        <Title title="Pack name"/>

                        <div className={s.search}>
                            <Form>
                                <InputSearch type="text" name="packCard" placeholder="Search..."/>
                            </Form>
                        </div>

                    </main>


                </div>
            </div>

        </Formik>
    );
};

