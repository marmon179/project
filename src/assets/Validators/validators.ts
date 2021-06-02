import * as yup from 'yup';

export type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
    resetPasswordToken?: string
}

export const validators = (values: FormikErrorType) => {
    const errors: FormikErrorType = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 8 characters long';
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = 'Required'
    } else if (values.confirmPassword.length < 8) {
        errors.confirmPassword = 'Password must be more than 8 characters long';
    }
    return errors;
}

export let validationSchema = yup.object().shape({
    email: yup.string()
        .email('Email is invalid')
        .required('Email is required'),
    password: yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    acceptTerms: yup.bool()
        .oneOf([true], 'Accept Ts & Cs is required')
})




