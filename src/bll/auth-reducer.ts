import {authAPI, LoginParamsType} from '../dal/api';
import {Dispatch} from 'redux';
import {SetUserActionType} from './app-reducer';

const initState = {
    isLoggedIn: false,
    isInitialized: false
}

export const authReducer = (state: InitialStateLoading = initState, action: AuthReducerActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/INITIALIZE-APP':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLoggedIn: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN', isLoggedIn
} as const)
export const setInitializeAppAC = (isInitialized: boolean) => ({type: 'APP/INITIALIZE-APP', isInitialized} as const)

export const setIsLoggedTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then((res: any) => {
            dispatch(setIsLoggedAC(true))
        })
        .catch((rej: any) => {
            // rej.error
        })
}

//type
export type InitialStateLoading = typeof initState
export type setInitializeAppActionType = ReturnType<typeof setInitializeAppAC>
export type setIsLoggedActionType = ReturnType<typeof setIsLoggedAC>
export type AuthReducerActionType = SetUserActionType | setInitializeAppActionType | setIsLoggedActionType
