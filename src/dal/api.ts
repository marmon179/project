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

// Types

// Request Types
export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
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

// Response Types
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

/**
 * Logout, Forgot, Set New Password response Type
 * */
type OtherResponseType = {
    info: string

    error: string;
}