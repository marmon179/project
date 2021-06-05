import React from 'react';
import {Form, Formik} from 'formik';
import {SuperInputText} from '../../../components/common/c1-SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import {InputSearch} from '../../../components/common/inputSearch/InputSearch';
import style from './TestInputSearch.module.css'
import {toGetDateAC} from '../../../bll/SearchReducer';

export const TestInputSearch = () => {
    const dispatch = useDispatch()
    return (
        <Formik
            initialValues={{search: ''}}
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


