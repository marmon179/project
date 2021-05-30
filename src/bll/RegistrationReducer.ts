import {Dispatch} from 'redux';
import {authAPI, RegistrationParamsType} from '../dal/api';

const initState = {
    isRegistration: true
}

export const registrationReducer = (state: InitialStateLoading = initState, action: ActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/registration': {
            return {...state, isRegistration: action.isRegistration}
        }
        default:
            return state
    }
}

// AC
export const isRegistrationAC = (isRegistration: boolean) => ({
    type: 'login/registration', isRegistration
} as const)

// Thunk
export const isRegistrationTC = (data: RegistrationParamsType) => (dispatch: Dispatch) => {
    authAPI.register(data)
        .then(() => {
            dispatch(isRegistrationAC(true))
        })
}

//type
export type InitialStateLoading = typeof initState
type ActionType = ReturnType<typeof isRegistrationAC>
