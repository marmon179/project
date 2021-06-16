import React from 'react';
import {Form, Formik} from 'formik';
import s from './CardsList.module.scss';
import Title from '../../components/common/title/Title';
import {initialValuesType} from './CardsListContainer';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';
import {CardsContainer} from './Cards/CardsContainer';
import {AddNewPack} from './addNewCard/AddNewCard';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    title: string
    back: () => void
}

export const CardsList: React.FC<PropsType> = props => {

    const {initialValues, onSubmit, title, back} = props

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}>
            <div className={s.container}>
                <div className={s.cardsList}>
                    <main className={s.main}>
                        <div className={s.wrapper}>
                            <button onClick={back}>Back</button>
                            <Title title={title}/>
                        </div>

                        <div className={s.search}>
                            <Form>
                                <InputSearch type="text" name="packCard" placeholder="Search..."/>
                            </Form>

                            <AddNewPack/>

                        </div>
                        <CardsContainer/>
                    </main>


                </div>
            </div>

        </Formik>
    );
};

