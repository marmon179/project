import {applyMiddleware, combineReducers, createStore} from 'redux';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {appReducer, AppReducerActionType} from './app-reducer';
import {ForgotActionType, passwordRecoveryReducer} from './PasswordRecoveryReducer';
import {SearchActionType, SearchReducer } from './SearchReducer';


const reducers = combineReducers({
    auth: authReducer,
    app: appReducer,
    recovery: passwordRecoveryReducer,
    search:SearchReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStateType = ReturnType<typeof reducers>
export type AppActionType = AuthActionType | AppReducerActionType | ForgotActionType | SearchActionType
export type AppThunk = ThunkAction<void, AppStateType, unknown, AppActionType>

//@ts-ignore
window.store = store