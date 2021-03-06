import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {appReducer, AppReducerActionType} from './app-reducer';
import {ForgotActionType, passwordRecoveryReducer} from './PasswordRecoveryReducer';
import {PacksActionType, PacksReducer } from './PacksReducer';
import {CardsActionType, CardsReducer} from './CardsReducer';


const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    recovery: passwordRecoveryReducer,
    packs:PacksReducer,
    cards:CardsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStateType = ReturnType<typeof reducers>
export type AppActionType = AuthActionType | AppReducerActionType | ForgotActionType | PacksActionType | CardsActionType
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store