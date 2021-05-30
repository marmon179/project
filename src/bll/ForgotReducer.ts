import {authAPI, ForgotParamsType} from '../dal/api';
import {AppThunk} from './store';

const initState = {
    isMail: false,
    mailName: ''
}

export const forgotReducer = (state: InitialStateLoading = initState, action: ForgotActionType): InitialStateLoading => {
    switch (action.type) {
        case 'FORGOT/IS-MAIL':
            return {...state, isMail: action.isMail}
        case 'FORGOT/MAIL-NAME':
            return {...state, mailName: action.mailName}
        default:
            return state
    }
}
//action
const setMailAC = (isMail: boolean) => ({type: 'FORGOT/IS-MAIL', isMail} as const)
const getMailNameAC = (mailName: string) => ({type: 'FORGOT/MAIL-NAME', mailName} as const)
//thunks
export const setMailTC = (data: ForgotParamsType): AppThunk => (dispatch) => {
    authAPI.forgot(data)
        .then(res => {
            dispatch(setMailAC(true))
            dispatch(getMailNameAC(data.email))
        })
}
//type
export type InitialStateLoading = typeof initState
export type setMailActionType = ReturnType<typeof setMailAC>
export type mailActionType = ReturnType<typeof getMailNameAC>
export type ForgotActionType = setMailActionType | mailActionType
