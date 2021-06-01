import {authAPI, ForgotParamsType, SetNewPasswordParamsType} from '../dal/api';
import {AppThunk} from './store';

const initState = {
    toCheckEmailPage: false,
    setMailName: '',
    toLoginPage: false
}

export const passwordRecoveryReducer = (state: InitialStateLoading = initState, action: ForgotActionType): InitialStateLoading => {
    switch (action.type) {
        case 'RECOVERY/CHECK-MAIL-PAGE':
            return {...state, toCheckEmailPage: action.toCheckEmailPage}
        case 'RECOVERY/SET-MAIL-NAME':
            return {...state, setMailName: action.setMailName}
        case 'RECOVERY/LOGIN-PAGE':
            return {...state, toLoginPage: action.toLoginPage}
        default:
            return state
    }
}
//action
const toCheckEmailPageAC = (toCheckEmailPage: boolean) => ({
    type: 'RECOVERY/CHECK-MAIL-PAGE', toCheckEmailPage: toCheckEmailPage
} as const)
const getMailNameAC = (setMailName: string) => ({type: 'RECOVERY/SET-MAIL-NAME', setMailName: setMailName} as const)
const toLoginPageAC = (toLoginPage: boolean) => ({type: 'RECOVERY/LOGIN-PAGE', toLoginPage} as const)
//thunks
export const setMailTC = (data: ForgotParamsType): AppThunk => (dispatch) => {
    authAPI.recovery(data)
        .then(res => {
            dispatch(toCheckEmailPageAC(true))
            dispatch(getMailNameAC(data.email))
            console.log(res.data.info)
        })
        .catch(rej => {
            console.log(rej.response.data.error)
        })
}
export const setNewPasswordTC = (data: SetNewPasswordParamsType): AppThunk => (dispatch) => {
    authAPI.setNewPassword(data)
        .then(res => {
            dispatch(toLoginPageAC(true))
            console.log(res.data.info)
        })
        .catch(rej => {
            console.log(rej.response.data.error)
        })
}
//type
export type InitialStateLoading = typeof initState
export type setMailActionType = ReturnType<typeof toCheckEmailPageAC>
export type mailActionType = ReturnType<typeof getMailNameAC>
export type toLoginPageActionType = ReturnType<typeof toLoginPageAC>
export type ForgotActionType = setMailActionType | mailActionType | toLoginPageActionType
