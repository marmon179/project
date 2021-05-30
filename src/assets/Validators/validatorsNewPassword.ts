import {FormikPasswordErrorType, initialValuesType} from '../../pages/ForgorNewPassword/ForgorNewPasswordContainer';

export const validators = (values: initialValuesType) => {
    const errors: FormikPasswordErrorType = {}
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 2 characters long';
    }
    return errors;
}