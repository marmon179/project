import React from 'react';
import {Form, Formik} from 'formik';
import {SuperInputText} from '../../../components/common/c1-SuperInputText/SuperInputText';
import {InputSearch} from '../../../components/common/inputSearch/InputSearch';
import style from './TestInputSearch.module.css'

export const TestInputSearch = () => {
    return (
        <Formik
            initialValues={{
                search: ''
            }}
            onSubmit={(values) => {
                alert(JSON.stringify(values))
            }}>
            <Form className={style.column}>
                <InputSearch type="text" name="search" placeholder="Search..."/>
            </Form>

        </Formik>

    );
};

