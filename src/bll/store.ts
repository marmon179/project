import {combineReducers, createStore} from 'redux';
import {reducer} from './reducer';


const reducers = combineReducers({
    reducer: reducer
})

export const store = createStore(reducers)


export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store