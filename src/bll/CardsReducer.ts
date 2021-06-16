import {cardsAPI, CardType, CreateCart, FetchCardsConfig} from '../dal/api'
import {AppThunk} from './store';

const initState = {
    cards: [] as CardType[],
    page: 9,
    cardsTotalCount: 100,
    currentPage: 1,

}

export const CardsReducer = (state: InitialStateCards = initState, action: CardsActionType): InitialStateCards => {
    switch (action.type) {
        case 'CARDS/SET_CARDS':
            return {...state, cards: action.cards}
        case 'CARDS/SET_CURRENT_PAGE_CARDS':
            return {...state, currentPage: action.page}
        case 'CARDS/SET_TOTAL_PAGE_CARDS':
            return {...state,cardsTotalCount: action.cardsTotalCount}

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
    dispatch(fetchCards({cardsPack_id: data.cardsPack_id}))
}
export const removeCard = (id:string,cardsPack_id:string):AppThunk => async dispatch => {
    await cardsAPI.deleteCard(id)
    dispatch(fetchCards({cardsPack_id}))
}
export const editCard = (_id:string,cardsPack_id:string,question:string,comments:string):AppThunk => async dispatch => {
    await cardsAPI.updateCard({card:{_id,question,comments}})
    dispatch(fetchCards({cardsPack_id}))
}
//type
export type InitialStateCards = typeof initState

export type CardsActionType =
    | ReturnType<typeof setCards>
    | ReturnType<typeof setCurrentPageCards>
    | ReturnType<typeof setTotalPageCountCards>




