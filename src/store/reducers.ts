
import { pizzaDescription } from '../constants/pizzaDescription';
import { cartPizzaStateInterface, IpizzaDescription, cartReducerActionsTypes } from '../interfaces/interfaces';
import { filterTypes, changeSortingModeActionType } from '../interfaces/interfaces';
import { 
  FILTER_ALL_PIZZA, 
  FILTER_MEAT_PIZZA, 
  FILTER_VEGETARIAN_PIZZA, 
  FILTER_SPICY_PIZZA, 
  SORT_BY_PRICE,
  SORT_BY_POPULARITY,
  SORT_BY_ALPHABET,
  CHANGE_SORTING_MODE,
  CLEAR_CART,
  ADD_NEW_PIZZA_TO_CART, 
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE
} from '../constants/actionTypes'
import { saveCartStoreToLocalStorage } from '../utils/utils';

const initialPizzaListState = pizzaDescription;

export const pizzaListReducer = (state: IpizzaDescription[] = initialPizzaListState,  action: filterTypes): IpizzaDescription[] | [] => {
  switch (action.type) {
    case FILTER_ALL_PIZZA:
      return [
        ...initialPizzaListState
      ]
      case FILTER_MEAT_PIZZA:
        const meatPizza = initialPizzaListState.filter((item: IpizzaDescription) => item.type === 'meat');
        return [
          ...meatPizza
        ]
      case FILTER_VEGETARIAN_PIZZA:
        const vegetarianPizza = initialPizzaListState.filter((item) => item.type === 'vegetarian');
        return [
          ...vegetarianPizza
        ]
      case FILTER_SPICY_PIZZA:
        const specyPizza = initialPizzaListState.filter((item) => item.type === 'spicy');
        return [
          ...specyPizza
        ]
      case SORT_BY_PRICE:
        const sortedByPrice = state.sort((item1: IpizzaDescription, item2: IpizzaDescription) => item1.startPrice > item2.startPrice ? 1 : -1);
        return [
          ...sortedByPrice
        ]   
      case SORT_BY_POPULARITY:
        const sortedByPopularity= state.sort((item1: IpizzaDescription, item2: IpizzaDescription) => item1.rating > item2.rating ? 1 : -1);
        return [
          ...sortedByPopularity
        ]   
      case SORT_BY_ALPHABET:
        const sortedByAlphabet= state.sort((item1: IpizzaDescription, item2: IpizzaDescription) => item1.title > item2.title ? 1 : -1);
        return [
          ...sortedByAlphabet
        ]     

    default:
      return state;
  }
}

const initialSortingMode: string = 'price';

export const sortingModeReducer = (state: string = initialSortingMode,  action: changeSortingModeActionType): string => {
  switch (action.type) {
    case CHANGE_SORTING_MODE:
      return action.payload
    default:
      return state;
  }
}

const initialCartState: [] = [];

export const cartReducer = (state: cartPizzaStateInterface[] | [] = initialCartState,  action: cartReducerActionsTypes): cartPizzaStateInterface[] | [] => {
  switch (action.type) {
    
      case ADD_NEW_PIZZA_TO_CART:

      const stateCopy = [...state];
      const newPizza = action.payload;

      if (!stateCopy.find((item) => item.base === newPizza.base && item.name === newPizza.name && item.size === newPizza.size)) {
        const newState = [
          ...stateCopy,
          {
            ...newPizza,
            count: 1,
            id: Date.now()
          }
        ]
        saveCartStoreToLocalStorage(newState)
        return newState;

      }
      
      const newStateCopy = stateCopy.map((item) => {
        if (item.base === newPizza.base && item.name === newPizza.name && item.size === newPizza.size) {
          return {
            ...item,
            count: item.count + 1
          }
        } 
          return item;
      }) 
      
        return [
          ...newStateCopy
        ]
    
      case CLEAR_CART:
      return initialCartState
    
      case REDUCE_COUNT:
      return action.payload    
    
      case INCREASE_COUNT:
      return action.payload   
    
      case DELETE_ORDER:
      return action.payload   
    
      case LOAD_CART_STATE:

      if (localStorage.getItem('state')) {
      
        const loadedStateJSON = localStorage.getItem('state');
        
        if (typeof loadedStateJSON === 'string') {
          const loadedState: cartPizzaStateInterface[] = JSON.parse(loadedStateJSON)
            return loadedState
        }
      
      } else {
        localStorage.clear()
      }
        return state
           
    default:
      return state;
  }
}
