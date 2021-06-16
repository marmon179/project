import {DEV_VERSION} from '../config';
import axios from 'axios';


export const baseURL = DEV_VERSION
    ? 'http://localhost:7542/2.0/'
    : 'https://neko-back.herokuapp.com/2.0/'

export const instance = axios.create({
    baseURL,
    withCredentials: true,
})

export const authAPI = {
    /**
     * Check user Data and cookies
     * */
    me() {
        return instance.post<AuthMeResponseType>('auth/me')
    },

    /**
     * Logout. Change token from server and remove cookies
     * */
    logout() {
        return instance.delete<OtherResponseType>('auth/me')
    },

    /**
     * Update user Data
     * data {
     *     name: string
     *     avatar: "https//avatar-url.img" // url or base64
     * }
     * */
    updateUser(data: UpdateUserParamsType) {
        return instance.put<UpdateUserDataType>('auth/me', data)
    },

    /**
     * Login request instance
     * data {
     *     email: string
     *     password: string
     *     rememberMe: boolean
     * }
     * */
    login(data: LoginParamsType) {
        return instance.post<AuthMeResponseType>('auth/login', data)
    },

    /**
     * Registration user request instance
     * data {
     *     email: string
     *     password: string
     * }
     * */
    register(data: RegistrationParamsType) {
        return instance.post<RegistrationResponseType>('auth/register', data)
    },

    /**
     * Registration user request instance
     * data {
     *     email: string
     *     from: string // Email subject
     *     message: `<div style="background-color: lime; padding: 15px">
	        password recovery link:
	        <a href='http://localhost:3000/#/set-new-password/$token$'>
	        link</a></div>`
     * }
     * */
    recovery(data: ForgotParamsType) {
        return instance.post<OtherResponseType>('auth/forgot', data)
    },

    /**
     * Registration user request instance
     * data {
     *     password: string
     *     resetPasswordToken: "some-token-from-url"
     * }
     * */
    setNewPassword(data: SetNewPasswordParamsType) {
        return instance.post<OtherResponseType>('auth/set-new-password', data)
    },
}

// Types authAPI
/** Request Types */
export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
}
export type RegistrationParamsType = {
    email: string
    password: string
}
export type UpdateUserParamsType = {
    name: string
    avatar: string
}
export type ForgotParamsType = {
    email: string
    from: string
    message: string
}
export type SetNewPasswordParamsType = {
    password: string
    resetPasswordToken: string
}

/** Response Types */
export type AuthMeResponseType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error?: string;
}
type RegistrationResponseType = {
    addedUser: {}
    /**
     * не важные данные, просто для проверки
     * чтобы посмотреть как выглядит созданный юзер
     */

    error?: string;
}
type UpdateUserDataType = {
    updatedUser: AuthMeResponseType
    /**
     * весь юзер с изменёнными данными
     * */

    error?: string
}

/** Logout, Forgot, Set New Password response Type */
type OtherResponseType = {
    info: string

    error: string;
}


export const cardsAPI = {
    /**
     * Get Cards Packs
     * data {
     *      ?packName=english // не обязательно
     *      &min=3 // не обязательно
     *      &max=9 // не обязательно
     *      &sortPacks=0updated // не обязательно
     *      &page=1 // не обязательно
     *      &pageCount=4 // не обязательно
     *      &user_id=5eb543f6bea3ad21480f1ee7 // чьи колоды
     *      // не обязательно, или прийдут все
     * }
     * */
    fetchCardPacks(config?: Partial<ConfigureFetchCardPacks>) {
        return instance.get<FetchCardPacksType>('cards/pack', {params: config})
    },
    /**
     * Create Cards Packs
     * cardsPack: {
     *      name: "no Name" // если не отправить будет таким
     *      path: "/def" // если не отправить будет такой
     *      grade: 0 // не обязателен
     *      shots: 0 // не обязателен
     *      rating: 0 // не обязателен
     *      deckCover: "url or base64" // не обязателен
     *      private: false // если не отправить будет такой
     *      type: "pack" // если не отправить будет таким
     * }
     * */
    createCardPacks(data: Partial<CreateCardPacks>) {
        return instance.post('cards/pack', data)
    },
    /**
     * Delete Cards Packs
     * data: ?id=5eb6cb9a7a82672138e0d7c1
     * */
    deleteCardPacks(id: string) {
        return instance.delete('cards/pack', {params: {id}})
    },
    /**
     * Update Cards Packs
     * cardsPack: {
     *      _id: "5eb6a2f72f849402d46c6ac7"
     *      name: "new name" // не обязательно
     *      ... // не обязательно
     * }
     * */
    updateCardPacks(data: UpdateCardPacks) {
        return instance.put('cards/pack', data)
    },

    /**
     * Fetch Cards
     *        ?cardAnswer=english // не обязательно
     *        &cardQuestion=english // не обязательно
     *        &cardsPack_id=5eb6a2f72f849402d46c6ac7
     *        &min=1 // не обязательно
     *        &max=4 // не обязательно
     *        &sortCards=0grade // не обязательно
     *        &page=1 // не обязательно
     *        &pageCount=7 // не обязательно
     * */
    fetchCards(config?: Partial<FetchCardsConfig>) {
        return instance.get<FetchCardType>('cards/card', {params: config})
    },
    /**
     * Create Card
     *  card: {
     *       cardsPack_id: "5eb543f6bea3ad21480f1ee7"
     *       question: "no question" // если не отправить будет таким
     *       answer: "no answer" // если не отправить будет таким
     *       grade: 0 // 0..5, не обязателен
     *       shots: 0 // не обязателен
     *       rating: 0 // не обязателен
     *       answerImg: "url or base 64" // не обязателен
     *       questionImg: "url or base 64" // не обязателен
     *       questionVideo: "url or base 64" // не обязателен
     *       answerVideo: "url or base 64" // не обязателен
     *       type: "card" // если не отправить будет таким
     *       }
     * */
    createCard(data: CreateCards) {
        return instance.post('cards/card', data)
    },
    /**
     * Update Card
     *  ?id=5eb6cb9a7a82672138e0d7c1
     * */
    deleteCard(id: string) {
        return instance.delete('cards/card', {params: {id}})
    },
    /**
     * Create Card
     *  card: {
     *      _id: "5eb6a2f72f849402d46c6ac7"
     *      question: "new question" // не обязательно
     *      ... // не обязательно
     *      comments: "new comments" // не обязателен
     *
     *      }
     * */
    updateCard(data: UpdateCards) {
        return instance.put('cards/card', data)
    },
}


// Types cardsAPI
/** Request Types */

export interface ConfigureFetchCardPacks {
    packName: string // не обязательно
    min: number // не обязательно
    max: number // не обязательно
    sortPacks: string // не обязательно
    page: number // не обязательно
    pageCount: number // не обязательно
}

interface CreateCardPacks {
    cardsPack: cardsPack
}

export interface cardsPack {
    name: string // если не отправить будет таким
    path: string // если не отправить будет такой
    grade: number // не обязателен
    shots: number // не обязателен
    rating: number // не обязателен
    deckCover: string // не обязателен
    private: boolean // если не отправить будет такой
    type: string // если не отправить будет таким
}

interface UpdateCardPacks {
    cardsPack: UpdateCardsPack
}

export interface UpdateCardsPack {
    _id: string
    name?: string
}

export interface FetchCardsConfig {
    cardAnswer?: string
    cardQuestion?: string
    cardsPack_id: string
    min?: number
    max?: number
    sortCards?: number
    page?: number
    pageCount?: number
}

export interface CreateCards {
    card: CreateCart
}

export interface CreateCart {
    cardsPack_id: string
    question?: string // если не отправить будет таким
    answer?: string // если не отправить будет таким
    grade?: number // 0..5, не обязателен
    shots?: number // не обязателен
    rating?: number // не обязателен
    answerImg?: string // не обязателен
    questionImg?: string // не обязателен
    questionVideo?: string // не обязателен
    answerVideo?: string // не обязателен
    type?: string // если не отправить будет таким
}
interface UpdateCards {
    card: {
        _id: string
        question?: string // не обязательно
        comments?: string // не обязателен

    }
}

/** Response Types */

interface FetchCardPacksType {
    cardPacks: CardPacks []
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}

export interface CardType {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    shots: number
    user_id: string
    created: string
    updated: string
    _id: string
}

interface FetchCardType {
    cards: CardType[]
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}

export interface CardPacks {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}
