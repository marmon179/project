import {authAPI, LoginParamsType} from "../dal/api";
import {Dispatch} from "redux";

const initState = {
    isLoggedIn: false
}

export const loginReducer = (state: InitialStateLoading = initState, action: ActionType): InitialStateLoading => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

export const setIsLoggedAC = (isLogged: boolean) => ({
    type: 'login/SET-IS-LOGGED-IN', isLogged
})

export const setIsLoggedTC = (data: LoginParamsType) => (dispatch: Dispatch) => {
    authAPI.login(data)
        .then(res => {
            dispatch(setIsLoggedAC(true))
        })
        .catch(rej => {
            // rej.error
        })
}

//type
export type InitialStateLoading = typeof initState
type ActionType = any
