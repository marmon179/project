import React from 'react';
import s from './PackList.module.scss'
import Title from '../../components/common/title/Title';
import SubTitle from '../../components/common/subTitle/SubTitle';
import {Form, Formik} from 'formik';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';
import {initialValuesType} from './PacksListContainer';
import {Paginator} from '../../components/common/Paginator/Paginator';
import {PacksContainer} from './Packs/PacksContainer';
import {AddNewPack} from './addNewPack/AddNewPack';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    cardPacksTotalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const PacksList: React.FC<PropsType> = props => {

    const {
        initialValues,
        onSubmit,
        cardPacksTotalCount,
        pageSize,
        currentPage,
        onPageChanged,
    } = props


    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
        >
            <div className={s.container}>z
                <div className={s.packsList}>
                    <aside className={s.aside}>
                        <SubTitle title="Show packs cards"/>
                        <form action="">
                            <input type="radio" name="switchCard"/>
                            <input type="radio" name="switchCard"/>
                        </form>
                        <SubTitle title="Number of cards"/>
                        Ползунок туда сюда
                    </aside>
                    <main className={s.main}>

                        <Title title="Packs list"/>

                        <div className={s.search}>
                            <Form>
                                <InputSearch type="text" name="packName" placeholder="Search..."/>
                            </Form>

                            <AddNewPack/>

                        </div>
                        <PacksContainer/>
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

