import {authAPI, LoginParamsType} from '../dal/api';
import {SetUserActionType} from './app-reducer';
import {AppThunk} from './store';

const initState = {
    isLoggedIn: false,
    isInitialized: false,
}

export const authReducer = (state: InitialStateLoading = initState, action: AuthActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.isLoggedIn}
        case 'APP/INITIALIZE-APP':
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLoggedIn: boolean) => ({type: 'login/SET-IS-LOGGED-IN', isLoggedIn} as const)
export const setInitializeAppAC = (isInitialized: boolean) => ({type: 'APP/INITIALIZE-APP', isInitialized} as const)
//thunks
export const setIsLoggedTC = (data: LoginParamsType): AppThunk => (dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedAC(true))
        })
}
//type
export type InitialStateLoading = typeof initState
export type setInitializeAppActionType = ReturnType<typeof setInitializeAppAC>
export type setIsLoggedActionType = ReturnType<typeof setIsLoggedAC>
export type AuthActionType =
    SetUserActionType
    | setInitializeAppActionType
    | setIsLoggedActionType

