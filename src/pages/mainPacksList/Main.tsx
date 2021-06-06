import React from 'react';
import s from './Main.module.scss'
import Title from '../../components/common/title/Title';
import SubTitle from '../../components/common/subTitle/SubTitle';
import {Button, Palette, Size} from '../../components/common/c2-SuperButton/Button';
import TableHeader from '../../components/common/tableHeader/TableHeader';
import TableRow from '../../components/common/tableRow/TableRow';
import {Form, Formik} from 'formik';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';
import {initialValuesType} from './MainContainer';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
}

export const PacksList: React.FC<PropsType> = (props) => {

    const {initialValues, onSubmit} = props

    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
        >
            <div className={s.conteiner}>
                <div className={s.packsList}>
                    <aside className={s.aside}>
                        <SubTitle title="Show packs cards"/>
                        <form action="">
                            <input type="radio" name="switchCard"/>
                            <input type="radio" name="switchCard"/>
                        </form>
                        <SubTitle title="Number of cards"/>
                        <input type="range"/>
                    </aside>
                    <main className={s.main}>
                        <Title title="Packs list"/>
                        <div className={s.search}>
                            <Form>
                                <InputSearch type="search" name="search" placeholder="Search..."/>
                            </Form>
                            <Button size={Size.medium} palette={Palette.primary} title="Add new pack"/>
                        </div>
                        <div className={s.tableInner}>
                            <TableHeader title1="Name" title2="Cards" title3="Last Updated" title4="Created by"
                                         title5="Action"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>
                            <TableRow title1="Pack Name" title2="4" title3="18.03.2021" title4="Ivan Ivanov"/>


                        </div>
                    </main>
                </div>
            </div>
        </Formik>
    );
};

