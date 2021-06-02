import * as yup from 'yup';


export let validationSchema = yup.object().shape({
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
})