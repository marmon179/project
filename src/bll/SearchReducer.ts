import {AppThunk} from './store';

const initState = {
    search: '',
    totalItemsCount: 1000,
    pageSize: 10,
    currentPage: 1

}

export const SearchReducer = (state: InitialStateLoading = initState, action: SearchActionType): InitialStateLoading => {
    switch (action.type) {
        case 'SEARCH/DATE-SEARCH':
            return {...state, search: action.search}
        case 'SEARCH/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SEARCH/SET_TOTAL_PACKS_COUNT':
            return {...state, totalItemsCount: action.totalItemsCount}
        default:
            return state
    }
}
//action
export const toGetDateAC = (search: string) => ({type: 'SEARCH/DATE-SEARCH', search} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SEARCH/SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (totalItemsCount: number) => ({type: 'SEARCH/SET_TOTAL_PACKS_COUNT', totalItemsCount} as const)

//thunks
export const requestPacks = (page: number, pageSize: number) :AppThunk=>  (dispatch) => {
    dispatch(setCurrentPage(page))
    // dispatch(setTotalUsersCount(50))
}
//type
export type InitialStateLoading = typeof initState

export type SearchActionType =
    ReturnType<typeof toGetDateAC> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount>
