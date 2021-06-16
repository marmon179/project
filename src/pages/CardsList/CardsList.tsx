import React from 'react';
import {Form, Formik} from 'formik';
import s from './CardsList.module.scss';
import Title from '../../components/common/title/Title';
import {initialValuesType} from './CardsListContainer';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';
import {CardsContainer} from './Cards/CardsContainer';
import {AddNewPack} from './addNewCard/AddNewCard';
import {Paginator} from '../../components/common/Paginator/Paginator';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    title: string
    back: () => void
    onPageChanged: (pageNumber: number) => void
    cardPacksTotalCount: number
    pageSize: number
    currentPage: number
}

export const CardsList: React.FC<PropsType> = props => {

    const {initialValues, onSubmit, title, back,onPageChanged,cardPacksTotalCount,pageSize,currentPage} = props

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
                <div className={s.wrapperPaginator}>
                    <Paginator
                        cardPacksTotalCount={cardPacksTotalCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}/>
                </div>
            </div>

        </Formik>
    );
};

