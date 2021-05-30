import {authAPI, ForgotParamsType, LoginParamsType} from '../dal/api';
import {SetUserActionType} from './app-reducer';
import {AppThunk} from './store';

const initState = {
    isLoggedIn: false,
    isInitialized: false,
    isMail: false,
    mail: ''
}

export const authReducer = (state: InitialStateLoading = initState, action: AuthActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/INITIALIZE-APP':
            return {...state, isInitialized: action.isInitialized}
        case 'AUTH/IS-MAIL':
            return {...state, isMail: action.isMail}
        case 'AUTH/MAIL-NAME':
            return {...state, mail: action.mail}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setInitializeAppAC = (isInitialized: boolean) => ({type: 'APP/INITIALIZE-APP', isInitialized} as const)
export const setMailAC = (isMail: boolean) => ({type: 'AUTH/IS-MAIL', isMail} as const)
export const mailAC = (mail: string) => ({type: 'AUTH/MAIL-NAME', mail} as const)
//thunks
export const setIsLoggedTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedAC(true))
        })
}
export const setMailTC = (data: ForgotParamsType): AppThunk => (dispatch) => {
    authAPI.forgot(data)
        .then(res => {
            dispatch(setMailAC(true))
            dispatch(mailAC(data.email))
        })
        .catch(rej => {

        })
}
//type
export type InitialStateLoading = typeof initState
export type setInitializeAppActionType = ReturnType<typeof setInitializeAppAC>
export type setIsLoggedActionType = ReturnType<typeof setIsLoggedAC>
export type setMailActionType = ReturnType<typeof setMailAC>
export type mailActionType = ReturnType<typeof mailAC>
export type AuthActionType =
    SetUserActionType
    | setInitializeAppActionType
    | setIsLoggedActionType
    | setMailActionType
    | mailActionType
