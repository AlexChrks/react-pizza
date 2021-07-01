import { createStore, combineReducers } from 'redux'
import { pizzaListReducer, sortingModeReducer, cartReducer } from './reducers'

const reducer = combineReducers({pizzaListReducer,sortingModeReducer, cartReducer})
export const store = createStore(reducer);

export type RootState = ReturnType<typeof store.getState>
