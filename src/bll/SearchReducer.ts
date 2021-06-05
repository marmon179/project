import {authAPI, ForgotParamsType, SetNewPasswordParamsType} from '../dal/api';

const initState = {
    search: '',

}

export const SearchReducer = (state: InitialStateLoading = initState, action: SearchActionType): InitialStateLoading => {
    switch (action.type) {
        case 'SEARCH/DATE-SEARCH':
            return {...state,search: action.search}
        default:
            return state
    }
}
//action
export const toGetDateAC = (search: string) => ({type: 'SEARCH/DATE-SEARCH', search} as const)


//type
export type InitialStateLoading = typeof initState
export type toGetDateActionType = ReturnType<typeof toGetDateAC>

export type SearchActionType = toGetDateActionType