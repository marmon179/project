import {initialValuesType} from '../../pages/Registr/RegistrationContainer';
import {FormikErrorType} from './validators';

export const validatorsForgotEmailInput = (values: initialValuesType) => {
    const errors: FormikErrorType = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    return errors;
}