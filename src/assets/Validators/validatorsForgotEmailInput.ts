import * as yup from 'yup';

export let validationSchema = yup.object().shape({
    email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
})