import { 
  FILTER_ALL_PIZZA, 
  FILTER_MEAT_PIZZA, 
  FILTER_VEGETARIAN_PIZZA, 
  FILTER_SPICY_PIZZA, 
  SORT_BY_PRICE,
  SORT_BY_POPULARITY,
  SORT_BY_ALPHABET,
  CHANGE_SORTING_MODE,
  ADD_NEW_PIZZA_TO_CART,
  CLEAR_CART,
  REDUCE_COUNT,
  INCREASE_COUNT,
  DELETE_ORDER,
  LOAD_CART_STATE
} from '../constants/actionTypes'


export interface IpizzaDescription {
  id: number,
  title: string,
  type: string,
  image: string,
  availableBase: string[],
  availableSizes: number[],
  startPrice: number,
  rating: number
}

export interface IpizzaProps {
  id: number
  imgSrc: string
  startPrice: number
  name: string
  availableSizes: number[]
  availableBase: string[]
}

export interface PizzaConstructorPropsInterface {
  availableSizes: number[]
  availableBase: string[]
  base: string
  size: number
  baseHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  sizeHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}



export type filterAllPizzaActionType = {
  type: typeof FILTER_ALL_PIZZA
}

export type filterMeatPizzaActionType= {
  type: typeof FILTER_MEAT_PIZZA
}

export type filterVegetarianPizzaActionType = {
  type:  typeof FILTER_VEGETARIAN_PIZZA
}

export type filterSpicyPizzaActionType = {
  type:  typeof FILTER_SPICY_PIZZA
}



export type sortByPriceActionType = {
  type:  typeof SORT_BY_PRICE
}

export type sortByPopularityActionType = {
  type: typeof SORT_BY_POPULARITY
}

export type sortByAlphabetActionType = {
  type: typeof SORT_BY_ALPHABET
}

export type filterTypes = 
  filterAllPizzaActionType 
| filterMeatPizzaActionType 
| filterVegetarianPizzaActionType 
| filterSpicyPizzaActionType 
| sortByPriceActionType
| sortByPopularityActionType
| sortByAlphabetActionType


export type changeSortingModeActionType = {
  type: typeof CHANGE_SORTING_MODE,
  payload: 'price' | 'popularity' | 'alphabet'
}

export type sortingModeParameterType = 'price' | 'popularity' | 'alphabet';

export interface RouterLinkPropsType {
  path: string
  title: string
}

export interface cartPizzaInterface {
  id: number,
  image: string,
  name: string,
  base: string,
  size: number,
  price: number,
}

export interface cartPizzaStateInterface {
  id: number,
  image: string,
  name: string,
  base: string,
  size: number,
  price: number,
  count: number
}

export type addNewPizzaToCartActionType = {
  type: typeof ADD_NEW_PIZZA_TO_CART
  payload: cartPizzaInterface
}

export type clearCartActionType = {
  type: typeof CLEAR_CART
}

export type reduceCountActionType = {
  type: typeof REDUCE_COUNT,
  payload: cartPizzaStateInterface[] | []
}

export type increaseCountActionType = {
  type: typeof INCREASE_COUNT,
  payload: cartPizzaStateInterface[]
}

export type deleteOrderActionType = {
  type: typeof DELETE_ORDER
  payload: cartPizzaStateInterface[] | []
}

export type loadCartStateActionType = {
  type: typeof LOAD_CART_STATE
}

export type cartReducerActionsTypes = 
  reduceCountActionType 
| increaseCountActionType 
| addNewPizzaToCartActionType 
| clearCartActionType 
| deleteOrderActionType
| loadCartStateActionType

