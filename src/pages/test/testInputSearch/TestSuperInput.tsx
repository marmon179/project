import React from 'react';
import {Form, Formik} from 'formik';
import {SuperInputText} from '../../../components/common/c1-SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import {InputSearch} from '../../../components/common/inputSearch/InputSearch';
import style from './TestInputSearch.module.css'
import {toGetDateAC} from '../../../bll/PacksReducer';

export const TestInputSearch = () => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{packName: ''}}
            onSubmit={(values:any) => {
                alert(JSON.stringify(values))
                dispatch(toGetDateAC(values))
            }}>
            <Form className={style.column}>
                <InputSearch type="text" name="search" placeholder="Search..."/>
            </Form>
        </Formik>

    );
};


