import {AuthMeResponseType} from '../dal/api';
import {setInitializeAppActionType} from './auth-reducer';

const initState = {
    meObject: {} as AuthMeResponseType,
}

export const appReducer = (state: InitialStateLoading = initState, action: AppReducerActionType): InitialStateLoading => {
    switch (action.type) {
        case 'APP/USER-DATA':
            return {...state, meObject: action.userData}
        default:
            return state
    }
}

export const setUserDataAC = (userData: AuthMeResponseType) => ({
    type: 'APP/USER-DATA', userData
} as const)
//thunks
// export const setUserDataTC = (): AppThunk => (dispatch) => {
//     authAPI.me()
//         .then((res: AxiosResponse<AuthMeResponseType>) => {
//             dispatch(setUserDataAC(res.data))
//             dispatch(setIsLoggedAC(true))
//         })
//         .catch((error: AxiosError) => {
//             console.log('Error', error)
//         })
// }

//type
export type InitialStateLoading = typeof initState
export type SetUserActionType = ReturnType<typeof setUserDataAC>
export type AppReducerActionType = SetUserActionType | setInitializeAppActionType
