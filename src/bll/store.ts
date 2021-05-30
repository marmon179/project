import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {appReducer} from './app-reducer';


const reducers = combineReducers({
    auth: authReducer,
    app:appReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store