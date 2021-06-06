import {AppThunk} from './store';
import {cardPacks, cardsAPI} from '../dal/api';

const initState = {
    search: '',
    cardPacks: [] as cardPacks[],
    cardPacksTotalCount: 1000,
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
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case 'SEARCH/SET_CARD_PACKS':
            return {...state, cardPacks: action.cardPacks}

        default:
            return state
    }
}
//action
export const toGetDateAC = (search: string) => ({type: 'SEARCH/DATE-SEARCH', search} as const)
export const setCardPacks = (cardPacks: cardPacks[]) => ({type: 'SEARCH/SET_CARD_PACKS', cardPacks} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SEARCH/SET_CURRENT_PAGE', currentPage} as const)
export const setTotalUsersCount = (cardPacksTotalCount: number) => ({
    type: 'SEARCH/SET_TOTAL_PACKS_COUNT',
    cardPacksTotalCount
} as const)

//thunks
export const requestPacks = (page: number, pageCount: number): AppThunk => (dispatch) => {
    cardsAPI.fetchCardPacks({page, pageCount})
        .then(((res) => {
            dispatch(setCardPacks(res.data.cardPacks))
            dispatch(setCurrentPage(page))
            dispatch(setTotalUsersCount(res.data.cardPacksTotalCount))
        }))


}
//type
export type InitialStateLoading = typeof initState

export type SearchActionType =
    ReturnType<typeof toGetDateAC> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setCardPacks>

