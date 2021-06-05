import {authAPI, ForgotParamsType, SetNewPasswordParamsType} from '../dal/api';
import {AppThunk} from './store';

const initState = {
    search: '',

}

export const passwordRecoveryReducer = (state: InitialStateLoading = initState, action: ForgotActionType): InitialStateLoading => {
    switch (action.type) {
        case 'SEARCH/DATE-SEARCH':

        default:
            return state
    }
}
//action
const toCheckEmailPageAC = (toCheckEmailPage: boolean) => ({
    type: 'SEARCH/DATE-SEARCH', toCheckEmailPage: toCheckEmailPage
} as const)


//type
export type InitialStateLoading = typeof initState
export type setMailActionType = ReturnType<typeof toCheckEmailPageAC>

export type ForgotActionType = setMailActionType