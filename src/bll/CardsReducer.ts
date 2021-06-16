import {cardsAPI, cardsPack, CardType, CreateCards, CreateCart, FetchCardsConfig} from '../dal/api'
import {AppThunk} from './store';
import {fetchPacks} from './PacksReducer';

const initState = {
    cards: [] as CardType[],
    page: 1,
    cardsTotalCount: 2

}

export const CardsReducer = (state: InitialStateCards = initState, action: CardsActionType): InitialStateCards => {
    switch (action.type) {
        case 'CARDS/SET_CARDS':
            return {...state, cards: action.cards}
        case 'CARDS/SET_CURRENT_PAGE_CARDS':
            return {...state, page: action.page}

        default:
            return state
    }
}
//action
export const setCards = (cards: CardType[]) => ({type: 'CARDS/SET_CARDS', cards} as const)
export const setCurrentPageCards = (page: number) => ({type: 'CARDS/SET_CURRENT_PAGE_CARDS', page} as const)
export const setTotalPageCountCards = (cardsTotalCount: number) => ({
    type: 'CARDS/SET_TOTAL_PAGE_CARDS',
    cardsTotalCount
} as const)


//thunks
export const fetchCards = (config?: Partial<FetchCardsConfig>): AppThunk =>
    async dispatch => {
        const res = await cardsAPI.fetchCards(config)

        dispatch(setCards(res.data.cards))
        dispatch(setCurrentPageCards(res.data.page))
        dispatch(setTotalPageCountCards(res.data.cardsTotalCount))
    }
export const addCard = (data: CreateCart): AppThunk => async dispatch => {
    await cardsAPI.createCard({card: data})
}
//type
export type InitialStateCards = typeof initState

export type CardsActionType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof setCurrentPageCards>
    | ReturnType<typeof setTotalPageCountCards>




