import {
    FormikPasswordErrorType,
    initialValuesType
} from '../../pages/passwordRecovery/enterNewPassword/NewPasswordContainer';

export const validatorsNewPasswordInput = (values: initialValuesType) => {
    const errors: FormikPasswordErrorType = {}
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 2 characters long';
    }
    return errors;
}