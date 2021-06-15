import React from 'react';
import s from './Main.module.scss'
import Title from '../../components/common/title/Title';
import SubTitle from '../../components/common/subTitle/SubTitle';
import {Button, Palette, Size} from '../../components/common/c2-SuperButton/Button';
import {Form, Formik} from 'formik';
import {InputSearch} from '../../components/common/inputSearch/InputSearch';
import {initialValuesType} from './MainContainer';
import {Paginator} from '../../components/common/Paginator/Paginator';
import {PacksContainer} from '../../components/Packs/PacksContainer';
import {ModalAddNewPackContainer} from '../modalWindows/modalAddNewPack/ModalAddNewPackContainer';

export type PropsType = {
    initialValues: initialValuesType
    onSubmit: (values: initialValuesType) => void
    cardPacksTotalCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    show: boolean
    close: () => void
    backgroundOnClick?: () => void;
    onClickButton: () => void
}

export const PacksList: React.FC<PropsType> = (props) => {

    const {
        initialValues,
        onSubmit,
        cardPacksTotalCount,
        pageSize,
        currentPage,
        onPageChanged,
        show,
        close,
        backgroundOnClick,
        onClickButton
    } = props


    return (
        <Formik initialValues={initialValues}
                onSubmit={onSubmit}
        >
            <div className={s.conteiner}>z
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
                            <Button
                                size={Size.medium}
                                palette={Palette.primary}
                                title="Add new pack"
                                onClick={onClickButton}
                            />
                            <ModalAddNewPackContainer show={show}
                                                      close={close}
                                                      backgroundOnClick={backgroundOnClick}/>

                        </div>
                        <PacksContainer/>
                    </main>

                </div>
                <div className={s.wrapperPaginator}>
                    <Paginator cardPacksTotalCount={cardPacksTotalCount} pageSize={pageSize} currentPage={currentPage}
                               onPageChanged={onPageChanged}/>
                </div>

            </div>
        </Formik>
    );
};

