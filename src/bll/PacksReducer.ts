import {AppThunk} from './store';
import {CardPacks, cardsAPI, cardsPack, ConfigureFetchCardPacks, UpdateCardsPack} from '../dal/api';

const initState = {
    packs: '',
    packName: '',
    cardPacks: [] as CardPacks[],
    cardPacksTotalCount: 1000,
    pageSize: 9,
    currentPage: 1,
    _id: ''


}

export const PacksReducer = (state: InitialStatePacks = initState, action: PacksActionType): InitialStatePacks => {
    switch (action.type) {
        case 'PACKS/DATE-SEARCH':
            return {...state, packName: action.packName}
        case 'PACKS/SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'PACKS/SET_TOTAL_PACKS_COUNT':
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
        case 'PACKS/SET_CARD_PACKS':
            return {...state, cardPacks: action.cardPacks}
        case 'PACKS/ADD_ID':
            return {...state, _id: action.id}
        default:
            return state
    }
}
//action
export const toGetDateAC = (packName: string) => ({type: 'PACKS/DATE-SEARCH', packName} as const)
export const setCardPacks = (cardPacks: CardPacks[]) => ({type: 'PACKS/SET_CARD_PACKS', cardPacks} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'PACKS/SET_CURRENT_PAGE', currentPage} as const)
export const addId = (id: string) => ({type: 'PACKS/ADD_ID', id} as const)
export const setTotalPacksCount = (cardPacksTotalCount: number) => ({
    type: 'PACKS/SET_TOTAL_PACKS_COUNT',
    cardPacksTotalCount
} as const)

//thunks
export const fetchPacks = (config?: Partial<ConfigureFetchCardPacks>): AppThunk => async dispatch => {
    const res = await cardsAPI.fetchCardPacks(config)

    dispatch(setCardPacks(res.data.cardPacks))
    dispatch(setCurrentPage(res.data.page))
    dispatch(setTotalPacksCount(res.data.cardPacksTotalCount))

}
export const addCardsPacks = (date: cardsPack): AppThunk => async dispatch => {
    await cardsAPI.createCardPacks({cardsPack: date})
    dispatch(fetchPacks({page: 1, pageCount: 9}))
}
export const removePack = (id: string): AppThunk => async dispatch => {
    await cardsAPI.deleteCardPacks(id)
    dispatch(fetchPacks({page: 1, pageCount: 9}))
}

export const searchPacks = (packName: string): AppThunk => async dispatch => {
    const res = await cardsAPI.fetchCardPacks({packName})

    dispatch(setCardPacks(res.data.cardPacks))

}

export const editPack = (date: UpdateCardsPack): AppThunk => async dispatch => {
    await cardsAPI.updateCardPacks({cardsPack: date})
    dispatch(fetchPacks({page: 1, pageCount: 9}))
}
//type
export type InitialStatePacks = typeof initState

export type PacksActionType =
    | ReturnType<typeof toGetDateAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalPacksCount>
    | ReturnType<typeof setCardPacks>
    | ReturnType<typeof addId>


