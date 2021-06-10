import {AppThunk} from './store';
import {CardPacks, cardsAPI, cardsPack, ConfigureFetchCardPacks, UpdateCardsPack} from '../dal/api';

const initState = {
    search: '',
    packName: '',
    cardPacks: [] as CardPacks[],
    cardPacksTotalCount: 1000,
    pageSize: 9,
    currentPage: 1,
    modalWindow: false,
    _id: ''


}

export const SearchReducer = (state: InitialStateLoading = initState, action: SearchActionType): InitialStateLoading => {
    switch (action.type) {
        case 'SEARCH/DATE-SEARCH':
            return {...state, packName: action.packName}
        case 'SEARCH/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SEARCH/SET_TOTAL_PACKS_COUNT':
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case 'SEARCH/SET_CARD_PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'SEARCH/ADD_ID':
            return {...state, _id: action.id}
        case 'SEARCH/OPEN_MODAL_WINDOW':
            return {...state, modalWindow: action.modalWindow}

        default:
            return state
    }
}
//action
export const toGetDateAC = (packName: string) => ({type: 'SEARCH/DATE-SEARCH', packName} as const)
export const setCardPacks = (cardPacks: CardPacks[]) => ({type: 'SEARCH/SET_CARD_PACKS', cardPacks} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SEARCH/SET_CURRENT_PAGE', currentPage} as const)
export const addId = (id: string) => ({type: 'SEARCH/ADD_ID', id} as const)
export const openModalWindow = (modalWindow: boolean) => ({type: 'SEARCH/OPEN_MODAL_WINDOW', modalWindow} as const)
export const setTotalPacksCount = (cardPacksTotalCount: number) => ({
    type: 'SEARCH/SET_TOTAL_PACKS_COUNT',
    cardPacksTotalCount
} as const)

//thunks
export const fetchPacks = (config?: Partial<ConfigureFetchCardPacks>): AppThunk => async dispatch => {
    const res = await cardsAPI.fetchCardPacks(config)

    dispatch(setCardPacks(res.data.cardPacks))
    dispatch(setTotalPacksCount(res.data.cardPacksTotalCount))

}

export const requestPacks = (page: number, pageCount: number): AppThunk => (dispatch) => {
    cardsAPI.fetchCardPacks({page, pageCount})
        .then(((res) => {
            dispatch(setCardPacks(res.data.cardPacks))
            dispatch(setCurrentPage(page))
            dispatch(setTotalPacksCount(res.data.cardPacksTotalCount))
        }))
}
export const removePack = (id: string): AppThunk => async dispatch => {
    await cardsAPI.deleteCardPacks(id)
    dispatch(fetchPacks())
}

export const searchPacks = (packName: string): AppThunk => (dispatch) => {
    cardsAPI.fetchCardPacks({packName})
        .then(((res) => {
            dispatch(setCardPacks(res.data.cardPacks))
        }))
}
export const addCardsPacks = (date: cardsPack): AppThunk => (dispatch) => {
    cardsAPI.createCardPacks({cardsPack: date})
        .then(((res) => {
        }))
}
export const editPack = (date: UpdateCardsPack): AppThunk => async dispatch => {
    await cardsAPI.updateCardPacks({cardsPack: date})
    dispatch(fetchPacks())
}
//type
export type InitialStateLoading = typeof initState

export type SearchActionType =
    | ReturnType<typeof toGetDateAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalPacksCount>
    | ReturnType<typeof setCardPacks>
    | ReturnType<typeof addId>
    | ReturnType<typeof openModalWindow>


