import {initialValuesType} from '../../pages/Registr/RegistrationContainer';
import {FormikPasswordErrorType} from '../../pages/Forgot/ForgorNewPassword/ForgorNewPasswordContainer';

export const validatorsNewPasswordInput = (values: initialValuesType) => {
    const errors: FormikPasswordErrorType = {}
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length < 8) {
        errors.password = 'Password must be more than 2 characters long';
    }
    return errors;
}