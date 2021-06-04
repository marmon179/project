import {authAPI, AuthMeResponseType, LoginParamsType} from '../dal/api';
import {SetUserActionType, setUserDataAC} from './app-reducer';
import {AppThunk} from './store';
import {AxiosError, AxiosResponse} from 'axios';

const initState = {
    isLoggedIn: false,
    isInitialized: false,
    error: '' as string | null
}

export const authReducer = (state: InitialStateLoading = initState, action: AuthActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/INITIALIZE-APP':
            return {...state, isInitialized: action.isInitialized}
        case 'APP/SET_AUTH_ERROR':
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setInitializeAppAC = (isInitialized: boolean) => ({type: 'APP/INITIALIZE-APP', isInitialized} as const)
export const setAuthError = (error: string | null) => ({type: 'APP/SET_AUTH_ERROR', error} as const)

// Thunks
export const setIsLoggedTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedAC(true))
        })
}
export const logoutTC = (): AppThunk => (dispatch) => {
    authAPI.logout()
        .then(res => {
            dispatch(setIsLoggedAC(false))
        })
}
export const initializeTC = (): AppThunk => (dispatch) => {
    authAPI.me()
        .then((res: AxiosResponse<AuthMeResponseType>) => {
            dispatch(setInitializeAppAC(true))
            dispatch(setIsLoggedAC(true))
            dispatch(setUserDataAC(res.data))
            if (res.data.error) {
                setAuthError(res.data.error)
            } else {
                setAuthError(null)
            }
        })
        .catch((error: AxiosError<{ error: string }>) => {
            dispatch(setInitializeAppAC(true))
            if (error.response) {
                setAuthError(error.response.data.error)
            } else {
                setAuthError(null)
            }
        })
}
//type
export type InitialStateLoading = typeof initState
export type setInitializeAppActionType = ReturnType<typeof setInitializeAppAC>
export type setIsLoggedActionType = ReturnType<typeof setIsLoggedAC>
export type setAuthErrorActionType = ReturnType<typeof setAuthError>
export type AuthActionType =
    | SetUserActionType
    | setInitializeAppActionType
    | setIsLoggedActionType
    | setAuthErrorActionType

