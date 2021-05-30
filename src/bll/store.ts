import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from './login-reducer';
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
    reducer: loginReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store